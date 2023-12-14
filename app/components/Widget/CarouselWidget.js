import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Icon from '@mui/material/Icon';
import carouselData from 'dan-api/images/carouselData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import useStyles from './widget-jss';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="nav-next" onClick={onClick} size="large">
      <ArrowForward />
    </IconButton>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  onClick: undefined,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="nav-prev" onClick={onClick} size="large">
      <ArrowBack />
    </IconButton>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  onClick: undefined,
};

function CarouselWidget() {
  const { classes } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ],
    cssEase: 'ease-out',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container custom-arrow">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index.toString()}>
            <div style={{ backgroundColor: item.background }} className={classes.carouselItem}>
              <Icon className={classes.iconBg}>{item.icon}</Icon>
              <Typography className={classes.carouselTitle} variant="subtitle1">
                <Icon>{item.icon}</Icon>
                {item.title}
              </Typography>
              <Typography className={classes.carouselDesc}>{item.desc}</Typography>
              <Button variant="outlined" size="small" className={classes.buttonReadMore}>
                Read More
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselWidget;
