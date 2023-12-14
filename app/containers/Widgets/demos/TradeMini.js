import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { TradingFormWidget } from 'dan-components';

const useStyles = makeStyles()(() => ({
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
}));

function TradeMini() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.miniWrap}>
      <TradingFormWidget />
    </div>
  );
}

export default TradeMini;
