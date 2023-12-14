import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LocalPhone from '@mui/icons-material/LocalPhone';
import DateRange from '@mui/icons-material/DateRange';
import LocationOn from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import PapperBlock from '../PapperBlock/PapperBlock';
import useStyles from './widget-jss';

function ProfileWidget() {
  const { classes } = useStyles();
  return (
    <PapperBlock title="About Me" whiteBg noMargin desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
      <Divider className={classes.divider} />
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Born" secondary="Jan 9, 1994" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary="(+62)8765432190" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address" secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain" />
        </ListItem>
      </List>
    </PapperBlock>
  );
}

export default ProfileWidget;
