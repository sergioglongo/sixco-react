import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles, withStyles } from 'tss-react/mui';
import classNames from "classnames";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import logo from 'dan-images/logo-sixco.svg';
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
    isLogin,
    setClientData,
    setLogoutData,
  } = props;

  const setStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;
      case 'idle':
        return classes.idle;
      case 'bussy':
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
          <img src={logo} alt={brand.name} />
          {brand.name}
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
              src={dummy.user.avatar}
              className={classNames(
                classes.avatar,
                classes.bigAvatar
              )}
            />
            <div>
              <h4>
                {clientData.accountname +
                  " " +
                  clientData.apellido}
              </h4>
              <Button size="small">
                <i
                  className={classNames(
                    classes.dotStatus,
                    setStatus(status)
                  )}
                />
                {"En línea"}
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
