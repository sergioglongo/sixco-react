import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  PieChart,
  Pie,
  Tooltip
} from 'recharts';
import { data4, data5 } from './sampleData';

const theme = createTheme(ThemePallete.purpleTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function PieSimple() {
  return (
    <PieChart
      width={800}
      height={450}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Pie isAnimationActive={false} dataKey="value" data={data4} cx={100} cy={200} outerRadius={80} fill={color.primary} label />
      <Pie data={data5} cx={400} dataKey="value" cy={200} innerRadius={40} outerRadius={80} fill={color.secondary} />
      <Tooltip />
    </PieChart>
  );
}

export default PieSimple;
