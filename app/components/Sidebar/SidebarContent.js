import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from "classnames";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import company from 'dan-images/company-logo-example.jpg';
import logo from 'dan-images/logo-sixco.svg';
import logoWhite from 'dan-images/logo-sixco-white.svg';
import MainMenu from './MainMenu';
import useStyles from './sidebar-jss';
import {
  setClientDataAction,
  setLogoutDataAction,
} from "dan-redux/actions/Users";

function SidebarContent(props) {
  const { classes, cx } = useStyles();
  const [transform, setTransform] = useState(0);

  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  useEffect(() => {
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    clientData,
    themeType,
    isLogin,
    setClientData,
    setLogoutData,
  } = props;

  const setStatus = st => {
    switch (st) {
      case 'Habilitado':
        return classes.online;
      case 'Suspendido':
        return classes.idle;
      case 'Incompleto':
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

  return (
    <div
      className={classNames(
        classes.drawerInner,
        !drawerPaper ? classes.drawerPaperClose : ""
      )}
    >
      <div className={classes.drawerHeader}>
        <NavLink
          to="/app"
          className={classNames(
            classes.brand,
            classes.brandBar,
            turnDarker && classes.darker
          )}
        >
          <img src={themeType === 'dark' ? logoWhite : logo} alt={brand.name} width={'180px'} height={'60px'}
            style={{
              filter: themeType === 'dark' ? 'drop-shadow(2px 5px 5px rgba(224, 247, 250, 0.2))' : 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2))'
            }}
          />
        </NavLink>
        {isLogin && (
          <div
            className={classNames(classes.profile, classes.user)}
            style={{
              opacity: 1 - transform / 100,
              marginTop: transform * -0.3,
            }}
          >
            <Avatar
              alt={dummy.user.name}
              src={company}
              className={classNames(
                classes.avatar,
                classes.bigAvatar
              )}
            />
            <div>
              <h4>
                {clientData.firstname}
              </h4>
              <h4>
                {clientData.lastname}
              </h4>
              <Button size="small"
                className={classes.textColor}
              >
                <i
                  className={classNames(
                    classes.dotStatus,
                    setStatus(status)
                  )}
                />
                {status}
              </Button>
            </div>
          </div>
        )}
      </div>
      <div
        id="sidebar"
        className={classNames(
          classes.menuContainer,
          leftSidebar && classes.rounded,
          isLogin && classes.withProfile
        )}
      >
        <div style={{ height: '16px' }}></div>
        <MainMenu
          setClientData={setClientData}
          setLogoutData={setLogoutData}
          loadTransition={loadTransition}
          dataMenu={dataMenu}
          toggleDrawerOpen={toggleDrawerOpen}
        />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {

  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  clientData: PropTypes.object.isRequired,
  themeType: PropTypes.string.isRequired
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => { },
  loadTransition: () => { },
  anchorEl: null,
  isLogin: true,
};

const mapUserStateToProps = (state) => ({
  clientData: state.user.clientData,
  themeType: state.ui.type
});

const dispatchUserToProps = (dispatch) => ({
  setClientData: bindActionCreators(setClientDataAction, dispatch),
  setLogoutData: bindActionCreators(setLogoutDataAction, dispatch),
});

const SidebarContentMapped = connect(
  mapUserStateToProps,
  dispatchUserToProps
)(SidebarContent);

export default SidebarContentMapped;
