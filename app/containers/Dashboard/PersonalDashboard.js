import React from 'react';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {
  ActionIconsWidget,
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from 'dan-components';
import useStyles from './dashboard-jss';

function PersonalDashboard() {
  const title = brand.name + ' - App';
  const description = brand.desc;

  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { classes } = useStyles();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* 1st Section */}

      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} sm={12} xs={12}>
          <ActionIconsWidget />
        </Grid>
      </Grid>
    </div>
  );
}

export default PersonalDashboard;
