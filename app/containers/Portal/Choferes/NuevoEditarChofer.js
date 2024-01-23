import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import FormularioNuevoEditarChofer from './partials/FormularioNuevoEditarChofer.js';
import useStyles from './choferes-jss.js';

const initData = {
  estado: 1,
};
const lista = [
  {
      nro: 1,
      apellido: 'Lopez',
      nombre: 'Julio',
      email:'juliolopez@me.com',
      estado: 2,
  },
  {
      nro: 2,
      apellido: 'Perez',
      nombre: 'Juan Carlos',
      email:'juancarlos@me.com',
      estado: 3,
  }
]
function NuevoChofer(props) {
  const title = brand.name + ' - Perfil';
  const description = brand.desc;
  const {
    nuevoChofer
  } = props;
  const history = useHistory();
  const { classes } = useStyles();
  const { recordid } = props.match.params;
  const [formData, setFormData] = useState(initData);
  
  useEffect(() => {
    const chofer = lista.find((chofer) => chofer.nro == recordid);
    if (chofer) {
        setFormData(chofer);
    }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      history.goBack();
    }, 3000);
  }

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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <FormularioNuevoEditarChofer edit={recordid != undefined} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

NuevoChofer.propTypes = {
  loginData: PropTypes.object.isRequired,
  setClientData: PropTypes.func.isRequired,
};

// const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  loginData: state.login.loginData,
  nuevoChofer: state.form.nuevoChofer,
});

const NuevoChoferMapped = connect(
  mapStateToProps,
)(NuevoChofer);

export default NuevoChoferMapped;
