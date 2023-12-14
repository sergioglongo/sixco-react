import React from 'react';
import { makeStyles } from 'tss-react/mui';
import CircularProgress from '@mui/material/CircularProgress';
import { purple } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function CircularIndeterminate() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} size={50} />
      <CircularProgress className={classes.progress} color="secondary" />
      <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
    </div>
  );
}

export default CircularIndeterminate;
