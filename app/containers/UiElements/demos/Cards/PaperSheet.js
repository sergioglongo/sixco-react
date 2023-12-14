import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}));

function PaperSheet() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}

export default PaperSheet;
