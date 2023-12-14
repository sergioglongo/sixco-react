import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { CalculatorWidget } from 'dan-components';

const useStyles = makeStyles()(() => ({
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
}));

function CalculatorMini() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.miniWrap}>
      <CalculatorWidget />
    </div>
  );
}

export default CalculatorMini;
