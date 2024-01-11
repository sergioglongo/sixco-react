import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import brand from 'dan-api/dummy/brand';
import { NavLink } from 'react-router-dom';
import {
    PapperBlock, GeneralCard
} from 'dan-components';
// import commentData from 'dan-api/apps/commentData';
// import { Comments, ShowcaseCard } from 'dan-components';
// import { getDetalleEntidad, getListadoComentarios } from '../../../utils/ApiClient';
import StyledNotif from '../../UiElements/demos/Notification/StyledNotif';
import { Button, Divider, Grid, Icon, Typography } from '@mui/material';
// import Comentarios from './partials/Comentarios';
import useStyles from './choferes-jss';

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
function DetalleChofer(props) {
    const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
    const [dato, setdato] = useState(null);
    const title = brand.name + ' - Chofer - Detalle';
    const description = brand.desc;
    const { recordid } = props.match.params;
    const { classes, cx } = useStyles();
    const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
        return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
      });
    //   console.log(props);

    useEffect(() => {
        // console.log(props.match.params.recordid);
        const chofer = lista.find((chofer) => chofer.nro == recordid);
        if (chofer) {
            // console.log(chofer);
            setdato(chofer);
        }
        // console.log('chofer', chofer);
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
                            title="Detalle chofer"
                            desc="Informacion del chofer"
                            noMargin
                            whiteBg
                            icon="ion-ios-list-box"
                            button={[<Button variant="contained" component={LinkBtn} to={'/app/choferes/' + recordid + '/editar'} className={classes.button} color="primary">
                                {'Editar'} <Icon className={classes.rightIcon}>edit</Icon>
                            </Button>]}
                        />
                    </Grid>
                </Grid>

                {dato && (
                    <div style={{ marginTop: '20px' }}>
                        <GeneralCard>
                            <Typography variant="h5" component="h2">
                                Chofer Nº
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
                )}
            </div>
        </div >
    );
}

DetalleChofer.propTypes = {
    // loginData: PropTypes.object.isRequired,
};

const mapUserStateToProps = state => ({
    loginData: state.login.loginData,
});

const DetalleChoferMapped = connect(
    mapUserStateToProps
)(DetalleChofer);

export default DetalleChoferMapped;
