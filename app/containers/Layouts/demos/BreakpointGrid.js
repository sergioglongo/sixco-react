import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
}));

function GridIntegration() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
          <Paper className={classes.paper}>xsUp</Paper>
        </Box>
        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
          <Paper className={classes.paper}>smUp</Paper>
        </Box>
        <Box sx={{ display: { lg: 'none', xs: 'block' } }}>
          <Paper className={classes.paper}>mdUp</Paper>
        </Box>
        <Box sx={{ display: { xl: 'none', xs: 'block' } }}>
          <Paper className={classes.paper}>lgUp</Paper>
        </Box>
      </div>
    </div>
  );
}

export default GridIntegration;
