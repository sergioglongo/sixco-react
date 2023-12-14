import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mailFolderListItems, otherMailFolderListItems } from './menuData';

const drawerWidth = 240;

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    height: 460,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 36,
  },
  drawerPaper: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 70,
    [theme.breakpoints.up('sm')]: {
      width: 70,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function FullHeader() {
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  const [open, setOpen] = useState(true);

  const resize = () => {
    setOpen(window.innerWidth >= 760);
  };

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const {
    classes,
    cx
  } = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>{mailFolderListItems}</List>
      <Divider />
      <List>{otherMailFolderListItems}</List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerToggle()}
            className={cx(classes.menuButton)}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Clipped under the app bar
          </Typography>
        </Toolbar>
      </AppBar>
      {!mdUp && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => handleDrawerToggle()}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      )}
      {!mdDown && (
        <Drawer
          variant="permanent"
          classes={{
            paper: cx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          {drawer}
        </Drawer>
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>Your App Content</Typography>
      </main>
    </div>
  );
}

export default FullHeader;
