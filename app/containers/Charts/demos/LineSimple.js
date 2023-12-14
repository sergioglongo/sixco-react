import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';
import useStyles from './fluidChart-jss';

function LineSimple() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <LineChart
          width={800}
          height={450}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
          <Line type="monotone" dataKey="pv" strokeWidth={5} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" strokeWidth={5} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineSimple;
