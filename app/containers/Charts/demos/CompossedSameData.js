import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { data1 } from './sampleData';
import useStyles from './fluidChart-jss';

const theme = createTheme(ThemePallete.cyanTheme);
const color = ({
  main: theme.palette.primary.main,
  mainDark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
});

function CompossedSameData() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <ComposedChart
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
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color.main} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color.mainDark} stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={60} fillOpacity="0.8" fill="url(#colorUv)" />
          <Line type="monotone" dataKey="uv" strokeWidth={5} stroke={color.secondary} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompossedSameData;
