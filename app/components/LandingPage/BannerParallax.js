import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './landingStyle-jss';

function ParallaxDeco() {
  const { classes, cx } = useStyles();
  return (
    <ParallaxProvider>
      <div className={classes.bannerParallaxWrap}>
        <Parallax
          translateY={[-60, 10]}
          className="figure"
        >
          <span className={cx(classes.paralaxFull, classes.lineBanner1)} />
        </Parallax>
        <Parallax
          translateY={[-50, 15]}
          className="figure"
        >
          <span className={cx(classes.paralaxFull, classes.lineBanner2)} />
        </Parallax>
        <Parallax
          translateY={[-1, 70]}
          className="figure"
        >
          <span className={cx(classes.paralaxFull, classes.petalBanner1)} />
        </Parallax>
        <Parallax
          translateY={[-30, 60]}
          className="figure"
        >
          <span className={cx(classes.paralaxFull, classes.petalBanner2)} />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

const BannerParallax = ParallaxDeco;

export default BannerParallax;
