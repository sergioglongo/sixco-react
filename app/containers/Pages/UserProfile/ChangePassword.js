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
// import StyledNotif from '../../UiElements/Notifications';
// import styles from 'dan-components/SocialMedia/jss/cover-jss';
// import ChangePasswordForms from './ChangePasswordForms.js';
import useStyles from './userprofile-jss';
import ChangePasswordForm from './ChangePasswordForm';
import StyledNotif from '../../UiElements/demos/Notification/StyledNotif';
import { Alert, Snackbar } from '@mui/material';
import { changePassword } from '../../../api/apiclient/ApiClient';

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
  const [listabarrio, setListabarrio] = useState([]);
  const { classes } = useStyles();
  const date = new Date();
  const history = useHistory();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [valueForm, setValueForm] = useState();
  // console.log(clientData)
  const showResult = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    changePassword(loginData.session, password).then(response => {
      if (typeof response !== 'undefined' && response.success == true) {
        setOpenSuccess(true);
        e.target.save.disabled = true
        setTimeout(() => {
          history.push('/app/pages/perfil');
        }, 4000);
      } else if (typeof response !== 'undefined' && response.success == false && typeof response.error !== 'undefined') {
        setOpenError(true);
      } else {
        setOpenError(true);
      }
    });
  };

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
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Contraseña cambiada satisfactoriamente
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenError(false)} severity="success" sx={{ width: '100%' }}>
          Hubo un problema al cambiar la contraseña, intente nuevamente
        </Alert>
      </Snackbar>
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
