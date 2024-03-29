import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from './sidebar-jss';
import SixcoIcon from '../../api/icons/sixco-icons';
import { Typography } from '@mui/material';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

// eslint-disable-next-line
function MainMenu(props) {
  const { classes, cx } = useStyles();
  const {
    openSubMenu,
    open,
    dataMenu,
    setClientData,
    setLogoutData
  } = props;

  const handleClick = () => {
    const { toggleDrawerOpen, loadTransition } = props;
    toggleDrawerOpen();
    loadTransition(false);
  };

  const handleLogOut = () => {
    setClientData({});
    setLogoutData();
  };

  const getMenus = menuArray => menuArray.map((item, index) => {
    if (item.child || item.linkParent) {
      return (
        <div key={index.toString()}>
          <ListItem
            button
            component={LinkBtn}
            to={item.linkParent ? item.linkParent : '#'}
            className={
              cx(
                classes.head,
                item.icon ? classes.iconed : '',
                open.indexOf(item.key) > -1 ? classes.opened : '',
              )
            }
            onClick={() => openSubMenu(item.key, item.keyParent)}
          >
            <ListItemIcon key={index} className={classes.icon}>
              <SixcoIcon iconName={item.icon} />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
            {!item.linkParent && (
              <span>
                {open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore />}
              </span>
            )}
          </ListItem>
          {!item.linkParent && (
            <Collapse
              component="div"
              className={cx(
                classes.nolist,
                (item.keyParent ? classes.child : ''),
              )}
              in={open.indexOf(item.key) > -1}
              timeout="auto"
              unmountOnExit
            >
              <List className={classes.dense} component="nav" dense>
                {getMenus(item.child, 'key')}
              </List>
            </Collapse>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
        <ListSubheader
          disableSticky
          key={index.toString()}
          component="div"
          className={classes.title}
        >
          {item.name}
        </ListSubheader>
      );
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact
        className={classes.nested}
        activeClassName={classes.active}
        component={LinkBtn}
        to={item.link}
        onClick={() => handleClick()}
      >
        <ListItemText classes={{ primary: classes.primary }} inset primary={item.name} />
        {item.badge && (
          <Chip color="primary" label={item.badge} className={classes.badge} />
        )}
      </ListItem>
    );
  });
  return (
    <div>
      {getMenus(dataMenu)}
      <div>
        <ListItem
          button
          onClick={handleLogOut}
          // style={{ paddingLeft: '24px' }}
          className={classes.head}
        >
          <ListItemIcon className={classes.icon}>
            <SixcoIcon iconName={'ExitToApp'} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={'Salir'} />
        </ListItem>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Typography component="p" fontSize={'10px'}>
          Versión: 0.1.16
        </Typography>
      </div>
    </div>
  );
}

MainMenu.propTypes = {

  open: PropTypes.array.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  dataMenu: PropTypes.array.isRequired,
};

const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

const MainMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default MainMenuMapped;
