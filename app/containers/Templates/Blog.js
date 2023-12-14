import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAction, playTransitionAction } from 'dan-redux/actions/uiActions';
import { HeaderMenu, Footer, GuideSlider } from 'dan-components';
import dataMenu from 'dan-api/ui/menuBlog';
import Decoration from './Decoration';
import useStyles from './appStyles-jss';

function Blog(props) {
  const [transform, setTransform] = useState(0);
  const [openGuide, setOpenGuide] = useState(false);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setTransform(scroll);
  };

  useEffect(() => {
    const { history } = props;
    // Scroll content to top
    window.addEventListener('scroll', handleScroll);
    // Execute all arguments when page changes
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (unlisten != null) {
        unlisten();
      }
    };
  }, []);

  const handleOpenGuide = () => {
    setOpenGuide(true);
  };

  const handleCloseGuide = () => {
    setOpenGuide(false);
  };

  const { classes } = useStyles();
  const {
    children,
    mode,
    gradient,
    deco,
    layout,
    history,
    changeMode,
    toggleDrawer,
    sidebarOpen,
    loadTransition
  } = props;
  return (
    <div className={classes.appFrameLanding} id="mainContent">
      <GuideSlider openGuide={openGuide} closeGuide={handleCloseGuide} />
      <Decoration
        mode={mode}
        gradient={gradient}
        decoration={deco}
        bgPosition="header"
        horizontalMenu={layout === 'top-navigation' || layout === 'mega-menu'}
      />
      <HeaderMenu
        type="top-navigation"
        dataMenu={dataMenu}
        fixed={transform > 64}
        changeMode={changeMode}
        mode={mode}
        history={history}
        openGuide={handleOpenGuide}
        toggleDrawerOpen={toggleDrawer}
        openMobileNav={sidebarOpen}
        loadTransition={loadTransition}
        isLogin={false}
        logoLink="/blog"
      />
      <div className={classes.blogWrap}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  layout: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  loadTransition: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sidebarOpen: state.ui.sidebarOpen,
  pageLoaded: state.ui.pageLoaded,
  mode: state.ui.type,
  gradient: state.ui.gradient,
  deco: state.ui.decoration,
  layout: state.ui.layout,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const BlogMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

export default BlogMapped;
