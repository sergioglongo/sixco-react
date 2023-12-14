import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles()((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 10
  },
}));

function ListControl() {
  const [checkState, setCheck] = useState({
    checked: [0],
    checked2: [1],
    checked3: ['wifi']
  });

  const handleToggle = value => () => {
    const { checked } = checkState;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheck({
      checked: newChecked,
      checked2: newChecked,
      checked3: newChecked,
    });
  };

  const {
    classes
  } = useStyles();
  const { checked, checked2, checked3 } = checkState;
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid item md={4} xs={12}>
        <Typography variant="button" className={classes.divider}>Checkbox</Typography>
        <div className={classes.root}>
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={() => handleToggle(value)}
                className={classes.listItem}
              >
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments" size="large">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant="button" className={classes.divider}>Checkbox</Typography>
        <div className={classes.root}>
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem key={value} dense button className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/images/pp_boy.svg" />
                </ListItemAvatar>
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleToggle(value)}
                    checked={checked2.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant="button" className={classes.divider}>Switch</Typography>
        <div className={classes.root}>
          <List subheader={<ListSubheader>Settings</ListSubheader>}>
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText primary="Wi-Fi" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={() => handleToggle('wifi')}
                  checked={checked3.indexOf('wifi') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon>
              <ListItemText primary="Bluetooth" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={() => handleToggle('bluetooth')}
                  checked={checked3.indexOf('bluetooth') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

export default ListControl;
