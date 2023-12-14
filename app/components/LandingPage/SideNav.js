import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import SideNavMenu from './SideNavMenu';
import useStyles from '../Sidebar/sidebar-jss';

function createData(id, name, url) {
  return {
    id,
    name,
    url,
  };
}

function SideNav(props) {
  const { classes, cx } = useStyles();
  const {
    open,
    gotoSlide,
    curSlide
  } = props;

  const anchor = 'left';
  const menuList = [
    createData(0, 'Home', '#banner'),
    createData(1, 'Feature', '#feature'),
    createData(2, 'Showcase', '#showcase'),
    createData(3, 'Testimonials', '#testimonials'),
    createData(4, 'Technology', '#tech'),
    createData(5, 'Pricing', '#pricing'),
    createData(6, 'Contact', '#contact'),
  ];

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cx(classes.drawer, classes.drawerPaper),
      }}
      open={open}
      anchor={anchor}
    >
      <SideNavMenu
        drawerPaper={open}
        menuList={menuList}
        gotoSlide={gotoSlide}
        active={curSlide}
      />
    </Drawer>
  );
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  gotoSlide: PropTypes.func.isRequired,
  curSlide: PropTypes.number.isRequired,
};

export default SideNav;
