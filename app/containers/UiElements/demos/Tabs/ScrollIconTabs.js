import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const {
    classes
  } = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          allowScrollButtonsMobile>
          <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
