import React, { Fragment, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import SideNav from 'dan-components/LandingPage/SideNav';
import useStyles from 'dan-components/LandingPage/landingStyle-jss';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Banner,
  Feature,
  ShowcaseSlider,
  Testimonials,
  Technology,
  Pricing,
  Contact
} from 'dan-components';

function SliderPage(props) {
  const [curSlide, setCurSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const slider = useRef(null);

  const setParallaxState = () => {
    setNextSlide(!nextSlide);
  };

  const setActiveMenu = index => {
    setCurSlide(index);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
    setParallaxState();
  };

  const { sidebarOpen } = props;
  const { classes, cx } = useStyles();
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const lgOnly = useMediaQuery(theme => theme.breakpoints.only('lg'));

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Fragment>
      {!lgDown && (
        <SideNav
          open={sidebarOpen}
          curSlide={curSlide}
          gotoSlide={(slide) => gotoSlide(slide)}
        />
      )}
      <main className={classes.fullSliderContent} id="mainContent">
        <div className={classes.parallaxBg}>
          <div className={cx(classes.odd, nextSlide && classes.show)}>
            <img src="/images/decoration/parallaxPetal3.png" className={classes.line1} alt="petal" />
            <img src="/images/decoration/parallaxPetal4.png" className={classes.line2} alt="petal" />
            <img src="/images/decoration/parallaxPetal1.png" className={classes.petal1} alt="petal" />
            <img src="/images/decoration/parallaxPetal2.png" className={classes.petal2} alt="petal" />
          </div>
          <div className={cx(classes.even, !nextSlide && classes.show)}>
            <img src="/images/decoration/parallaxPetal31.png" className={classes.line1} alt="petal" />
            <img src="/images/decoration/parallaxPetal41.png" className={classes.line2} alt="petal" />
            <img src="/images/decoration/parallaxPetal11.png" className={classes.petal1} alt="petal" />
            <img src="/images/decoration/parallaxPetal21.png" className={classes.petal2} alt="petal" />
          </div>
        </div>
        <div className={classes.sliderPageWrap}>
          {!lgDown && (
            <Slider
              ref={slider}
              {...settings}
              onSwipe={() => setParallaxState()}
              afterChange={(index) => setActiveMenu(index)}
            >
              <section id="banner">
                <Banner slideMode />
              </section>
              <section id="feature">
                <Feature slideMode />
              </section>
              <section id="showcase">
                <ShowcaseSlider slideMode />
              </section>
              <section id="testimonials">
                <Testimonials slideMode />
              </section>
              <section id="technology">
                <Technology slideMode />
              </section>
              <section id="pricing">
                <Pricing slideMode />
              </section>
              <section id="contact">
                <Contact slideMode />
              </section>
            </Slider>
          )}
          {!lgOnly && (
            <>
              <section id="banner">
                <Banner slideMode />
              </section>
              <section id="feature">
                <Feature slideMode />
              </section>
              <section id="showcase">
                <ShowcaseSlider slideMode />
              </section>
              <section id="testimonials">
                <Testimonials slideMode />
              </section>
              <section id="technology">
                <Technology slideMode />
              </section>
              <section id="pricing">
                <Pricing slideMode />
              </section>
              <section id="contact">
                <Contact slideMode />
              </section>
            </>
          )}
        </div>
      </main>
    </Fragment>
  );
}

SliderPage.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sidebarOpen: state.ui.sidebarOpen,
  gradient: state.ui.gradient,
});

const SliderPageMapped = connect(
  mapStateToProps,
)(SliderPage);

export default SliderPageMapped;
