import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Slider from 'dandelion-animated-slider';
import imgApi from 'dan-api/images/photos';
import TestimonialsParallax from './TestimonialsParallax';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';
import Title from './Title';
import useStyles from './landingStyle-jss';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    image: imgApi[11],
    user: 'Luanda Gjokaj',
  },
  {
    title: 'Tortor Dapibus Commodo',
    image: imgApi[14],
    user: 'Erich Behrens',
  },
  {
    title: 'Phasellus volutpat metus',
    image: imgApi[15],
    user: 'Bruno Vizovskyy',
  }
];

function Testimonials(props) {
  const { slideMode } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={classes.testimonials}>
      {!slideMode && (<TestimonialsParallax />)}
      <div className={!slideMode ? classes.container : classes.fullSliderContent}>
        <Title title="What people said" align="center" monocolor={slideMode && true} />
        <div className={classes.sliderWrap}>
          <Slider className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index.toString()}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <IconButton aria-label="Play/pause" className={classes.playIcon} size="large">
                  <PlayArrowIcon />
                </IconButton>
                <p className={cx(classes.videoCaption, slideMode ? classes.mono : classes.color)}>
                  <Typography
                    variant="h6"
                    component="span"
                    className={Type.light}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography component="span">
                    {item.user}
                  </Typography>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  slideMode: PropTypes.bool,
};

Testimonials.defaultProps = {
  slideMode: false
};

export default Testimonials;
