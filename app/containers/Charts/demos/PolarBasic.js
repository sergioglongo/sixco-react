import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    borderWidth: 1,
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

function PolarBasic() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <h2>Polar Example</h2>
      <PolarArea data={data} />
    </Box>
  );
}

export default PolarBasic;
