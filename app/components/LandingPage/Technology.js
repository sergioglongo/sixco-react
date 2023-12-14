import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import reactLogo from 'dan-images/logo/react.png';
import reduxLogo from 'dan-images/logo/redux.png';
import muiLogo from 'dan-images/logo/mui.png';
import routerLogo from 'dan-images/logo/react_router.png';
import webpackLogo from 'dan-images/logo/webpack.png';
import jssLogo from 'dan-images/logo/jss.png';
import TechnologyParallax from './TechnologyParallax';
import Title from './Title';
import useStyles from './landingStyle-jss';

function Technology(props) {
  const { slideMode } = props;
  const { classes, cx } = useStyles();

  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.tech}>
      {!slideMode && (<TechnologyParallax />)}
      <div className={slideMode ? classes.fullWidth : classes.container}>
        <Title title="The technologies" desc="Cras convallis lacus orci, tristique tincidunt magna consequat in." align="center" monocolor={slideMode && true} />
        <Grid container className={classes.root} spacing={3}>
          <Grid item sm={4} xs={12}>
            <div className={cx(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img src={reactLogo} alt="react" />
              </figure>
              <Typography variant="h5" className={classes.react}>React.js</Typography>
            </div>
            <div className={cx(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img src={routerLogo} alt="react router" />
              </figure>
              <Typography variant="h5" className={classes.router}>React Router</Typography>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.centerTech}>
              <div className={cx(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={reduxLogo} alt="redux" />
                </figure>
                <Typography variant="h5" className={classes.redux}>Redux.js</Typography>
              </div>
              {!mdDown && (
                <Button variant="contained" size="large" color="secondary">Request To Implement Technology</Button>
              )}
              <div className={cx(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={webpackLogo} alt="webpack" />
                </figure>
                <Typography variant="h5" className={classes.webpack}>Webpack</Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={cx(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img src={muiLogo} alt="mui" />
              </figure>
              <Typography variant="h5" className={classes.mui}>Material UI</Typography>
            </div>
            <div className={cx(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img src={jssLogo} alt="jss" />
              </figure>
              <Typography variant="h5" className={classes.jss}>CSS in JS</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Technology.propTypes = {
  slideMode: PropTypes.bool,
};

Technology.defaultProps = {
  slideMode: false
};

export default Technology;
