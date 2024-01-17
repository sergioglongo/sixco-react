import React, { useState, useCallback } from 'react';
import brand from 'dan-api/dummy/brand';
import { RegisterFormFinish } from 'dan-components';
import useStyles from '../../../components/Forms/reset-jss';
// import intro from 'dan-images/footer-deco.svg';
import { Hidden } from '@mui/material';
import intro from 'dan-images/bg-red.jpg';
import ModalConfirm from '../../../components/Modals/ModalConfirm';
import { useHistory } from 'react-router-dom';

function ResetPassword() {
  const [valueForm, setValueForm] = useState(null);
  const [openmodal, setOpenmodal] = useState(false);
  const history = useHistory();

  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const { classes } = useStyles();
  return (
    <div className={classes.rootFull}>
      <Hidden mdDown>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <img src={intro} alt={'background'} width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
            <RegisterFormFinish />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.fullFormWrap}>
          <RegisterFormFinish />
        </div>
      </Hidden>

    </div>
  );
}

export default ResetPassword;
