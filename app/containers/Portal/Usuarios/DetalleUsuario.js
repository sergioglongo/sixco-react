import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import {
  PapperBlock, GeneralCard, Comments, ShowcaseCard
} from 'dan-components';
// import commentData from 'dan-api/apps/commentData';
// import { Comments, ShowcaseCard } from 'dan-components';
// import { getDetalleEntidad, getListadoComentarios } from '../../../utils/ApiClient';
import StyledNotif from '../../UiElements/demos/Notification/StyledNotif';
import { Grid, Typography } from '@mui/material';
// import Comentarios from './partials/Comentarios';
import useStyles from './Usuarios-jss';


const lista = [
  {
    nro: 1,
    apellido: 'Lopez',
    nombre: 'Julio',
    estado: 'Habilitado',
  },
  {
    nro: 2,
    apellido: 'Perez',
    nombre: 'Juan Carlos',
    estado: 'Habilitado',
  }
]
function DetalleUsuario(props) {
  const { loginData } = props;
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [dato, setdato] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [tab, setTab] = useState(0);
  const title = brand.name + ' - Usuario - Detalle';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState([]);
  const { recordid } = props.match.params;
  const { classes, cx } = useStyles();

  //   console.log(props);

  useEffect(() => {
    // console.log(props.match.params.recordid);
    const usuario = lista.find((usuario) => usuario.nro == recordid);
    if (usuario) {
      setdato(usuario);
    }
    // console.log('usuario', usuario);
    // getDetalleEntidad(loginData.session, recordid).then(response => {
    //   if (typeof response !== 'undefined' && response.result.record) {
    //     console.log(response.result.record);
    //     setdato(response.result.record);
    //   } else if (typeof response !== 'undefined' && response.success == false && typeof response.error !== 'undefined') {
    //     // setOpenmodal(true);
    //     setDatanotif({
    //       ...datanotif,
    //       open: true,
    //       message: response.error.message
    //     });
    //   }
    // });
  }, []);

  const handleChange = (event, val) => {
    setTab(val);
  };

  const showResult = useCallback((values) => {
    setTimeout(() => {
      setValueForm(values);
      alert(`You submitted:\n\n${valueForm}`);
    }, 500); // simulate server latency
  }, [valueForm]);

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
            <PapperBlock
              title="Detalle usuario"
              noMargin
              whiteBg
              icon="ion-ios-chatbubbles"
            />
          </Grid>
        </Grid>

        {dato && (
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <div>
                <GeneralCard>
                <Typography variant="h5" component="h2">
                    Usuario Nº
                    {' '}
                    {dato.nro}
                  </Typography>
                  <br />
                  <Typography className={classes.title} color="textSecondary">
                    Nombre
                  </Typography>
                  <Typography component="p">{dato.nombre}</Typography>
                  <br />
                  <Typography className={classes.title} color="textSecondary">
                    Apellido
                  </Typography>
                  <Typography component="p">{dato.apellido}</Typography>
                  <br />
                </GeneralCard>
              </div>
            </Grid>
          </Grid>
        )}
      </div>

      {/* <StyledNotif datanotif={datanotif} setDatanotif={setDatanotif} /> */}
    </div>
  );
}

DetalleUsuario.propTypes = {
  loginData: PropTypes.object.isRequired,
};

const mapUserStateToProps = state => ({
  loginData: state.login.loginData,
});

const DetalleUsuarioMapped = connect(
  mapUserStateToProps
)(DetalleUsuario);

export default DetalleUsuarioMapped;
