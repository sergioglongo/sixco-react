import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
  },
  divider: {
    margin: `${theme.spacing(2)} 0`,
  },
}));

function CSSGrid() {
  const {
    classes
  } = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Material-UI Grid:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        CSS Grid Layout:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
    </div>
  );
}

export default CSSGrid;
