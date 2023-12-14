import React from 'react';
import { makeStyles } from 'tss-react/mui';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function LinearStatic() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={20} />
      <br />
      <LinearProgress variant="determinate" value={60} color="secondary" />
    </div>
  );
}

export default LinearStatic;
