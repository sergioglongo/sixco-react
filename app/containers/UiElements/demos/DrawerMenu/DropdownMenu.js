import React from 'react';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

const options2 = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function SimpleListMenu() {
  const {
    classes
  } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl2);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              onClick={handleClickListItem}
            >
              <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <Grid item md={4}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            size="large">
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={open}
            onClose={handleClose2}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options2.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose2}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
}
