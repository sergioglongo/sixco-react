import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { data8 } from './sampleData';
import useStyles from './fluidChart-jss';

const theme = createTheme(ThemePallete.cyanTheme);
const color = ({
  primary: theme.palette.primary.main,
});

function ScatterSimple() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <ScatterChart
          width={800}
          height={450}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis
            axisLine={false}
            tickSize={3}
            tickLine={false}
            tick={{ stroke: 'none' }}
            dataKey="y"
            type="number"
            name="weight"
            unit="kg"
          />
          <Scatter name="A school" data={data8} fill={color.primary} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScatterSimple;
