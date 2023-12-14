import React from 'react';
import Box from '@mui/material/Box';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

function DoughnutBasic() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <h2>Doughnut Example</h2>
      <Doughnut data={data} />
    </Box>
  );
}

export default DoughnutBasic;
