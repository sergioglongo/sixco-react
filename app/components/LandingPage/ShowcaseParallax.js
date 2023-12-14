import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './landingStyle-jss';

function ShowcaseParallax() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            translateY={[-60, 10]}
            className="figure"
          >
            <svg
              fill="#fff"
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxPetal1
                )
              }
            >
              <use xlinkHref="/images/decoration/petal3.svg#Petal-3" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-80, 10]}
            className="figure"
          >
            <svg
              fill="#fff"
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxPetal2
                )
              }
            >
              <use xlinkHref="/images/decoration/petal4.svg#Petal-4" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default ShowcaseParallax;
