import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LoginFormV2 } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import { Alert, Hidden } from '@mui/material';
import logo from 'dan-images/logo-sixco.svg';
import {
  changeUserAuthenticatedAction,
  // setLoginDataAction,
  setClientDataAction,
} from 'dan-redux/actions/Users';

function LoginV2(props) {
  const [valueForm, setValueForm] = useState(null);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [loading, setLoading] = useState(false);

  const submitForm = values => {
    const { changeUserAuthenticated, setClientData, isAuthenticated } = props;
    values.preventDefault();
    setLoading(true);
    setValueForm(values);
    // let doc = values.get('documento');
    // let pass = values.target.get('password');
    // if (typeof doc != '' && pass != '') {
      const clientdata = {
        account_no:"ACC3369",
        accountname:'Nombre Usuario',
        apellido:'Apellido Usuario',
        numero_documento: '29',
        phone:"3816093581",
        tipo_documento:"DNI",
        tipodireccion:"Calle",
        pass:'pass'
      }
      // Alert('success', 'Credenciales correctas');
      setClientData(clientdata);
      changeUserAuthenticated(true);
    // }
  };

  const title = brand.name + ' - App';
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
        <Hidden smDown>
          <div className={classes.opening}>
            <img style={{ backgroundColor: 'white', width: 300 }} src={logo} alt={brand.name} />
            <Typography variant="h6" component="p" className={classes.subpening}>
              Debe iniciar sesión para continuar
            </Typography>
          </div>
        </Hidden>
        <div className={classes.sideFormWrap}>
          <LoginFormV2 onSubmit={(values) => submitForm(values)} loading={loading} setLoading={setLoading} />
          {/* <AlertDialog openmodal={openmodal} setOpenmodal={setOpenmodal} titulo={datamodal.titulo} mensaje={datamodal.mensaje} />
          <StyledNotif open={openmodal} setOpen={setOpenmodal} variant={'success'} message={datamodal.mensaje} /> */}
          {/* <StyledNotif datanotif={datanotif} setDatanotif={setDatanotif} /> */}
        </div>
      </div>
    </div>
  );
}

LoginV2.propTypes = {
  // classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // setLoginData: PropTypes.func.isRequired,
  changeUserAuthenticated: PropTypes.func.isRequired,
  setClientData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  // setLoginData: bindActionCreators(setLoginDataAction, dispatch),
  changeUserAuthenticated: bindActionCreators(changeUserAuthenticatedAction, dispatch),
  setClientData:bindActionCreators(setClientDataAction, dispatch),
});

const LoginV2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginV2);

export default LoginV2Mapped;

