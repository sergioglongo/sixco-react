import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LoginFormV2 } from 'dan-components';
// import { login } from '../../../api/apiclient/ApiClient'
import useStyles from 'dan-components/Forms/user-jss';
import { Alert, Hidden } from '@mui/material';
import intro from 'dan-images/intro-sixco-large.mp4';
// import intro from 'dan-images/footer-deco.svg';
import {
  changeUserAuthenticatedAction,
  setLoginDataAction,
  setClientDataAction,
} from 'dan-redux/actions/Users';
import {
  setClientDataAction as setClientDataRegister
} from 'dan-redux/actions/Register';
import logo from 'dan-images/logo-sixco-only.svg';
import axios from 'axios';
import { login, getProfileDetail } from '../../../api/apiclient/ApiClient';
import { setTimeout } from 'core-js';

function LoginV2(props) {
  const [valueForm, setValueForm] = useState(null);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [loading, setLoading] = useState(false);
  const { changeUserAuthenticated, setClientData, isAuthenticated, setLoginData, setLoginUserData, loginState } = props;

  useEffect(() => {
    console.log("isAuthenticated and login", isAuthenticated);
    if (!isAuthenticated && loginState.loginData != {}) {
      setLoginData({});
      setLoginData({});
      setLoginUserData();
      setClientData({});
    }
  }, []);

  const submitForm = values => {
    values.preventDefault();
    setLoading(true);
    setValueForm(values);
    let email = values.target.email.value;
    let pass = values.target.password.value;
    login(email, pass).then(response => {
      if (typeof response != 'undefined' && response.session) {
        const loginResponse = response;
        loginResponse.estado = 2;
        const data = {
          session: response.session,
        }
        getProfileDetail(data).then((res) => {
          setClientData(res);
        }).catch((err) => {
          console.error("Error profile detail", err)
        });
        // setClientData(clientdata);
        setLoginData(loginResponse);
        changeUserAuthenticated(true);
        setTimeout(() => {
          changeUserAuthenticated(false);
        }, 300000);
      }
    }).catch(error => {
      console.log("Error", error);
    });
    setLoading(false);
    // // Alert('success', 'Credenciales correctas');
    // }
  };

  const title = brand.name + ' - Ingreso';
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
  setLoginData: PropTypes.func.isRequired,
  setClientData: PropTypes.func.isRequired,
  setLoginDataUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  changeUserAuthenticated: PropTypes.func.isRequired,
  loginState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
  loginState: state.login
});

const mapDispatchToProps = dispatch => ({
  setLoginData: bindActionCreators(setLoginDataAction, dispatch),
  setClientData: bindActionCreators(setClientDataAction, dispatch),
  setLoginDataUser: bindActionCreators(setClientDataAction, dispatch),
  setLoginUserData: bindActionCreators(setClientDataRegister, dispatch),
  changeUserAuthenticated: bindActionCreators(changeUserAuthenticatedAction, dispatch),
});

const LoginV2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginV2);

export default LoginV2Mapped;

