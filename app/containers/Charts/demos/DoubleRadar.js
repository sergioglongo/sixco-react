import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from 'recharts';
import { data7 } from './sampleData';

const theme = createTheme(ThemePallete.yellowCyanTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
});

function DoubleRadar() {
  return (
    <RadarChart cx={200} cy={250} outerRadius={150} width={600} height={500} data={data7}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke={color.maindark} fill={color.main} fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke={color.secondarydark} fill={color.secondary} fillOpacity={0.3} />
      <Legend />
    </RadarChart>
  );
}

export default DoubleRadar;
