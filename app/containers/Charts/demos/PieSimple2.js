import React from 'react';
import Box from '@mui/material/Box';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

function PieSimple2() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <h2>Doughnut Example</h2>
      <Pie data={data} />
    </Box>
  );
}

export default PieSimple2;
