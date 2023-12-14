import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

function Breakpoint() {
  const { classes } = useStyles();
  const width = useWidth();

  const xlDown = useMediaQuery(theme => theme.breakpoints.down('xl'));
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const lgOnly = useMediaQuery(theme => theme.breakpoints.only('lg'));

  const xlUp = useMediaQuery(theme => theme.breakpoints.up('xl'));
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      {/* Breakpoin up block */}
      <Typography variant="h5">Breakpoint up</Typography>
      <Typography gutterBottom noWrap>
        Using any breakpoint up property, the given children will be hidden at or above the breakpoint.
      </Typography>
      <div className={classes.container}>
        {!smUp && (
          <Paper className={classes.paper}>smUp</Paper>
        )}
        {!mdUp && (
          <Paper className={classes.paper}>mdUp</Paper>
        )}
        {!lgUp && (
          <Paper className={classes.paper}>lgUp</Paper>
        )}
        {!xlUp && (
          <Paper className={classes.paper}>xlUp</Paper>
        )}
      </div>
      <Typography variant="caption" gutterBottom align="center">
        Current width:&nbsp;
        {width}
      </Typography>
      <Divider className={classes.divider} />
      {/* Breakpoin down block */}
      <Typography variant="h5">Breakpoint down</Typography>
      <Typography gutterBottom noWrap>
        Using any breakpoint down property, the given children will be hidden at or below the breakpoint.
      </Typography>
      <div className={classes.container}>
        {!smDown && (
          <Paper className={classes.paper}>smDown</Paper>
        )}
        {!mdDown && (
          <Paper className={classes.paper}>mdDown</Paper>
        )}
        {!lgDown && (
          <Paper className={classes.paper}>lgDown</Paper>
        )}
        {!xlDown && (
          <Paper className={classes.paper}>xlDown</Paper>
        )}
      </div>
      <Typography variant="caption" gutterBottom align="center">
        Current width:&nbsp;
        {width}
      </Typography>
      <Divider className={classes.divider} />
      {/* Breakpoin only block */}
      <Typography variant="h5">Breakpoint only</Typography>
      <Typography gutterBottom noWrap>
        Using the breakpoint only property, the given children will be hidden at the specified breakpoint(s).
      </Typography>
      <div className={classes.container}>
        {!lgOnly && (
          <Paper className={classes.paper}>Hidden on lg</Paper>
        )}
        {!lgOnly && (
          <Paper className={classes.paper}>Hidden on sm</Paper>
        )}
      </div>
      <Typography variant="caption" gutterBottom align="center">
        Current width:&nbsp;
        <span>{`width: ${width}`}</span>;
      </Typography>
    </div>
  );
}

export default Breakpoint;
