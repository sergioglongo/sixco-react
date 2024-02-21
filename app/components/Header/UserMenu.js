import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import dummy from 'dan-api/dummy/dummyContents';
import link from 'dan-api/ui/link';
import useStyles from './header-jss';
import { setClientDataAction, setLogoutDataAction } from 'dan-redux/actions/Users';
import { AccountCircle } from '@mui/icons-material';
import { logout } from '../../api/apiclient/ApiClient';
import { useHistory } from 'react-router-dom';

function UserMenu(props) {
  const { classes, cx } = useStyles();
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    openMenu: null
  });
  const { setClientData, setLogoutData } = props;
  const history = useHistory();

  const handleMenu = menu => (event) => {
    const { openMenu } = menuState;
    setMenuState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, openMenu: null });
  };

  const handleLogOut = () => {
    setClientData({});
    setLogoutData();
    history.push('/auth/login');
  };

  const { dark } = props;
  const { anchorEl, openMenu } = menuState;
  return (
    <div>
      <Button onClick={handleMenu('user-setting')}>
        <Avatar
          alt={dummy.user.name}
          src={dummy.user.avatar}
        />
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenu === 'user-setting'}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to={link.profile}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </div>
  );
}

UserMenu.propTypes = {

  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false
};

const mapUserStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

const dispatchUserToProps = dispatch => ({
  setClientData: bindActionCreators(setClientDataAction, dispatch),
  setLogoutData: bindActionCreators(setLogoutDataAction, dispatch),
});

const UserMenuMapped = connect(
  mapUserStateToProps,
  dispatchUserToProps
)(UserMenu);

export default UserMenuMapped;
