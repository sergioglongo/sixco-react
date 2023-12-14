import React from 'react';
import Grid from '@mui/material/Grid';
import Dvr from '@mui/icons-material/Dvr';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Healing from '@mui/icons-material/Healing';
import FilterCenterFocus from '@mui/icons-material/FilterCenterFocus';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import LocalActivity from '@mui/icons-material/LocalActivity';
import Typography from '@mui/material/Typography';
import 'dan-styles/vendors/rechart/styles.css';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { dataPerformance } from 'dan-api/chart/chartData';
import colorfull from 'dan-api/palette/colorfull';
import useStyles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  main: colorfull[2],
  secondary: colorfull[3],
  third: colorfull[0],
  fourth: colorfull[1],
});

function PerformanceChartWidget() {
  const { classes, cx } = useStyles();
  return (
    <PapperBlock whiteBg noMargin title="Performance Indicator" icon="ion-ios-analytics-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <ul className={classes.bigResume}>
            <li>
              <Avatar className={cx(classes.avatar, classes.blueAvatar)}>
                <Dvr />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.blueText}>40</span>
                <Typography>Attends</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={cx(classes.avatar, classes.tealAvatar)}>
                <CheckCircle />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.tealText}>125</span>
                <Typography>Tasks Done</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={cx(classes.avatar, classes.pinkAvatar)}>
                <Healing />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.pinkText}>17</span>
                <Typography>Complaints</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={cx(classes.avatar, classes.purpleAvatar)}>
                <LocalActivity />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.purpleText}>18</span>
                <Typography>Referrals</Typography>
              </Typography>
            </li>
          </ul>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer width={640} height="80%">
                <ComposedChart
                  data={dataPerformance}
                >
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="basis" stackId="2" dataKey="Task" stroke="none" fill={color.secondary} />
                  <Area type="monotone" stackId="1" stroke="none" dataKey="Attend" fill={color.fourth} />
                  <Area type="monotone" stackId="3" dataKey="Referrals" stroke="none" fill={color.main} />
                  <Line type="monotone" dataKey="Complaint" strokeWidth={2} stroke={color.third} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={classes.smallTitle} variant="button">
            <FilterCenterFocus className={classes.leftIcon} />
            Achievement Target
          </Typography>
          <Divider className={classes.divider} />
          <ul className={classes.secondaryWrap}>
            <li>
              <Typography gutterBottom>Finish 100 task</Typography>
              <LinearProgress variant="determinate" className={cx(classes.progress, classes.pinkProgress)} value={24} />
            </li>
            <li>
              <Typography gutterBottom>Get 10 attending</Typography>
              <LinearProgress variant="determinate" className={cx(classes.progress, classes.purpleProgress)} value={89} />
            </li>
            <li>
              <Typography gutterBottom>Get less than 10 complaint</Typography>
              <LinearProgress variant="determinate" className={cx(classes.progress, classes.orangeProgress)} value={78} />
            </li>
            <li>
              <Typography gutterBottom>Upload 5 videos or articles</Typography>
              <LinearProgress variant="determinate" className={cx(classes.progress, classes.greenProgress)} value={55} />
            </li>
            <li>
              <Typography gutterBottom>Completing profile</Typography>
              <LinearProgress variant="determinate" className={cx(classes.progress, classes.blueProgress)} value={80} />
            </li>
          </ul>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

export default PerformanceChartWidget;
