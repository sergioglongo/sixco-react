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
  setLoginDataAction
} from 'dan-redux/actions/Users';
import {
  setClientDataAction as setClientDataRegister
} from 'dan-redux/actions/Register';
import EditProfileForm from './EditProfileForm.js';
import useStyles from './userprofile-jss';

function EditUserProfile(props) {
  const title = brand.name + ' - Perfil';
  const description = brand.desc;
  const {
    userData, loginData, setUserData, setLoginData, setLoginUserData
  } = props;
  const history = useHistory();

  const { classes } = useStyles();

  const [formData, setFormData] = useState();
  useEffect(() => {
    if (userData) {
        setFormData(userData);
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Chofer", formData)
    
    setTimeout(() => {
      setUserData(formData);
      setLoginData(formData);
      setLoginUserData(formData);
      // history.goBack();
      history.push('/app');
    }, 2000);
  }

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
            <EditProfileForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

EditUserProfile.propTypes = {
  userData: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  setLoginData: PropTypes.func.isRequired,
  setLoginUserData: PropTypes.func.isRequired,
};

// const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  userData: state.user.clientData,
  loginData: state.login.loginData,
});

const constDispatchToProps = dispatch => ({
  setUserData: bindActionCreators(setClientDataAction, dispatch),
  setLoginUserData: bindActionCreators(setClientDataRegister, dispatch),
  setLoginData: bindActionCreators(setLoginDataAction, dispatch),
});


const EditUserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(EditUserProfile);

export default EditUserProfileMapped;
