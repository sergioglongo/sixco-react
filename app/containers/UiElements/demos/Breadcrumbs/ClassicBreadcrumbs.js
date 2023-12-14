import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { BreadCrumb } from 'dan-components';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
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
      spacing={2}
    >
      <Grid
        item
        md={4}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Arrow Separator</Typography>
        <div className={classes.field}>
          <BreadCrumb theme="dark" separator=" › " location={location} />
        </div>
      </Grid>
      <Grid
        item
        md={4}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Slash Separator</Typography>
        <div className={classes.field}>
          <BreadCrumb theme="dark" separator=" / " location={location} />
        </div>
      </Grid>
      <Grid
        item
        md={4}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="button" className={classes.divider}>Greater Than Separator</Typography>
        <div className={classes.field}>
          <BreadCrumb theme="dark" separator=" > " location={location} />
        </div>
      </Grid>
    </Grid>
  );
}

export default ClassicBreadcrumbs;
