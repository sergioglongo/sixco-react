import React from 'react';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import {
  ActionIconsWidget,
} from 'dan-components';
import useStyles from './dashboard-jss';

function PersonalDashboard() {
  const title = brand.name + ' - App';
  const description = brand.desc;

  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { classes } = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} sm={12} xs={12}>
            <ActionIconsWidget />
        </Grid>
      </Grid>
    </div>
  );
}

export default PersonalDashboard;
