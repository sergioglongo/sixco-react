import React from 'react';
import { makeStyles } from 'tss-react/mui';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function LinearQuery() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
      <br />
      <LinearProgress color="secondary" variant="query" />
    </div>
  );
}

export default LinearQuery;
