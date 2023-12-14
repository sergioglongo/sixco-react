import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing(3)}`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  typography: {
    color: theme.palette.secondary.dark,
  }
}));

function AutoGridNoWrap() {
  const {
    classes
  } = useStyles();
  const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className={classes.typography} noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography className={classes.typography} noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography className={classes.typography}>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default AutoGridNoWrap;
