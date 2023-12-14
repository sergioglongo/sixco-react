import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { BreadCrumb } from '../../../../components';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  alone: {
    position: 'relative',
    margin: 20
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
  paper: {
    padding: '5px 10px 1px',
    borderRadius: 5
  }
}));

function ClassicBreadcrumbs() {
  const {
    classes
  } = useStyles();
  const location = { pathname: '/grand-parent/parent/children' };
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={1}
    >
      <Grid
        item
        md={6}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Arrow Separator</Typography>
        <div className={classes.field}>
          <Paper className={classes.paper}>
            <BreadCrumb theme="dark" separator=" › " location={location} />
          </Paper>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Slash Separator</Typography>
        <div className={classes.field}>
          <Paper className={classes.paper}>
            <BreadCrumb theme="dark" separator=" / " location={location} />
          </Paper>
        </div>
      </Grid>
      <Grid
        item
        md={12}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Greater Than Separator</Typography>
        <div className={classes.field}>
          <Paper className={classes.paper}>
            <BreadCrumb theme="dark" separator=" > " location={location} />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default ClassicBreadcrumbs;
