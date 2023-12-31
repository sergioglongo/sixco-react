import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Cell
} from 'recharts';
import PropTypes from 'prop-types';
import {
  purple, red, pink, indigo, blue, cyan, teal
} from '@mui/material/colors';
import { data2 } from './sampleData';
import useStyles from './fluidChart-jss';

const colors = [red[500], pink[500], purple[500], indigo[500], blue[500], cyan[500], teal[500]];

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
  C${x + (width / 3)},${y + height} ${x + (width / 2)},${y + (height / 3)} ${x + (width / 2)}, ${y}
  C${x + (width / 2)},${y + (height / 3)} ${x + (2 * (width / 3))},${y + height} ${x + width}, ${y + height}
  Z`
);

const TriangleBar = props => {
  const {
    fill,
    x,
    y,
    width,
    height
  } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fillOpacity="0.8" fill={fill} />;
};

TriangleBar.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

TriangleBar.defaultProps = {
  x: 0,
  y: 0,
  fill: '#9f9f9f',
  width: 0,
  height: 0,
};

function BarCustom() {
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
          <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {
              data2.map((entry, index) => (
                <Cell key={`cell-${index.toString()}`} fill={colors[index % 20]} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCustom;
