import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Title from './Title';
import useStyles from './landingStyle-jss';

let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

function Feature(props) {
  const { slideMode } = props;
  const { classes, cx } = useStyles();
  const featureList = [
    createFeatureData('ion-ios-infinite-outline', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.'),
    createFeatureData('ion-ios-flower-outline', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.'),
    createFeatureData('ion-ios-ionic-outline', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.')
  ];

  return (
    <div className={cx(classes.feature, slideMode ? classes.mono : classes.color)}>
      <div className={!slideMode ? classes.container : ''}>
        <Title title="Main Feature" align="center" monocolor={slideMode && true} />
        <Grid container className={classes.root} spacing={5}>
          {featureList.map(item => (
            <Grid key={item.id.toString()} item xs={12} md={4}>
              <Typography component="h4" variant="h6">
                <span className={classes.icon}>
                  <i className={item.icon} />
                </span>
                {item.title}
              </Typography>
              <Typography className={slideMode ? classes.colorWhite : ''}>
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

Feature.propTypes = {
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default Feature;
