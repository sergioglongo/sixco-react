import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import { connect } from 'react-redux';
import bgCover from 'dan-images/petal_bg.svg';
import useStyles from 'dan-components/SocialMedia/jss/cover-jss';
import ProfileCard from './ProfileCard';
import { getProfileDetail, logout } from '../../../api/apiclient/ApiClient';

function UserProfile(props) {
  const title = brand.name + ' - Profile';
  const description = brand.desc;
  const { userData, loginData } = props;
  const { classes } = useStyles();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = {
      session: loginData.session,
    }
    if(userData == undefined){
      getProfileDetail(data).then((response) => {
        if (response.success == false && typeof response.error != 'undefined' && error.message == 'Login required') {
          logout();
        } else {
          setTimeout(() => {
            setProfile(response);
            
          }, 4000);
        }
      }).catch((err) => {
        console.error("Error profile detail", err)
      });
    } else {
      setTimeout(() => {
        setProfile(userData);
      }, 4000);

    }
  }, [])

  const handleChange = (event, val) => {
    setValue(val);
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
      <ProfileCard
        coverImg={bgCover}
        avatar={dummy.user.avatar}
        name={userData.firstname}
        profile={profile}
        desc=""
      />
    </div>
  );
}

UserProfile.propTypes = {
  // dataProps: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  userData: state.user.clientData,
  loginData: state.login.loginData
});

const UserProfileMapped = connect(
  mapStateToProps,
)(UserProfile);

export default UserProfileMapped;
