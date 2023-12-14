import React from 'react';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {
  SliderWidget,
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
  const title = brand.name + ' - Personal Dashboard';
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
        <Grid item md={6} xs={12}>
          <CounterIconsWidget />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className={classes.sliderWrap}>
            <SliderWidget />
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* 2nd Section */}
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
      </Grid>
      {/* 3rd Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider} />
          <ContactWidget />
          <Divider className={classes.divider} />
          <TaskWidget />
        </Grid>
        <Grid item md={6} xs={12}>
          {!lgDown && (
            <Divider className={classes.divider} />
          )}
          <WeatherWidget />
          <Divider className={classes.divider} />
          <DateWidget />
          <Divider className={classes.divider} />
          <TimelineWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <FilesWidget />
    </div>
  );
}

export default PersonalDashboard;
