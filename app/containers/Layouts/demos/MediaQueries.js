import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import { red, green, indigo as blue } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(1),
    '& h3': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
}));

function MediaQuery() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">down(sm): red</Typography>
      <Typography variant="subtitle1">up(md): blue</Typography>
      <Typography variant="subtitle1">up(lg): green</Typography>
    </div>
  );
}

export default MediaQuery;
