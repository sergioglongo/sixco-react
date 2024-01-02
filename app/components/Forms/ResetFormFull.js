import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classNames from "classnames";
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import AllInclusive from '@mui/icons-material/AllInclusive';
import Brightness5 from '@mui/icons-material/Brightness5';
import People from '@mui/icons-material/People';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import useStyles from './user-jss';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import { CircularProgress, Hidden } from '@mui/material';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined
);
const numerico = (value) => (isNaN(value) ? "Ingrese solo números" : undefined);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
const styles2 = (theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    wrapper: {
        margin: theme.spacing(1),
        position: "relative",
    },
    buttonSuccess: {
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: "absolute",
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
});

function ResetFormFull(props) {
    const [showPassword, setShowPassword] = useState(false);
    const {
        // classes,
        // handleSubmit,
        // pristine,
        // submitting,
        // deco,
    } = props;

    const handleClickShowPassword = () => {
        setShowPassword(show => !show);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    const buttonClassname = classNames({
        // [classes.buttonSuccess]: success,
    });
    const { classes, cx } = useStyles();
    const {
        handleSubmit,
        onSubmit,
        pristine,
        submitting,
        dispatch,
        error,
        loading,
        setLoading,
        deco,
    } = props;
    return (
        <Paper className={cx(classes.sideWrap, deco && classes.petal)}>
            <div className={classes.topBar}>
                <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name}  style={{ width: 200, height: 80 }}/>
                </NavLink>
            </div>
            <Typography variant="h4" className={classes.title} gutterBottom>
                Recuperar contraseña
            </Typography>
            <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
                Te mandaremos un link a tu correo electrónico
            </Typography>
            <section className={classes.formWrap}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormControl variant="standard" className={classes.formControl}>
                            <Field
                                name="email"
                                component={TextFieldRedux}
                                placeholder="Ingrese su Email"
                                label="Ingrese su Email"
                                required
                                validate={[required, email]}
                                className={classes.field}
                            />
                        </FormControl>
                    </div>
                    <div className={classes.btnArea}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Enviar
                            <ArrowForward
                                className={classNames(
                                    classes.rightIcon,
                                    classes.iconSmall
                                )}
                                disabled={submitting || pristine}
                            />
                        </Button>
                    </div>
                    <div className={classes.btnArea}>
                        <Button
                            size="small"
                            component={LinkBtn}
                            to="/auth/login"
                            className={classes.buttonLink}
                        >
                            Volver
                        </Button>
                    </div>
                </form>
            </section>
        </Paper>
    );
}

ResetFormFull.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
    form: 'loginForm2',
    enableReinitialize: true,
})(ResetFormFull);

const FormInit = connect(
    state => ({
        force: state,
        initialValues: state.login.usersLogin,
        deco: state.ui.decoration
    }),
)(LoginFormReduxed);

export default FormInit;
