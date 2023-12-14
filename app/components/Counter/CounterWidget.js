import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: 190,
    marginBottom: 6,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: 126,
      marginBottom: -1,
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > *': {
      padding: '0 5px'
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
    fontWeight: 400
  },
  counter: {
    color: theme.palette.common.white,
    fontSize: 28,
    fontWeight: 500
  },
  customContent: {
    textAlign: 'right'
  }
}));

function CounterWidget(props) {
  const {
    classes
  } = useStyles();
  const {
    color,
    start,
    end,
    duration,
    title,
    children,
    unitBefore,
    unitAfter
  } = props;
  return (
    <Paper className={classes.root} style={{ backgroundColor: color }}>
      <div>
        <Typography className={classes.counter}>
          {unitBefore}
          <CountUp start={start} end={end} duration={duration} useEasing />
          {unitAfter}
        </Typography>
        <Typography className={classes.title} variant="subtitle1">{title}</Typography>
      </div>
      <div className={classes.customContent}>
        {children}
      </div>
    </Paper>
  );
}

CounterWidget.propTypes = {
  color: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  unitBefore: PropTypes.string,
  unitAfter: PropTypes.string,
};

CounterWidget.defaultProps = {
  unitBefore: '',
  unitAfter: '',
};

export default CounterWidget;
