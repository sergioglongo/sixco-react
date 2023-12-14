import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import { RegisterFormV2 } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';

function RegisterV2() {
  const [valueForm, setValueForm] = useState(null);

  const submitForm = values => {
    setTimeout(() => {
      setValueForm(values);
      console.log(`You submitted:\n\n${valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  };

  const title = brand.name + ' - Register Version 2';
  const description = brand.desc;
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.rootFull}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.containerSide}>
        {!mdDown && (
          <div className={classes.opening}>
            <Typography variant="h3" component="h1" className={classes.opening} gutterBottom>Hi...nice to meet you</Typography>
            <Typography variant="h6" component="p" className={classes.subpening}>Just register to join with us</Typography>
          </div>
        )}
        <div className={classes.sideFormWrap}>
          <RegisterFormV2 onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

export default RegisterV2;
