import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const labelState = [
  'Red',
  'Green',
  'Yellow'
];

const datasetState = [{
  data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
  backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
  ],
  hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
  ]
}];

const dataState = { labels: labelState, datasets: datasetState };

function DoughnutDynamic() {
  const [data, setData] = useState(dataState);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setData(dataState);
    }, 3000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 500 }}>
      <h2>Doughnut Example</h2>
      <Doughnut data={data} />
    </Box>
  );
}

export default DoughnutDynamic;
