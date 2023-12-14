import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './landingStyle-jss';

function TechnologyParallax() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <Parallax
          translateY={[-20, 20]}
          className="figure"
        >
          <svg
            fill="#fff"
            className={
              cx(
                classes.parallaxVertical,
                classes.parallaxLineSide3
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide3.svg#Line-Side3" />
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
                classes.parallaxLineSide4
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide4.svg#Line-Side4" />
          </svg>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default TechnologyParallax;
