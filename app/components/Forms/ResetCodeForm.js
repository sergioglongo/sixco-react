import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import { TextFieldErrorRedux } from './ReduxFormMUI';
import useStyles from './reset-jss';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Email inválido'
        : undefined
);

const code = value => (
    value && !/^[A-Z0-9]{3}-[A-Z0-9]{3}$/i.test(value)
        ? 'Código inválido'
        : undefined
);

const passwordsMatch = (value, allValues) => {
    if (value !== allValues.password) {
        return 'Las contraseñas no coinciden';
    }
    return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

const mask = (value, previousValue) => {
    const code = value.toUpperCase();
    let maskedCode = code.replace(/[^A-Z0-9]/g, '');
    maskedCode = maskedCode.replace(/(.{3})(.+)/, '$1-$2');
    if (maskedCode.length > 6) {
        maskedCode = maskedCode.slice(0, 7);
    }
    return maskedCode;
};

function ResetCodeForm(props) {
    const { classes, cx } = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const {
        handleSubmit,
        pristine,
        submitting,
        deco,
    } = props;

    return (
        <Paper className={cx(classes.sideWrap, deco && classes.petal)}>
            <div >
                <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name}
                        style={{
                            filter: 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2))',
                            width: 200, height: 80
                        }}
                    />
                </NavLink>
            </div>
            <Typography variant="h4" className={classes.title} gutterBottom>
                Recuperación de contraseña
            </Typography>
            <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
                Completa los datos para restablecer tu contraseña
            </Typography>
            <section className={classes.formWrap}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormControl variant="standard" className={classes.formControl}>
                            <Field
                                name="code"
                                component={TextFieldErrorRedux}
                                placeholder="Ingrese el código de verificación"
                                label="XXX-XXX"
                                required
                                validate={[required, code]}
                                className={classes.field}
                                normalize={mask}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="standard" className={classes.formControl}>
                            <Field
                                name="password"
                                component={TextFieldErrorRedux}
                                type={showPassword ? 'text' : 'password'}
                                label="Nueva contraseña"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={() => setShowPassword(show => !show)}
                                                onMouseDown={() => event.preventDefault()}
                                                size="large">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                validate={required}
                                className={classes.field}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="standard" className={classes.formControl}>
                            <Field
                                name="passwordConfirm"
                                component={TextFieldErrorRedux}
                                type={showPasswordRepeat ? 'text' : 'password'}
                                label="Repite la nueva contraseña"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={() => setShowPasswordRepeat(show => !show)}
                                                onMouseDown={() => event.preventDefault()}
                                                size="large">
                                                {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                validate={[required, passwordsMatch]}
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
                            Cambiar
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
                            to="/auth/reset-password"
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

ResetCodeForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    deco: PropTypes.bool.isRequired,
};

const ResetCodeFormReduxed = reduxForm({
    form: 'resetFrm',
    enableReinitialize: true,
})(ResetCodeForm);

const ResetCodeFormMapped = connect(
    state => ({
        deco: state.ui.decoration
    }),
)(ResetCodeFormReduxed);

export default ResetCodeFormMapped;
