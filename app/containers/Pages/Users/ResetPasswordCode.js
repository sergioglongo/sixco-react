import React, { useState, useCallback } from 'react';
import brand from 'dan-api/dummy/brand';
import { ResetCodeForm } from 'dan-components';
import useStyles from '../../../components/Forms/reset-jss';
// import intro from 'dan-images/footer-deco.svg';
import { Hidden } from '@mui/material';
import intro from 'dan-images/bg-red.jpg';
import ModalConfirm from '../../../components/Modals/ModalConfirm';
import { useHistory } from 'react-router-dom';

function ResetPasswordCode() {
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
    history.push('/auth/login');
  };

  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const { classes } = useStyles();
  return (
    <div className={classes.rootFull}>
      <Hidden mdDown>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <img src={intro} alt={'background'} width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
            <ResetCodeForm onSubmit={(values) => submitForm(values)} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.fullFormWrap}>
          <ResetCodeForm onSubmit={(values) => submitForm(values)} />
        </div>
      </Hidden>

      <ModalConfirm
        openmodal={openmodal}
        setOpenmodal={setOpenmodal}
        titulo="Cambio de Contraseña"
        mensaje={"La contraseña se ha generado exitosamente."}
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

export default ResetPasswordCode;
