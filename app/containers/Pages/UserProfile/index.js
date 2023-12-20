import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import { connect } from 'react-redux';
import bgCover from 'dan-images/petal_bg.svg';
import useStyles from 'dan-components/SocialMedia/jss/cover-jss';
import ProfileCard from './ProfileCard';

function UserProfile(props) {
  const title = brand.name + ' - Profile';
  const description = brand.desc;
  const { clientData } = props;
  const { classes } = useStyles();
  const [value, setValue] = useState(0);

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
        name={clientData.accountname}
        clientData={clientData}
        desc=""
      />
    </div>
  );
}

UserProfile.propTypes = {
  // dataProps: PropTypes.array.isRequired,
  clientData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  clientData: state.user.clientData
});

const UserProfileMapped = connect(
  mapStateToProps,
)(UserProfile);

export default UserProfileMapped;
