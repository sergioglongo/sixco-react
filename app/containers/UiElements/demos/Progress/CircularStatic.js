import React from 'react';
import { makeStyles } from 'tss-react/mui';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles()((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function CircularStatic() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <CircularProgress className={classes.progress} variant="determinate" value={5} />
      <CircularProgress className={classes.progress} variant="determinate" value={25} />
      <CircularProgress className={classes.progress} variant="determinate" value={50} />
      <CircularProgress className={classes.progress} variant="determinate" value={75} />
      <CircularProgress className={classes.progress} variant="determinate" value={100} />
    </div>
  );
}

export default CircularStatic;
