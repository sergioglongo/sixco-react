import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import TrendingUp from '@mui/icons-material/TrendingUp';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingFlat from '@mui/icons-material/TrendingFlat';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { green, red } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    height: 196,
    overflow: 'hidden',
    marginBottom: 6,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.papaer,
    [theme.breakpoints.up('sm')]: {
      marginBottom: -1,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > *': {
      padding: '0 5px'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400,
    flex: 1,
    '& span': {
      fontWeight: 'bold',
      fontSize: 12,
      '& svg': {
        width: 16
      }
    }
  },
  extend: {
    color: theme.palette.common.white,
    fontSize: 12,
    padding: theme.spacing(0.5),
    position: 'relative',
    zIndex: 1,
    marginBottom: 4
  },
  counter: {
    color: theme.palette.text.secondary,
    fontSize: 36,
    fontWeight: 500
  },
  content: {
    textAlign: 'right',
    position: 'relative'
  },
  up: {
    color: green[500],
    '& svg': {
      fill: green[500],
    }
  },
  down: {
    color: red[500],
    '& svg': {
      fill: red[500],
    }
  },
  flat: {
    color: theme.palette.divider,
    '& svg': {
      fill: theme.palette.divider,
    }
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(0.5),
  },
  decoration: {
    borderRadius: '50%',
    width: '200%',
    position: 'absolute',
    height: 260,
    left: '-50%',
    top: -20
  }
}));

function CounterTrading(props) {
  const {
    classes
  } = useStyles();
  const {
    color,
    start,
    end,
    duration,
    logo,
    title,
    children,
    unitBefore,
    unitAfter,
    position,
    value,
    lowest,
    highest,
  } = props;
  const getCondition = (pos, val) => {
    if (pos === 'up') {
      return (
        <span className={classes.up}>
          <TrendingUp />
          &nbsp;
          {val}
          %
        </span>
      );
    }
    if (pos === 'down') {
      return (
        <span className={classes.down}>
          <TrendingDown />
          &nbsp;
          {val}
          %
        </span>
      );
    }
    return (
      <span className={classes.flat}>
        <TrendingFlat />
          &nbsp;0%
      </span>
    );
  };
  return (
    <Paper className={classes.root}>
      <header className={classes.header}>
        <Avatar
          alt="bitcoin"
          src={logo}
          className={classes.avatar}
        />
        <div className={classes.title}>
          <Typography className={classes.title} noWrap variant="subtitle1">{title}</Typography>
          {getCondition(position, value)}
        </div>
        <Typography className={classes.counter}>
          {unitBefore}
          <CountUp start={start} end={end} duration={duration} useEasing />
          {unitAfter}
        </Typography>
      </header>
      <div className={classes.content} style={{ backgroundColor: color }}>
        <span className={classes.decoration} style={{ backgroundColor: color }} />
        <div className={classes.extend}>
          <ul>
            <li>
              Lowest: $&nbsp;
              {lowest}
            </li>
            <li>
              Highest: $&nbsp;
              {highest}
            </li>
          </ul>
        </div>
        {children}
      </div>
    </Paper>
  );
}

CounterTrading.propTypes = {
  color: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  unitBefore: PropTypes.string,
  unitAfter: PropTypes.string,
  position: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  lowest: PropTypes.number.isRequired,
  highest: PropTypes.number.isRequired,
};

CounterTrading.defaultProps = {
  unitBefore: '',
  unitAfter: '',
};

export default CounterTrading;
