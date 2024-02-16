import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm, change } from 'redux-form';
import classNames from "classnames";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Icon from '@mui/material/Icon';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import { CheckboxRedux, SelectRedux, TextFieldErrorRedux } from './ReduxFormMUI';
import useStyles from './user-jss';
import { Checkbox, InputLabel, MenuItem, Select } from '@mui/material';
import { getCiudades } from '../../api/apiclient/ApiClient';

// validation functions
const required = value => (
  value === null
    ? 'Campo requerido'
    : undefined
);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Formato de email inválido'
    : undefined
);
const cuit = value => (
  value && !/^\d{11}$/i.test(value)
    ? 'Formato de cuit inválido, debe tener 11 dígitos'
    : undefined
);
const mobile = value => (
  value && !/^\+?\d{8,15}$/i.test(value)
    ? 'Formato de número móvil inválido'
    : undefined
);
const numerico = (value) => (isNaN(value) ? "Ingrese solo números" : undefined);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
const codigosAreaList = [
  { pais: "Bolivia", codigoarea: "+591" },
  { pais: "Argentina", codigoarea: "+54" },
  { pais: "Brasil", codigoarea: "+55" },
  { pais: "Chile", codigoarea: "+56" },
  { pais: "Colombia", codigoarea: "+57" },
  { pais: "Costa Rica", codigoarea: "+506" },
  { pais: "Cuba", codigoarea: "+53" },
  { pais: "Ecuador", codigoarea: "+593" },
  { pais: "El Salvador", codigoarea: "+503" },
  { pais: "Guatemala", codigoarea: "+502" },
  { pais: "Haití", codigoarea: "+509" },
  { pais: "Honduras", codigoarea: "+504" },
  { pais: "México", codigoarea: "+52" },
  { pais: "Nicaragua", codigoarea: "+505" },
  { pais: "Panamá", codigoarea: "+507" },
  { pais: "Paraguay", codigoarea: "+595" },
  { pais: "Perú", codigoarea: "+51" },
  { pais: "Puerto Rico", codigoarea: "+1" },
  { pais: "República Dominicana", codigoarea: "+1" },
  { pais: "Uruguay", codigoarea: "+598" },
  { pais: "Venezuela", codigoarea: "+58" }
];

