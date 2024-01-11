import React from 'react';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import {
  ActionIconsWidget,
} from 'dan-components';
import useStyles from './dashboard-jss';
import { connect } from 'react-redux';
import { EditProfile } from '../pageListAsync';

function PersonalDashboard(props) {
  const title = brand.name + ' - App';
  const description = brand.desc;

  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { classes } = useStyles();
  const { loginData } = props;

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} sm={12} xs={12}>
          {loginData.estado != 3
            ? <ActionIconsWidget />
            : <EditProfile />
          }
        </Grid>
      </Grid>
    </div>
  );
}
PersonalDashboard.propTypes = {
  loginData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  loginData: state.login.loginData,
});

const PersonalDashboardMapped = connect(
  mapStateToProps,
)(PersonalDashboard);

export default PersonalDashboardMapped;
