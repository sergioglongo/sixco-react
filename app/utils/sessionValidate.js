import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    setClientDataAction,
    setLoginDataAction
  } from 'dan-redux/actions/Users';
  import {
    setClientDataAction as setClientDataRegister
  } from 'dan-redux/actions/Register';

const handleLogout = () => {
    setLoginData({});
    setLoginUserData();
    setUserData({});
    history.push('/auth/login');
}

function sessionValidate (props) {
    const { userData, loginData, setUserData, setLoginData, setLoginUserData } = props;
    const history = useHistory();

    setLoginData({});
    setLoginUserData();
    setUserData({});
    history.push('/auth/login');
}

sessionValidate.propTypes = {
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


const sessionValidateTools = connect(
    mapStateToProps,
    constDispatchToProps
)(sessionValidate);

export default sessionValidateTools;