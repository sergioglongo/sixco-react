import React from 'react';
import Paper from '@mui/material/Paper';
import Calculator from '../Calculator';
import useStyles from './widget-jss';

function CalculatorWidget() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.rootCalculator}>
      <Calculator />
    </Paper>
  );
}

export default CalculatorWidget;
