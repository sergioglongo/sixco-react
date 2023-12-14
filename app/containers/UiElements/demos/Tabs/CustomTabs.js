import React from 'react';
import { makeStyles, withStyles } from 'tss-react/mui';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const AntTabs = withStyles(Tabs, {
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
});

const AntTab = withStyles(
  (props) => <Tab disableRipple {...props} />,
  (theme, _params, classes) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      [`&.${classes.selected}`]: {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  })
);

const StyledTabs = withStyles(
  (props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />,
  {
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  }
);

const StyledTab = withStyles((props) => <Tab disableRipple {...props} />, (theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}));

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const {
    classes
  } = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