function RegisterFormV2(props) {
  const [loading, setLoading] = useState(false);
  const [provincia, setProvincia] = useState('');
  const [provinciasList, setProvinciasList] = useState([]);
  const [provinciasArgentinaList, setProvinciasArgentinaList] = useState([]);
  const [ciudad, setCiudad] = useState();
  const [codigoArea, setCodigoArea] = useState();
  const [ciudadesList, setCiudadesList] = useState([]);
  const [pais, setPais] = useState('');
  const [paisesList, setPaisesList] = useState([]);
  const [ciudadesArgentinaList, setCiudadesArgentinaList] = useState([]);
  const [ciudadesExtranjeroList, setCiudadesExtranjeroList] = useState([]);
  const [extranjero, setExtranjero] = useState(false);
  const [terminos, setTerminos] = useState(false);
  // const [codigoArea, setCodigoArea] = useState('+54');

  useEffect(() => {
    getCiudades().then(response => {
      if (typeof response !== 'undefined' && response.records) {
        const ciudadesArgentina = [];
        const ciudadesExtranjero = [];
        const provinciasArgentina = [];
        const paises = [];
        response.records.map((v, i) => {
          //       {"othercity": "13930",     ejemplo de dato
          //       "denominacion": "Adelia Maria",
          //       "geo_provincia": "Cordoba",
          //       "geo_pais": "Argentina"}
          if (v.geo_pais === 'Argentina') {
            ciudadesArgentina.push({
              value: v.denominacion,
              label: v.denominacion,
              obj: v,
            });
            const provinciaArgentinaExistente = provinciasArgentina.find((provincia) => provincia.value == v.geo_provincia);
            if (!provinciaArgentinaExistente && v.geo_pais === 'Argentina') {
              provinciasArgentina.push({
                value: v.geo_provincia,
                label: v.geo_provincia,
              });
            }
          }
          else {
            const paisExistente = paises.find((pais) => pais.value == v.geo_pais)
            ciudadesExtranjero.push({
              value: v.denominacion,
              label: v.denominacion,
              obj: v,
            });
            if (!paisExistente) {
              paises.push({
                value: v.geo_pais,
                label: v.geo_pais,
              });
            }
          }
        }
        )
        setCiudadesArgentinaList(ciudadesArgentina);
        setCiudadesExtranjeroList(ciudadesExtranjero);
        setProvinciasList(provinciasArgentina);
        setProvinciasArgentinaList(provinciasArgentina);
        setPaisesList(paises)
      }
    });
    setLoading(false);
    setCodigoArea('+54');
  }, []);

  useEffect(() => {
    setCiudad(null)
    if (extranjero) {
      setCiudadesList([])
      setProvinciasList([])
    }
    else {
      setCiudadesList([])
      setPais('')
      setProvinciasList(provinciasArgentinaList)
    }
  }, [extranjero])

  useEffect(() => {
    setCiudadesList([])
    const provincias = [];
    ciudadesExtranjeroList.map((ciudad) => {
      if (ciudad.obj.geo_pais == pais) {
        const provinciaExistente = provincias.find((provincia) => provincia.value == ciudad.obj.geo_provincia);
        if (!provinciaExistente) {
          provincias.push({
            value: ciudad.obj.geo_provincia,
            label: ciudad.obj.geo_provincia,
          });
        }
      }
    });
    setProvinciasList(provincias);
  }, [pais])

  useEffect(() => {
    const ciudadesProvincia = []
    if (provincia) {
      if (extranjero) {
        ciudadesExtranjeroList.map((ciudad) => {
          if (ciudad.obj.geo_provincia == provincia) {
            ciudadesProvincia.push(ciudad)
          }
        })
        setCiudadesList(ciudadesProvincia)
      } else {
        ciudadesArgentinaList.map((ciudad) => {
          if (ciudad.obj.geo_provincia == provincia) {
            ciudadesProvincia.push(ciudad)
          }
        })
        setCiudadesList(ciudadesProvincia)
      }
    } else {
      setCiudad(null)
      setCiudadesList([])
    }
  }, [provincia])

  const handleSubmitForm = (values) => {
    if (terminos && !pristine) {
      // handleChangeMobile();
      // console.log("registerForm", registerForm.values)
      // console.log("values", values.target.form)
      handleSubmit(values);
    }
  }

  const handleChangeMobile = () => {
    // Modificar manualmente el estado del campo 'myField' del formulario 'myForm'
    // console.log(registerForm.values)
    dispatch(change('registerForm', 'mobile', codigoArea + registerForm.values.mobile));
  };

  const { classes, cx } = useStyles();
  const {
    handleSubmit,
    pristine,
    submitting,
    deco,
    dispatch,
    registerForm,
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
        <form onSubmit={(values) => handleSubmitForm(values)}>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="firstname"
                component={TextFieldErrorRedux}
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
                name="lastname"
                component={TextFieldErrorRedux}
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
                component={TextFieldErrorRedux}
                placeholder="Ingresa tu CUIT"
                required
                validate={[required, cuit]}
                label="CUIT"
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldErrorRedux}
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
          <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            {/* {extranjero && */}
            <div style={{ width: '30%' }}>
              {/* <FormControl variant="standard" className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Codigo área</InputLabel>
                <Select
                  variant="standard"
                  native
                  value={codigoArea}
                  onChange={(e) => setCodigoArea(e.target.value)}
                  inputProps={{
                    id: 'age-native-simple',
                  }}>
                  <option key='vacio' value='vacio'></option>
                  {codigosAreaList.map((option, index) => {
                    return <option key={index} value={option.codigoarea}>{" (" + option.codigoarea + ") " + option.pais }</option>
                  })}
                </Select>
              </FormControl> */}
              {/* <FormControl variant="standard" className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Cod.Area</InputLabel>
                <Field
                  name="codArea"
                  component={SelectRedux}
                  value={codigoArea}
                  placeholder="Seleccione"
                  required
                  onChange={() => handleChangeMobile()}
                  style={{ textAlign: 'left' }}
                >
                  {codigosAreaList.map((option, index) => {
                    return <option key={index} value={option.codigoarea}>{" (" + option.codigoarea + ") " + option.pais }</option>
                  })}
                </Field>
              </FormControl> */}
            </div>
            {/* } */}
            <div style={{ width: '70%' }}>
              <FormControl className={classes.formControl}>
                <Field
                  name="mobile"
                  component={TextFieldErrorRedux}
                  label="Celular *"
                  placeholder="Ingrese su número de Celular con código de area"
                  // onChange={() => handleChangeMobile()}
                  validate={[required, mobile]}
                  className={classes.field}
                />
              </FormControl>
            </div>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="mailingstreet"
                component={TextFieldErrorRedux}
                label="Dirección *"
                placeholder="Ingrese su dirección"
                validate={[required]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div style={{ width: '100%' }}>
            <FormControlLabel
              control={
                <Field
                  name="extranjero"
                  component={CheckboxRedux}
                  initialValue={false}
                  validate={required}
                  onChange={() => setExtranjero(!extranjero)}
                />
              }
              label="Extranjero"
            />
          </div>
          {paisesList.length > 0 && extranjero &&
            <div style={{ width: '100%' }}>
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Pais</InputLabel>
                <Select
                  variant="standard"
                  native
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  inputProps={{
                    id: 'age-native-simple',
                  }}>
                  <option key='vacio' value='vacio'></option>
                  {paisesList.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                  })}
                </Select>
              </FormControl>
            </div>
          }
          {provinciasList.length > 0 &&
            <div style={{ width: '100%' }}>
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Provincia</InputLabel>
                <Select
                  variant="standard"
                  native
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  inputProps={{
                    id: 'age-native-simple',
                  }}>
                  <option key='vacio' value='vacio'></option>
                  {provinciasList.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                  })}
                </Select>
              </FormControl>
            </div>
          }
          {ciudadesList.length > 0 &&
            <div style={{ width: '100%' }}>
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Ciudad</InputLabel>
                <Field
                  name="othercity"
                  component={SelectRedux}
                  value={ciudad}
                  placeholder="Selection"
                  required
                  style={{ textAlign: 'left' }}
                >
                  {ciudadesList.map((option, index) => {
                    return <MenuItem key={index} value={option.obj.othercity}>{option.label}</MenuItem>
                  })}
                </Field>
              </FormControl>
            </div>
          }
          <div>
            <Checkbox
              checked={terminos}
              onChange={() => setTerminos(!terminos)}
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
              disabled={loading || submitting || pristine || !terminos || !ciudadesList.length > 0}
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
  dispatch: PropTypes.func.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm',
  enableReinitialize: true,
})(RegisterFormV2);

const RegisterFormMapped = connect(
  state => ({
    deco: state.ui.decoration,
    registerForm: state.form.registerForm,
  }),
)(RegisterFormReduxed);

export default RegisterFormMapped;
