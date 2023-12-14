import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { TaskWidget } from 'dan-components';

const useStyles = makeStyles()(() => ({
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
}));

function TodoListMini() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.miniWrap}>
      <TaskWidget />
    </div>
  );
}

export default TodoListMini;
