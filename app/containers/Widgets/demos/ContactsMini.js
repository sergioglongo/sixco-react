import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ContactWidget } from 'dan-components';

const useStyles = makeStyles()(() => ({
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
}));

function ContactsMini() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.miniWrap}>
      <ContactWidget />
    </div>
  );
}

export default ContactsMini;
