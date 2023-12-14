import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles()((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function CircularDeterminate() {
  const [completed, setComplete] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setComplete((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const {
    classes
  } = useStyles();
  return (
    <div>
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={completed}
      />
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        size={50}
        value={completed}
      />
      <CircularProgress
        className={classes.progress}
        color="secondary"
        variant="determinate"
        value={completed}
      />
      <CircularProgress
        className={classes.progress}
        color="secondary"
        variant="determinate"
        size={50}
        value={completed}
      />
    </div>
  );
}

export default CircularDeterminate;
