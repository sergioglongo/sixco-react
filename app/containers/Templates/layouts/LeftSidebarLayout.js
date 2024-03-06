import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {
  Header,
  Sidebar,
  BreadCrumb,
} from 'dan-components';
import dataMenu from 'dan-api/ui/menu';
import useStyles from '../appStyles-jss';
import intro from 'dan-images/bg-red.jpg';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

function LeftSidebarLayout(props) {
  const { classes, cx } = useStyles();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide,
    loginData
  } = props;
  const title = 'Sixco - Portal';
  const description = '';
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Header
        toggleDrawerOpen={toggleDrawer}
        margin={sidebarOpen}
        gradient={gradient}
        position="left-sidebar"
        changeMode={changeMode}
        mode={mode}
        title={place == 'app' ? '' : place}
        history={history}
        openGuide={handleOpenGuide}
      />
      <Sidebar
        open={sidebarOpen}
        toggleDrawerOpen={toggleDrawer}
        loadTransition={loadTransition}
        dataMenu={loginData.estado != 3 ? dataMenu : []}
        leftSidebar
      />
      <main className={cx(classes.content, !sidebarOpen ? classes.contentPaddingLeft : '')} id="mainContent">
        {/* <Decoration
          mode={mode}
          gradient={gradient}
          decoration={deco}
          bgPosition={bgPosition}
          horizontalMenu={false}
        /> */}

        <img src={intro} alt={'background'} width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'absolute', left: 0, top: 0 }} />

        <section className={cx(classes.mainWrap, classes.sidebarLayout)}>
          {titleException.indexOf(history.location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <Typography component="h4" className={classes.lightTitle} variant="h4">{place}</Typography>
              <BreadCrumb separator=" / " theme={bgPosition === 'header' ? 'dark' : 'light'} location={history.location} />
            </div>
          )}
          {!pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />)}
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              {children}
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

LeftSidebarLayout.propTypes = {

  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired
};
LeftSidebarLayout.propTypes = {
  loginData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  loginData: state.login.loginData,
});

const LeftSidebarLayoutMapped = connect(
  mapStateToProps,
)(LeftSidebarLayout);

export default LeftSidebarLayoutMapped;
