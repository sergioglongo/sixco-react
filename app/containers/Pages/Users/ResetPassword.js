import React, { useState, useCallback } from 'react';
import brand from 'dan-api/dummy/brand';
import { ResetForm } from 'dan-components';
import useStyles from '../../../components/Forms/reset-jss';
// import intro from 'dan-images/footer-deco.svg';
import { Hidden } from '@mui/material';
import intro from 'dan-images/bg-red.jpg';
import ModalConfirm from '../../../components/Modals/ModalConfirm';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ResetPassword() {
  const [valueForm, setValueForm] = useState(null);
  const [openmodal, setOpenmodal] = useState(false);
  const history = useHistory();

  const submitForm = useCallback((values) => {
    setValueForm(values);
    setOpenmodal(true);
  }, [valueForm]);

  const handleConfirm = () => {
    console.log("Confirmado");
    setOpenmodal(false);
    history.push('/auth/reset-password-code');
  };

  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const { classes } = useStyles();
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
      <Hidden mdDown>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <img src={intro} alt={'background'} width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
            <ResetForm onSubmit={(values) => submitForm(values)} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.fullFormWrap}>
          <ResetForm onSubmit={(values) => submitForm(values)} />
        </div>
      </Hidden>

      <ModalConfirm
        openmodal={openmodal}
        setOpenmodal={setOpenmodal}
        titulo="Email Enviado"
        mensaje={"Se ha enviado un email para restablecer la contraseña"}
        buttonPrimaryAction={handleConfirm}
        // buttonSecondaryAction={() => setOpenmodal(false)}
        loading={false}
        buttonSecondaryText="Cancelar"
        buttonPrimaryText="Aceptar"
        buttonSecondaryShow={false}
        buttonPrimaryShow={true}
      />
    </div>
  );
}

export default ResetPassword;
