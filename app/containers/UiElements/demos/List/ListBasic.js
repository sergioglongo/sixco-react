import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { red, green, amber } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    margin: 10
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
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function ListBasic() {
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
        <Typography variant="button" className={classes.divider}>Simple List Divider</Typography>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Inset Divider</Typography>
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
            <li>
              <Divider variant="inset" />
            </li>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarGreen}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
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
    </Grid>
  );
}

export default ListBasic;
