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
import { Box, Divider, Grid, Typography } from '@mui/material';
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
  const [commentData, setCommentData] = useState([]);
  const [tab, setTab] = useState(0);
  const title = brand.name + ' - Usuario - Detalle';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState([]);
  const { recordid } = props.match.params;
  const { classes, cx } = useStyles();
  const { userData } = props.location.state;
  //   console.log(props);

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
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <PapperBlock
              title="Detalle usuario"
              desc="Informacion del usuario"
              noMargin
              whiteBg
              icon="ion-ios-list-box"
            />
          </Grid>
        </Grid>

        {userData && (
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <div>
                <GeneralCard>
                  <Box fullWidth display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Typography component="p" >
                      Estado: {userData.estado_cuenta}
                    </Typography>
                    <Typography component="p" >
                      Tipo: {userData.tipo_contacto}
                    </Typography>
                  </Box>
                  <br />
                  <Divider />
                  <br />
                  <Box fullWidth display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant="h5" component="h2">
                      Cuenta:
                      {' '}
                      {userData.accountname} {'('}{userData.tipo_doc}: {userData.siccode}{')'}
                    </Typography>
                  </Box>
                  <br />
                  <Grid container rowSpacing={4} columnSpacing={2} >
                    <Grid item xs={12} sm={6}>
                      <Typography className={classes.title} color="textSecondary">
                        Nombre
                      </Typography>
                      <Typography component="p">{userData.firstname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography className={classes.title} color="textSecondary">
                        Apellido
                      </Typography>
                      <Typography component="p">{userData.lastname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography className={classes.title} color="textSecondary">
                        Domicilio
                      </Typography>
                      <Typography component="p">{userData.mailingstreet}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography className={classes.title} color="textSecondary">
                        Localidad
                      </Typography>
                      <Typography component="p">{userData.othercityname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography className={classes.title} color="textSecondary">
                        Provincia
                      </Typography>
                      <Typography component="p">{userData.otherstate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography className={classes.title} color="textSecondary">
                        Pais
                      </Typography>
                      <Typography component="p">{userData.othercountry}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography className={classes.title} color="textSecondary">
                        Teléfono
                      </Typography>
                      <Typography component="p">{userData.mobile}</Typography>
                    </Grid>
                  </Grid>
                </GeneralCard>
              </div>
            </Grid>
          </Grid>
        )}
      </div>

      {/* <StyledNotif datanotif={datanotif} setDatanotif={setDatanotif} /> */}
    </div >
  );
}

DetalleUsuario.propTypes = {
  userData: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired,
};

const mapUserStateToProps = state => ({
  loginData: state.login.loginData,
});

const DetalleUsuarioMapped = connect(
  mapUserStateToProps
)(DetalleUsuario);

export default DetalleUsuarioMapped;
