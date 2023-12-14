import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmailMenu from './EmailMenu';
import useStyles from './email-jss';

function EmailSidebar(props) {
  const { classes } = useStyles();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  const {
    compose,
    goto,
    selected,
    handleDrawerToggle,
    mobileOpen
  } = props;
  return (
    <Fragment>
      {!mdUp && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <EmailMenu compose={compose} goto={goto} onClose={handleDrawerToggle} selected={selected} />
        </Drawer>
      )}
      {!mdDown && (
        <Drawer
          variant="permanent"
          className={classes.sidebar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <EmailMenu compose={compose} goto={goto} selected={selected} />
        </Drawer>
      )}
    </Fragment>
  );
}

EmailSidebar.propTypes = {
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default EmailSidebar;
