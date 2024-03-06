import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import EditProfileForm from './EditProfileForm.js';
import useStyles from './userprofile-jss';
import { changeUserAuthenticatedAction, setClientDataAction } from '../../../redux/actions/Users.js';
import { getProfileDetail, saveProfile } from '../../../api/apiclient/ApiClient.js';

function EditUserProfile(props) {
  const title = brand.name + ' - Perfil';
  const description = brand.desc;
  const {
    userData, loginData, setIsAuthorizated, setClientData
  } = props;
  const history = useHistory();

  const { classes } = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      mobile: e.target.mobile.value,
      // otherphone: e.target.otherphone.value,
      email: e.target.email.value,
      birthday: e.target.birthday.value,
      mailingstreet: e.target.mailingstreet.value,
      othercityid: e.target.othercityid.value,
      session: loginData.session,
    }

    console.log("formdata", data)

    saveProfile(data).then((response) => {
      if (response.success == false && typeof response.error != 'undefined' && error.message == 'Login required') {
        logout();
      } else {
        getProfileDetail({ session: loginData.session }).then((res) => {
          setClientData(res);
        }).catch((err) => {
          console.error("Error profile detail", err)
        });
      }
      history.push('/app/pages/perfil');
    }).catch((err) => {
      console.error("Error profile detail", err)
    });
    // setTimeout(() => {
    //   setIsAuthorizated(false);
    // }, 2000);
  }

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
            <EditProfileForm
              userData={userData}
              handleSubmit={handleSubmit}
              handleLogout={() => setIsAuthorizated(false)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

EditUserProfile.propTypes = {
  userData: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired,
  setIsAuthorizated: PropTypes.func.isRequired,
  setClientData: PropTypes.func.isRequired,
};

// const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  userData: state.user.clientData,
  loginData: state.login.loginData,
  initialValues: state.initval.formValues
});

const constDispatchToProps = dispatch => ({
  setIsAuthorizated: bindActionCreators(changeUserAuthenticatedAction, dispatch),
  setClientData: bindActionCreators(setClientDataAction, dispatch),
});


const EditUserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(EditUserProfile);

export default EditUserProfileMapped;
