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
import intro from 'dan-images/intro-sixco-large.mp4';
// import intro from 'dan-images/footer-deco.svg';
import {
  changeUserAuthenticatedAction,
  setLoginDataAction,
  setClientDataAction,
} from 'dan-redux/actions/Users';
import logo from 'dan-images/logo-sixco-only.svg';

function LoginV2(props) {
  const [valueForm, setValueForm] = useState(null);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [loading, setLoading] = useState(false);
  const { changeUserAuthenticated, setClientData, isAuthenticated, setLoginData } = props;

  const submitForm = values => {
    values.preventDefault();
    setLoading(true);
    setValueForm(values);
    // let doc = values.get('documento');
    // let pass = values.target.get('password');
    // if (typeof doc != '' && pass != '') {
    const clientdata = {
      account_no: "ACC3369",
      accountname: 'Nombre Usuario',
      apellido: 'Apellido Usuario',
      codigopostal: '4105',
      phone: "3816093581",
      domicilio: "Barrio Alto Peru",
      email: "email@email.com",
    }
    // Alert('success', 'Credenciales correctas');
    setClientData(clientdata);
    setLoginData(clientdata);
    changeUserAuthenticated(true);
    // }
  };

  const title = brand.name + ' - App';
  const description = brand.desc;
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.rootFull}>
      <div className={classes.containerSide}>
        <Hidden mdDown>
          <div className={`${classes.opening} ${classes.openingVideo}`} >
            <video autoPlay loop muted className={classes.video}>
              <source src={intro} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            {/* <img src={intro} alt={brand.name} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} /> */}
            <div style={{ position: 'absolute', width: '100%', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            {/* <div style={{ position: 'absolute', width: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}> */}
              <div style={{ textAlign: 'start', display: 'inline-block' }}>
                <div style={{ display: 'flex', height: '60px', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                    <Typography style={{ fontSize: '36px' }}>
                      Somos
                    </Typography>
                  </div>
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt={brand.name} height={'30px'} />
                  </div>
                </div>
                <Typography style={{ fontSize: '36px', fontWeight: 'medium', height: '60px' }}>
                  EMPRESA DE LOGÍSTICA
                </Typography>
                <Typography style={{ fontSize: '36px', fontWeight: 'bold', height: '40px' }}>
                  INTEGRAL
                </Typography>
              </div>
            </div>

          </div>
        </Hidden>
        <div className={classes.sideFormWrap}>
          <LoginFormV2 onSubmit={(values) => submitForm(values)} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

LoginV2.propTypes = {
  // classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setLoginData: PropTypes.func.isRequired,
  changeUserAuthenticated: PropTypes.func.isRequired,
  setClientData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  setLoginData: bindActionCreators(setLoginDataAction, dispatch),
  changeUserAuthenticated: bindActionCreators(changeUserAuthenticatedAction, dispatch),
  setClientData: bindActionCreators(setClientDataAction, dispatch),
});

const LoginV2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginV2);

export default LoginV2Mapped;

