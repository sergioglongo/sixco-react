import React from 'react';
import PropTypes from 'prop-types';
import 'dan-styles/vendors/react-weather/GenericWeather.css';
import useStyles from './widget-jss';

function WeatherWidget(props) {
  const {
    status,
    temp,
    city
  } = props;
  const { classes, cx } = useStyles();
  const bg = cx(
    classes.weathercard,
    status === 'sun' ? classes.sun : classes.cloud
  );
  return (
    <div className={bg}>
      <div className="wheater-wrap">
        <div className={cx('weather-icon', status)} />
        <h1>
          {temp}
          º
        </h1>
        <p>{city}</p>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  status: PropTypes.string,
};

WeatherWidget.defaultProps = {
  city: 'Madrid',
  temp: 28,
  status: 'sun', // cloud and sun
};

export default WeatherWidget;
