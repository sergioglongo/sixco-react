import React from 'react';
import { makeStyles } from 'tss-react/mui';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function LinearIndeterminate() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}

export default LinearIndeterminate;
