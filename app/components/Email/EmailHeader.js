import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './email-jss';

function EmailHeader(props) {
  const { search, handleDrawerToggle } = props;
  const { classes } = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerToggle()}
          className={classes.navIconHide}
          size="large">
          <MenuIcon />
        </IconButton>
        <div className={classes.flex}>
          <div className={classes.wrapper}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input className={classes.input} onChange={(event) => search(event)} placeholder="Search Email" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

EmailHeader.propTypes = {
  search: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default EmailHeader;
