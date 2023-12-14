import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import avatarApi from 'dan-api/images/avatars';
import {
  pink, green, deepOrange, deepPurple
} from '@mui/material/colors';

const useStyles = makeStyles()(() => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
}));

function AvatarsDemo() {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Image Avatars</Typography>
        <div className={classes.row}>
          <Avatar alt="Remy Sharp" src={avatarApi[7]} className={classes.avatar} />
          <Avatar
            alt="Adelle Charles"
            src={avatarApi[5]}
            className={cx(classes.avatar, classes.bigAvatar)}
          />
        </div>
      </Grid>
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Icon Avatars</Typography>
        <div className={classes.row}>
          <Avatar className={classes.avatar}>
            <FolderIcon />
          </Avatar>
          <Avatar className={classes.pinkAvatar}>
            <PageviewIcon />
          </Avatar>
          <Avatar className={classes.greenAvatar}>
            <AssignmentIcon />
          </Avatar>
        </div>
      </Grid>
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Icon Avatars</Typography>
        <div className={classes.row}>
          <Avatar className={classes.avatar}>H</Avatar>
          <Avatar className={classes.orangeAvatar}>N</Avatar>
          <Avatar className={classes.purpleAvatar}>OP</Avatar>
        </div>
      </Grid>
    </Grid>
  );
}

export default AvatarsDemo;
