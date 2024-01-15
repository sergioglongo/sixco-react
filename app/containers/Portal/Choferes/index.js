import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Type from 'dan-styles/Typography.scss';
import { SourceReader, PapperBlock } from 'dan-components';
import useStyles from './choferes-jss';
// import TablaConsultas from './partials/Tabla';
// import { getListadoConsultas } from '../../../utils/ApiClient';
// import StyledNotif from '../../UiElements/Notifications';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import TablaChoferes from './partials/TablaChoferes';

const listaPruebas = [
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
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});


function Choferes(props) {
  const { loginData } = props;
  const { classes, cx } = useStyles();

  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [lista, setListconsultas] = useState(listaPruebas);
  const title = brand.name + ' - Choferes';
  const description = brand.desc;

  useEffect(() => {

    // getListadoConsultas(loginData.session,loginData.userid,"").then(response => {
    //   if(typeof response != 'undefined' && response.records){
    //     // console.log(response.records);
    //     setListconsultas(response.records)
    //   }else if(typeof response != 'undefined' && response.success == false && typeof response.error != 'undefined'){
    //     // setOpenmodal(true);
    //     setDatanotif({
    //         ...datanotif,
    //         open:true,
    //         message:response.error.message
    //       });
    //   }
    // });

  }, []);

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
            <PapperBlock title="Listado de Choferes" noMargin whiteBg icon="ion-ios-people"
              desc="Choferes registrados."
              button={[<Button variant="contained" component={LinkBtn} to="/app/choferes/nuevo-chofer" className={classes.button} color="primary">
                Nuevo Chofer  <Icon className={classes.rightIcon}>add</Icon>
              </Button>]}
            >
              <div>
                {lista.length == 0 ? (
                  <Typography variant="h6" className={Type.textCenter}>
                    Sin choferes para mostrar.<br /><br />
                    <div className={classes.btnArea}>
                      <Button variant="contained" component={LinkBtn} to="/app/choferes/nuevo-chofer" className={classes.button} color="primary">
                        Nuevo Chofer <Icon className={classes.rightIcon}>add</Icon>
                      </Button>
                    </div>
                  </Typography>
                ) : (
                  <TablaChoferes lista={lista} />
                )}
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>

      {/* <StyledNotif datanotif={datanotif} setDatanotif={setDatanotif} /> */}
    </div>
  );
}

Choferes.propTypes = {
  loginData: PropTypes.object.isRequired,
};

const mapUserStateToProps = state => ({
  loginData: state.login.loginData,
});

const ChoferesMapped = connect(
  mapUserStateToProps
)(Choferes);

export default ChoferesMapped;
