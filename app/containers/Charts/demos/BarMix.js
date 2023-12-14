import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { green } from '@mui/material/colors';
import { data2 } from './sampleData';
import useStyles from './fluidChart-jss';

const theme = createTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  third: green[500]
});

function BarMix() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <BarChart
          width={800}
          height={450}
          data={data2}
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
          <Legend />
          <Bar dataKey="female" stackId="a" fillOpacity="0.8" fill={color.primary} />
          <Bar dataKey="male" stackId="a" fillOpacity="0.8" fill={color.secondary} />
          <Bar dataKey="uv" fill={color.third} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarMix;
