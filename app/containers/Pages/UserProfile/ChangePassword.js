import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import {
  setClientDataAction,
} from 'dan-redux/actions/Users';
// import { changePassword } from '../../../utils/ApiClient';
import StyledNotif from '../../UiElements/Notifications';
// import styles from 'dan-components/SocialMedia/jss/cover-jss';
// import ChangePasswordForms from './ChangePasswordForms.js';
import useStyles from './userprofile-jss';
import ChangePasswordForm from './ChangePasswordForm';
// import StyledNotif from '../../UiElements/demos/Notification/StyledNotif';

function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function ChangePassword(props) {
  const title = brand.name + ' - Cambiar Contraseña';
  const description = brand.desc;
  const { clientData, loginData, setClientData } = props;
  const [value, setValue] = useState(0);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [loading, setLoading] = useState(false);
  const [listabarrio, setListabarrio] = useState([]);
  const { classes} = useStyles();
  const date = new Date();
  const history = useHistory();

  const [valueForm, setValueForm] = useState();
  // console.log(clientData)
  const showResult = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    console.log("submit e, pass passcon",e, password, passwordConfirm)
    if (password != passwordConfirm) {
      setDatanotif({
        ...datanotif,
        open: true,
        message: 'Las contraseñas son diferentes'
      });
    }

    if (password && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value)) {
      setDatanotif({
        ...datanotif,
        open: true,
        message: 'Las contraseñas debe tener mas de 6 caracteres, al menos una minúscula una mayúscula un numero y un caracter especial. Ejemplo: Piquiense!22'
      });
    }

    // console.log(chpass)
    // return
    
    // changePassword(loginData.session, record, password).then(response => {
    //   // debugger
    //   if (typeof response !== 'undefined' && response.success == true) {
    //     setDatanotif({
    //       variant: 'success',
    //       open: true,
    //       message: 'Cambiaste con éxito la contraseña!'
    //     });
    //     history.push('/app/pages/perfil');
    //   } else if (typeof response !== 'undefined' && response.success == false && typeof response.error !== 'undefined') {
    //     setDatanotif({
    //       ...datanotif,
    //       open: true,
    //       message: response.error.message
    //     });
    //   } else {
    //     setDatanotif({
    //       ...datanotif,
    //       open: true,
    //       message: 'Error al procesar la solicitud'
    //     });
    //   }
    //   setLoading(false);
    // });
  };

    // useEffect(() => {
    //   console.log("error en submit", datanotif)
    // }, [datanotif]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>

      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <ChangePasswordForm
              handleSubmit={showResult}
            //   clientData={clientData}
            />
          </Grid>
        </Grid>
      </div>
      <StyledNotif datanotif={datanotif} setDatanotif={setDatanotif} />
    </div>
  );
}

ChangePassword.propTypes = {
  clientData: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired,
  setClientData: PropTypes.func.isRequired,
};

// const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  clientData: state.user.clientData,
  loginData: state.login.loginData,
});

const constDispatchToProps = dispatch => ({
  setClientData: bindActionCreators(setClientDataAction, dispatch),
});


const ChangePasswordMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(ChangePassword);

export default ChangePasswordMapped;
