import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Quote } from '../../../../components';

const useStyles = makeStyles()((theme) => ({
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function QuotesDemo() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <div className={classes.divider}>
        <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
      </div>
      <div className={classes.divider}>
        <Quote align="right" content="A lot of people are afraid to say what they want. That's why they don't get what they want." footnote="Madonna" />
      </div>
    </div>
  );
}

export default QuotesDemo;
