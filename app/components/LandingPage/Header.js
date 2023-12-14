import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SmoothScrollLink } from 'organism-react-scroll-nav';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import SideNavMobile from './SideNavMobile';
import useStyles from './landingStyle-jss';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Header(props) {
  const { turnDarker } = props;
  const { classes, cx } = useStyles();
  const [open, setOpen] = useState(false);

  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const gradient = useSelector(state => state.ui.gradient);

  const menuList = [
    createData('feature', '#feature'),
    createData('showcase', '#showcase'),
    createData('testimonials', '#testimonials'),
    createData('technology', '#tech'),
    createData('pricing', '#pricing'),
    createData('contact', '#contact'),
  ];

  const toggleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };

  const MenuItem = ({ targetInfo, ...reset }) => {
    let activeClass = '';
    if (targetInfo.active) {
      activeClass = 'active';
    }
    return (
      <li
        className={activeClass}
        {...reset}
      />
    );
  };

  MenuItem.propTypes = {
    targetInfo: PropTypes.object,
  };

  MenuItem.defaultProps = {
    targetInfo: null
  };

  return <>
    {!lgUp && (
      <SwipeableDrawer
        onClose={toggleDrawerClose}
        onOpen={toggleDrawerOpen}
        open={open}
        anchor="left"
      >
        <SideNavMobile menuList={menuList} closeDrawer={toggleDrawerClose} />
      </SwipeableDrawer>
    )}
    <AppBar
      className={
        cx(
          classes.header,
          turnDarker && classes.darker,
          gradient ? classes.gradient : classes.solid
        )
      }
    >
      {!lgUp && (
        <IconButton
          className={classes.menuButton}
          aria-label="Menu"
          onClick={toggleDrawerOpen}
          size="large">
          <MenuIcon />
        </IconButton>
      )}
      <div className={classes.container}>
        <div className={classes.spaceContainer}>
          <NavLink to="/" className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
          {!lgDown && (
            <nav id="nav-parent">
              <ul>
                {menuList.map(item => (
                  <SmoothScrollLink
                    key={item.id.toString()}
                    scrollRefId="nav-parent"
                    container={<MenuItem />}
                    targetId={item.name}
                  >
                    <Button href={item.url}>{item.name}</Button>
                  </SmoothScrollLink>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </AppBar>
  </>;
}

Header.propTypes = {
  turnDarker: PropTypes.bool.isRequired,
};

export default Header;
