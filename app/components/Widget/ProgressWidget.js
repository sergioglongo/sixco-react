import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Type from 'dan-styles/Typography.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Check from '@mui/icons-material/Check';
import useStyles from './widget-jss';

function ProgressWidget() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.styledPaper} elevation={4}>
      <Typography className={classes.title} variant="h5" component="h3">
        <span className={Type.light}>Profile Strength: </span>
        <span className={Type.bold}>Intermediate</span>
      </Typography>
      <Grid container justifyContent="center">
        <Chip
          avatar={(
            <Avatar>
              <Check />
            </Avatar>
          )}
          label="60% Progress"
          className={classes.chipProgress}
          color="primary"
        />
      </Grid>
      <LinearProgress variant="determinate" className={classes.progressWidget} value={60} />
    </Paper>
  );
}

export default ProgressWidget;
