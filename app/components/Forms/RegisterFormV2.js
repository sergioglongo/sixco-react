import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classNames from "classnames";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import AllInclusive from '@mui/icons-material/AllInclusive';
import Brightness5 from '@mui/icons-material/Brightness5';
import People from '@mui/icons-material/People';
import Icon from '@mui/material/Icon';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import useStyles from './user-jss';
import { Autocomplete, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);
const numerico = (value) => (isNaN(value) ? "Ingrese solo números" : undefined);

const passwordsMatch = (value, allValues) => {
  if (
    value &&
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value)
  ) {
    return "Las contraseñas debe tener mas de 6 caracteres, al menos una minúscula una mayúscula un numero y un caracter especial. Ejemplo: Piquiense!22";
  }
  if (value !== allValues.passwordConfirm) {
    return "Las contraseñas no coinciden";
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

const suggestions = [
  { title: 'San Miguel de Tucuman', id: 1 },
  { title: 'CABA', id: 2 },
  { title: 'Trelew', id: 3 },
  { title: 'Rio Cuarto', id: 4 },
  { title: 'Yerba Buena', id: 5 },
  { title: "Rosario", id: 6 },
  { title: 'Santa Rosa', id: 7 },
  { title: 'Santiago del Estero', id: 8 },
  { title: 'Posadas', id: 9 },
  { title: 'Las Grutas', id: 10 },
  { title: 'Mendoza', id: 11 },
  { title: 'San Fernando del Valle de Catamarca', id: 12 }
]

function RegisterFormV2(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleClickShowRepeatPassword = () => {
    setShowRepeatPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownRepeatPassword = (event) => {
    event.preventDefault();
  };

  const { classes, cx } = useStyles();
  const {
    handleSubmit,
    pristine,
    submitting,
    deco
  } = props;
  return (
    <Paper className={cx(classes.sideWrap, deco && classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img src={logo} alt={brand.name}
            style={{
              filter: 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2))',
              width: 200, height: 80
            }}
          />
        </NavLink>
        <Button
          size="small"
          className={classes.buttonLink}
          component={LinkBtn}
          to="/auth/login"

        >
          <Icon className={classes.icon}>arrow_forward</Icon>
          <div style={{ maxWidth: 120, lineHeight: '1.3' }}>
            ¿Ya tenes cuenta? Iniciá sesión
          </div>
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Registrate
      </Typography>
      <Typography
        variant="caption"
        className={classes.subtitle}
        gutterBottom
        align="center"
      >
        Ingresá tus datos para registrarte
      </Typography>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="accountname"
                component={TextFieldRedux}
                placeholder="Nombre"
                label="Nombre Completo"
                required
                validate={required}
                className={classes.field}
              />
            </FormControl>
          </div>

          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="apellido"
                component={TextFieldRedux}
                placeholder="Apellido"
                label="Apellido Completo"
                required
                validate={required}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="cuit"
                component={TextFieldRedux}
                placeholder="Ingresa tu CUIT"
                required
                validate={[required, numerico]}
                label="CUIT"
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder="Email"
                label="Email"
                required
                validate={[required, email]}
                className={classes.field}
              // error={true}
              // helperText={"Invalid Social Security Format"}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="phone"
                component={TextFieldRedux}
                label="Celular *"
                placeholder="Ingrese su número de Celular con código de area"
                validate={[required, numerico]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="direccion"
                component={TextFieldRedux}
                label="Dirección *"
                placeholder="Ingrese su dirección"
                validate={[required]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div style={{ width: '100%' }}>
            <FormControl className={classes.formControl}>
              <Autocomplete
                id="ciudad"
                name="ciudad"
                options={suggestions.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    label="elije una ciudad"
                    margin="normal" />
                )}
              />
            </FormControl>
          </div>
          <div>
            <FormControlLabel
              control={
                <Field
                  name="terminosycond"
                  component={CheckboxRedux}
                  required
                  validate={required}
                  className={classes.agree}
                />
              }
              label="Estoy de acuerdo con los"
            />
            <a href="#" className={classes.link}>
              Términos y condiciones
            </a>
          </div>
          <div className={classes.btnArea}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              type="submit"
              disabled={loading || submitting || pristine}
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

RegisterFormV2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm2',
  enableReinitialize: true,
})(RegisterFormV2);

const RegisterFormMapped = connect(
  state => ({
    deco: state.ui.decoration
  }),
)(RegisterFormReduxed);

export default RegisterFormMapped;
