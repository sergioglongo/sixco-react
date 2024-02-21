import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react18-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from './choferes-jss.js';
import ChoferFormPersonales from './partials/ChoferFormPersonales.js';
import ChoferFormContacto from './partials/ChoferFormContacto.js';
import ChoferFormLaboral from './partials/ChoferFormLaboral.js';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import { Button } from '@mui/material';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const initData = {
  estado: 1,
};
const lista = [
  {
    nro: 1,
    apellido: 'Lopez',
    nombre: 'Julio',
    nacionalidad: "Argentino",
    tipoDocumento: "DNI",
    nroDocumento: '29457458',
    cuil: '20294574582',
    paisNacimiento: 'argentina',
    sexo: 'masculino',
    estadoCivil: 'Casado',
    nivelInstitucion: 'universitario',

    calle: 'siempreviva',
    altura: '1234',
    provincia: 20,
    ciudad: 200,
    cp: '4105',
    telefono: '3816302170',
    email: 'juliolopez@me.com',
    legajo: '123456',
    puestoJerarquico: 2,
    puestoEmpresa: 'asistente',
    hsNormales: '8',
    tipoContacto: 'periodo de prueba',
    afectadoA: null,
    fechaAlta: '20230125',
    estadoAfiliacion: 'dentro de convenio',
    categoriaConvenio: '1',
    convenioColectivo: '1',
    estado: 2,
  },
  {
    nro: 2,
    apellido: 'Juarez',
    nombre: 'Daniel',
    nacionalidad: "Argentino",
    tipoDocumento: 'DNI',
    nroDocumento: '29457458',
    CUIL: '20294574582',
    paisNacimiento: 'argentina',
    sexo: 'masculino',
    estadoCivil: 'Soltero',
    nivelInstitucion: 'Secundario',
    calle: 'Lamadrid',
    altura: '1234',
    provincia: 20,
    ciudad: 200,
    cp: '4105',
    telefono: '3816302170',
    email: 'juliolopez@me.com',
    legajo: '123456',
    puestoJerarquico: 2,
    puestoEmpresa: 'asistente',
    hsNormales: '8',
    tipoContacto: 'periodo de prueba',
    afectadoA: null,
    fechaAlta: '20230125',
    estadoAfiliacion: 'dentro de convenio',
    categoriaConvenio: '1',
    estado: 2,
  },
]

function CrearEditarChofer(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const { recordid } = props.match.params;
  const [formData, setFormData] = useState(initData);
  const history = useHistory();

  useEffect(() => {
    const chofer = lista.find((chofer) => chofer.nro == recordid);
    if (chofer) {
      setFormData(chofer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // history.goBack();
      console.log("formdata", formData)
    }, 3000);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root} >
      {/* <Grid item md={12} xs={12}> */}
      <form onSubmit={handleSubmit}>

        <PapperBlock title="Chofer" noMargin whiteBg icon="ion-ios-people"
          desc=""
        >
          <div >
            <AppBar position="static"  >
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="inherit"
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Personal" {...a11yProps(0)} />
                <Tab label="Contacto" {...a11yProps(1)} />
                <Tab label="Laboral" {...a11yProps(2)} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
              <ChoferFormPersonales edit={recordid != undefined} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ChoferFormContacto edit={recordid != undefined} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <ChoferFormLaboral edit={recordid != undefined} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

            </TabPanel>
          </div>
          <div style={{ marginLeft: 20 }}>
            <Button
              type="button"
              onClick={() => history.goBack()}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={
                !(formData &&
                  (formData.nombre || formData.apellido || formData.email)
                )
              }
            >
              Guardar
            </Button>
          </div>
        </PapperBlock>
      </form>
      {/* </Grid> */}
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}

      {/* </SwipeableViews> */}
    </div>
  );
}

CrearEditarChofer.propTypes = {
  loginData: PropTypes.object.isRequired,
};

// const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  loginData: state.login.loginData,
  CrearEditarChofer: state.form.CrearEditarChofer,
});

const CrearEditarChoferMapped = connect(
  mapStateToProps,
)(CrearEditarChofer);

export default CrearEditarChoferMapped;
