import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import { SourceReader, PapperBlock } from 'dan-components';
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {
  setClientDataAction,
} from 'dan-redux/actions/Users';
// import { getPickListValues, editarPerfilCiudadano, consultaCiudadano } from '../../../utils/ApiClient';
// import { StyledNotif } from '../../../containers/UiElements/demos';
// import styles from 'dan-components/SocialMedia/jss/cover-jss';
import EditProfileForm from './EditProfileForm.js';
import useStyles from './userprofile-jss';

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

function EditUserProfile(props) {
  const title = brand.name + ' - Perfil';
  const description = brand.desc;
  const {
    clientData, loginData, setClientData
  } = props;
  const [value, setValue] = useState(0);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [loading, setLoading] = useState(false);
  const [listabarrio, setListabarrio] = useState([]);

  const date = new Date();
  const history = useHistory();
  const { classes } = useStyles();

  const [valueForm, setValueForm] = useState();
  // console.log(clientData)
  const showResult = (values) => {
    const ciudadano = {
      assigned_user_id: '19x1',
      record: clientData.account_no,
      accountname: values['accountname'],
      apellido: values.apellido,
      phone: values.phone,
      email1: values.email1,
      domicilio: values.domicilio,
      bill_code: values.bill_code,
    //   listabarrio: values.listabarrio,
    };

    console.log("Objeto a guardar", ciudadano);
    setValueForm(values);
    // return
    // editarPerfilCiudadano(loginData.session, clientData.id, ciudadano).then(response => {
    //   // debugger
    //   if (typeof response !== 'undefined' && response.success == true) {
    //     // setClientData(ciudadano);
    //     const record = clientData.id.replace('11x', '');
    //     consultaCiudadano(loginData.session, record).then(response => {
    //       const clientdata = response;
    //       setClientData(clientdata);
    //       history.push('/app/pages/perfil');
    //     });
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

//   useEffect(() => {
//     getPickListValues('Accounts', 'listabarrio').then(response => {
//       if (typeof response !== 'undefined' && response.records) {
//         const listabarrios = [];
//         response.records.map((v, i) => {
//           listabarrios.push({
//             value: v,
//             label: v,
//             obj: v,
//           });
//         });
//         setListabarrio(listabarrios);
//       } else if (typeof response !== 'undefined' && response.success == false && typeof response.error !== 'undefined') {
//         setDatanotif({
//           ...datanotif,
//           open: true,
//           message: response.error.message
//         });
//       }
//       setLoading(false);
//       // console.log(listabarrio)
//     });
//   }, []);

  return (
    <div>
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet> */}

      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            {/* <EditUserForms
              onSubmit={(values) => showResult(values)}
              clientData={clientData}
              listabarrio={listabarrio}
            /> */}
            <EditProfileForm clientData={clientData} handleSubmit={(values) => showResult(values)}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

EditUserProfile.propTypes = {
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


const EditUserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(EditUserProfile);

export default EditUserProfileMapped;
