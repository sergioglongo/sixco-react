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

function LoginFormV2(props) {
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
    themeType,
    loading,
    setLoading,
    deco,
  } = props;
  return (
    <Paper className={cx(classes.sideWrap, deco && classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          {/* <img src={logo} alt={brand.name} style={{ width: 200, height: 80 }} /> */}
          <img src={logo} alt={brand.name}
            style={{
              filter: 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2))',
              width: 200, height: 80
            }}
          />
        </NavLink>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/auth/registrese">
          <Icon className={classes.icon}>arrow_forward</Icon>
          Registrate
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Ingresar
      </Typography>
      <section className={classes.pageFormSideWrap}>
        <form onSubmit={onSubmit}>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="documento"
                component={TextFieldRedux}
                placeholder="CUIT"
                label="CUIT"
                required
                validate={[required, numerico]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="password"
                component={TextFieldRedux}
                type={showPassword ? "text" : "password"}
                label="Contraseña"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={
                          handleClickShowPassword
                        }
                        onMouseDown={
                          handleMouseDownPassword
                        }
                      >
                        {showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
                validate={required}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div className={classes.optArea} style={{ marginTop: 16 }}>
            {/* <FormControlLabel className={classes.label} control={<Field name="checkbox" component={CheckboxRedux} />} label="Remember" /> */}
            <Button
              size="small"
              component={LinkBtn}
              to="/auth/reset-password"
              className={classes.buttonLink}
            >
              ¿Olvidaste la contraseña?
            </Button>
          </div>
          <div className={classes.wrapper} style={{ marginTop: 16 }}>
            {/* <Button variant="contained" fullWidth color="primary" size="large" onClick={() => dispatch(submit('remoteSubmit'))}> */}
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              type="submit"
              disabled={loading}
              className={buttonClassname}
            >
              Continuar
              <ArrowForward
                className={classNames(
                  classes.rightIcon,
                  classes.iconSmall
                )}
              />
              {loading && (
                <CircularProgress
                  size={24}
                  className={styles2.buttonProgress}
                />
              )}
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
}

LoginFormV2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  themeType: PropTypes.string
};

const LoginFormReduxed = reduxForm({
  form: 'loginForm2',
  enableReinitialize: true,
})(LoginFormV2);

const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.login.usersLogin,
    deco: state.ui.decoration,
    themetype: state.ui.type
  }),
)(LoginFormReduxed);

export default FormInit;
