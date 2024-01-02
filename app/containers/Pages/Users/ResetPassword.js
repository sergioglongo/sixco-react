import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { ResetForm, ResetFormFull } from 'dan-components';
import useStyles from '../../../components/Forms/user-jss';
// import intro from 'dan-images/footer-deco.svg';
import { Hidden } from '@mui/material';
import intro from 'dan-images/bg-red.jpg';

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
    <div className={classes.rootFull}>
      <Hidden mdDown>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <img src={intro} alt={'background'} width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
            {/* <img src={intro} alt={brand.name} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} /> */}
            <ResetForm onSubmit={(values) => submitForm(values)} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.fullFormWrap}>
          <ResetFormFull onSubmit={(values) => submitForm(values)} />
        </div>
      </Hidden>
    </div>
  );
}

export default ResetPassword;
