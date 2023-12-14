import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  appFrame: {
    width: '100%',
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginBottom: theme.spacing(1),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: '100%',
  },
}));

function MobileNotif() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    classes,
    cx
  } = useStyles();
  const fabClassName = cx(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="outlined" color="primary" onClick={() => handleClick()}>
        Open snackbar
      </Button>
      <div className={classes.appFrame}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              size="large">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Out of my way!
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab color="secondary" className={fabClassName}>
          <AddIcon />
        </Fab>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => handleClose()}
          ContentProps={{
            'aria-describedby': 'snackbar-fab-message-id',
            className: classes.snackbarContent,
          }}
          message={<span id="snackbar-fab-message-id">Archived</span>}
          action={(
            <Button color="inherit" size="small" onClick={() => handleClose()}>
              Undo
            </Button>
          )}
          className={classes.snackbar}
        />
      </div>
    </div>
  );
}

export default MobileNotif;
