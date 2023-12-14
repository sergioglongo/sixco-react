import React from 'react';
import Grid from '@mui/material/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
  PieChart, Pie, Cell
} from 'recharts';
import { data1, data2 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import { CounterWidget } from 'dan-components';
import useStyles from 'dan-components/Widget/widget-jss';
import {
  red, blue, cyan, lime
} from '@mui/material/colors';

const colors = [red[300], blue[300], cyan[300], lime[300]];

function ChartInfographic() {
  const { classes } = useStyles();
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[6]}
            start={0}
            end={20}
            duration={3}
            title="Monthly Income"
            unitBefore="$ "
            unitAfter="k"
          >
            <PieChart width={100} height={100}>
              <Pie
                data={data2}
                cx={50}
                cy={50}
                dataKey="value"
                innerRadius={20}
                outerRadius={40}
                fill="#FFFFFF"
                paddingAngle={5}
              >
                {
                  data2.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
                }
              </Pie>
            </PieChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={20}
            duration={3}
            title="Weekly Sales"
          >
            <BarChart width={100} height={40} data={data1}>
              <Bar dataKey="uv" fill="#ffffff" />
            </BarChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[5]}
            start={0}
            end={321}
            duration={3}
            title="New Customers"
          >
            <AreaChart width={100} height={60} data={data1}>
              <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
            </AreaChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[4]}
            start={0}
            end={82}
            duration={3}
            title="Active Users"
          >
            <LineChart width={100} height={80} data={data1}>
              <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
            </LineChart>
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChartInfographic;
