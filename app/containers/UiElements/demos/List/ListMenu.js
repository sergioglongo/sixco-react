import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import Collapse from '@mui/material/Collapse';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {
  red, green, amber, lightBlue, pink, teal
} from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    margin: 10
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  avatarAmber: {
    backgroundColor: amber[500],
  },
  iconBlue: {
    color: lightBlue[500]
  },
  iconPink: {
    color: pink[500]
  },
  iconAmber: {
    color: amber[500]
  },
  iconTeal: {
    color: teal[500]
  },
}));

function ListMenu() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const {
    classes
  } = useStyles();

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Menu List</Typography>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon className={classes.iconPink} />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon className={classes.iconBlue} />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Folder List</Typography>
        <div className={classes.root}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarRed}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarGreen}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarAmber}>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Inset List</Typography>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <StarIcon className={classes.iconAmber} />
              </ListItemIcon>
              <ListItemText variant="inset" primary="Chelsea Otakan" />
            </ListItem>
            <ListItem button>
              <ListItemText variant="inset" primary="Eric Hoffman" />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Nested List</Typography>
        <div className={classes.root}>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
          >
            <ListItem button>
              <ListItemIcon>
                <SendIcon className={classes.iconTeal} />
              </ListItemIcon>
              <ListItemText variant="inset" primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon className={classes.iconBlue} />
              </ListItemIcon>
              <ListItemText variant="inset" primary="Drafts" />
            </ListItem>
            <ListItem button onClick={() => handleClick()}>
              <ListItemIcon>
                <InboxIcon className={classes.iconPink} />
              </ListItemIcon>
              <ListItemText variant="inset" primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder className={classes.iconAmber} />
                  </ListItemIcon>
                  <ListItemText variant="inset" primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

export default ListMenu;
