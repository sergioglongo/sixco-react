import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from 'tss-react/mui';
import classNames from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import dummy from 'dan-api/dummy/dummyContents';
import useStyles from './sidebar-jss';
import SidebarContent from './SidebarContent';
import { connect } from 'react-redux';

function Sidebar(props) {
  const { classes, cx } = useStyles();
  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const [turnDarker, setTurnDarker] = useState(false);
  const {
    open,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    loginData
  } = props;

  // Initial header style
  let flagDarker = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 30);
    if (flagDarker !== newFlagDarker) {
      setTurnDarker(newFlagDarker);
      flagDarker = newFlagDarker;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = st => {
    setStatus(st);
    handleClose();
  };


  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  
  useEffect(() => {
    switch(loginData?.estado || 5){
      case 1: setStatus('Habilitado');
      break;
      case 2: setStatus('Deshabilitado');
      break;
      case 3: setStatus('Incompleto');
      break;
      case 4: setStatus('Suspendido');
      break;
      default: setStatus('Habilitado');
    }
  }, [loginData]);

  return (
    <Fragment>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!open}
          anchor={leftSidebar ? 'left' : 'right'}
        >
          <div className={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar={leftSidebar}
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={handleOpen}
              closeMenuStatus={handleClose}
              changeStatus={handleChangeStatus}
            />
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          onClose={toggleDrawerOpen}
          className={open ? classes.drawer : ''}
          classes={{
            paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),
          }}
          open={open}
          anchor={leftSidebar ? 'left' : 'right'}
        >
          <SidebarContent
            drawerPaper={open}
            leftSidebar={leftSidebar}
            turnDarker={turnDarker}
            loadTransition={loadTransition}
            dataMenu={dataMenu}
            status={status}
            anchorEl={anchorEl}
            openMenuStatus={handleOpen}
            closeMenuStatus={handleClose}
            changeStatus={handleChangeStatus}
          />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

Sidebar.propTypes = {

  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  leftSidebar: PropTypes.bool,
  dataMenu: PropTypes.array.isRequired,
  loginData: PropTypes.object.isRequired
};

Sidebar.defaultProps = {
  leftSidebar: true
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  loginData: state.login.loginData,
});

const SidebarMapped = connect(
  mapStateToProps,
)(Sidebar);

export default SidebarMapped;
