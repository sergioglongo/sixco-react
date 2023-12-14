import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { ResetForm } from 'dan-components';
import useStyles from '../../../components/Forms/user-jss';

function ResetPassword() {
  const [valueForm, setValueForm] = useState(null);

  const submitForm = useCallback((values) => {
    setValueForm(values);
    setTimeout(() => {
      console.log(`You submitted:\n\n${JSON.stringify(valueForm)}`); // eslint-disable-line
    }, 500); // simulate server latency
  }, [valueForm]);

  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <ResetForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
