import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './landingStyle-jss';

function TestimonialsParallax() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <Parallax
          translateY={[-30, 50]}
          className="figure"
        >
          <svg
            fill="#fff"
            className={
              cx(
                classes.parallaxVertical,
                classes.parallaxLineSide1
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide1.svg#Line-Side1" />
          </svg>
        </Parallax>
        <Parallax
          translateY={[-20, 20]}
          className="figure"
        >
          <svg
            fill="#fff"
            className={
              cx(
                classes.parallaxVertical,
                classes.parallaxLineSide2
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide2.svg#Line-Side2" />
          </svg>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default TestimonialsParallax;
