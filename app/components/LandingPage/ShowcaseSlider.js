import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ShowcaseCard from '../CardPaper/ShowcaseCard';
import Title from './Title';
import useStyles from './landingStyle-jss';

function ShowcaseSlider(props) {
  const { slideMode } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.showcase}>
      <div className={slideMode ? classes.fullWidth : classes.container}>
        <Grid container className={classes.root} spacing={5}>
          <Grid item md={6} xs={12}>
            <Title title="Showcase" align="left" monocolor={slideMode && true} />
            <ShowcaseCard
              landscape
              title="Nam sollicitudin"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Try it"
              image="/images/screen/thumb1.jpg"
            />
            <ShowcaseCard
              landscape
              title="Vestibulum nec"
              desc="Cras convallis lacus orci, tristique tincidunt magna"
              action="See Demo"
              image="/images/screen/thumb3.jpg"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Curabitur"
              desc="Nulla vehicula leo ut augue tincidunt"
              action="See Demo"
              image="/images/screen/thumb5.jpg"
            />
            <ShowcaseCard
              landscape
              title="Nam sollicitudin"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Try It"
              image="/images/screen/thumb2.jpg"
            />
            <ShowcaseCard
              landscape
              title="Nam posuere accumsan"
              desc="Duis sed augue phasellus ante massa."
              action="See Demo"
              image="/images/screen/thumb4.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ShowcaseSlider.propTypes = {
  slideMode: PropTypes.bool
};

ShowcaseSlider.defaultProps = {
  slideMode: false
};

export default ShowcaseSlider;
