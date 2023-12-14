import React from 'react';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {
  CounterChartWidget,
  SalesChartWidget,
  CarouselWidget,
  TableWidget,
  NewsWidget,
  CalculatorWidget,
} from 'dan-components';
import useStyles from './dashboard-jss';

function CrmDahboard() {
  const title = brand.name + ' - CRM Dashboard';
  const description = brand.desc;
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
      <Grid container className={classes.root}>
        <CounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      <SalesChartWidget />
      <Divider className={classes.divider} />
      <TableWidget />
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={4} xs={12}>
          <CarouselWidget />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <NewsWidget />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <CalculatorWidget />
        </Grid>
      </Grid>
    </div>
  );
}

export default CrmDahboard;
