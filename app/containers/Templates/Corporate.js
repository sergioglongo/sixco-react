import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { HeaderLanding, Footer } from 'dan-components';
import useStyles from './appStyles-jss';

function Corporate(props) {
  const [transform, setTransform] = useState(0);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    setTransform(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { children } = props;
  const { classes } = useStyles();
  return (
    <div className={classes.appFrameLanding} id="mainContent">
      <HeaderLanding turnDarker={transform > 30} />
      {children}
      <Footer />
    </div>
  );
}

Corporate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Corporate;
