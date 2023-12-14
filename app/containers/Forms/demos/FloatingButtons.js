import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { makeStyles } from 'tss-react/mui';
import SwipeableViews from 'react18-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import EditIcon from '@mui/icons-material/Create';
import NavigationIcon from '@mui/icons-material/Navigation';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    margin: '0 auto',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function FloatingButtons() {
  const theme = useTheme();
  const {
    classes,
    cx
  } = useStyles();
  const [val, setVal] = useState(0);

  const handleChange = (event, value) => {
    setVal(value);
  };

  const handleChangeIndex = index => {
    setVal(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
    },
    {
      color: 'inherit',
      className: cx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
    },
  ];

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>Floating Action Buttons</Typography>
        <Typography className={classes.divider}>
          A floating action button represents the primary action in an application.
        </Typography>
        <Fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" className={classes.button}>
          <Icon>edit_icon</Icon>
        </Fab>
        <Fab variant="extended" color="secondary" aria-label="Delete" className={classes.button}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab disabled aria-label="delete" className={classes.button}>
          <DeleteIcon />
        </Fab>
      </Grid>
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>Floating BUtton in Tab</Typography>
        <Typography className={classes.divider}>
          A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.
        </Typography>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={val}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={val}
            onChangeIndex={handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>Item One</TabContainer>
            <TabContainer dir={theme.direction}>Item Two</TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
          </SwipeableViews>
          {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={val === index}
              timeout={transitionDuration}
              style={{
                transitionDelay: val === index ? transitionDuration.exit : 0,
              }}
              unmountOnExit
            >
              <Fab className={fab.className} color={fab.color}>
                {fab.icon}
              </Fab>
            </Zoom>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default FloatingButtons;
