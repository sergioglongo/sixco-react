import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { data3 } from './sampleData';
import useStyles from './fluidChart-jss';

const theme = createTheme(ThemePallete.brownTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

const gradientOffset = () => {
  const dataMax = Math.max(...data3.map((i) => i.uv));
  const dataMin = Math.min(...data3.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }
  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

function AreaNegativePositive() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <AreaChart
          width={800}
          height={450}
          data={data3}
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
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor={color.secondary} stopOpacity={1} />
              <stop offset={off} stopColor={color.primary} stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#bcbcbc" fillOpacity="0.8" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaNegativePositive;
