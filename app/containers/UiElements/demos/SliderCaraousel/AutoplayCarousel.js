import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Slider from 'react-slick';
import imgData from 'dan-api/images/imgData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

const useStyles = makeStyles()(() => ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
}));

function AutoplayCarousel() {
  const {
    classes
  } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'ease-out'
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {imgData.map((item, index) => (
          <div key={index.toString()} className={classes.item}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoplayCarousel;
