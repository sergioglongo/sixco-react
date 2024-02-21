import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import brand from 'dan-api/dummy/brand';
import { NavLink } from 'react-router-dom';
import {
    PapperBlock, GeneralCard
} from 'dan-components';
import PropTypes from 'prop-types';
import StyledNotif from '../../UiElements/demos/Notification/StyledNotif';
import { Button, Divider, Grid, Icon, Typography } from '@mui/material';
// import Comentarios from './partials/Comentarios';
import useStyles from './choferes-jss';
import { getChoferDetail } from '../../../api/apiclient/ApiClient';

function DetalleChofer(props) {
    const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
    const title = brand.name + ' - Chofer - Detalle';
    const description = brand.desc;
    const { recordid } = props.match.params;
    const { loginData } = props;
    const { classes, cx } = useStyles();
    const [chofer, setChofer] = useState(null);

    const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
        return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
    });

    useEffect(() => {
        const data = {
            session: loginData.session,
            accountid: recordid
        }
        getChoferDetail(data).then((response) => {
            if (response.success == false && typeof response.error != 'undefined') {
                if (error.message == 'Login required') {
                    logout();
                } else {
                    console.error("message error", response.error.message);
                }
            } else {
                setChofer(response[0]);
                console.log("profile detail", response[0]);
            }
        }).catch((err) => {
            console.error("Error profile detail", err)
        });
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

                {chofer && (
                    <div style={{ marginTop: '20px' }}>
                        <GeneralCard>
                            <Typography variant="h5" component="h2">
                                Cuenta
                                {' '}
                                {chofer.accountname}
                            </Typography>
                            <br />
                            <Typography className={classes.title} color="textSecondary">
                                Identificación
                            </Typography>
                            <Typography component="p">{chofer.siccode}</Typography>
                            <br />
                            <Typography className={classes.title} color="textSecondary">
                                Estado
                            </Typography>
                            <Typography component="p">{chofer.estado_cuenta}</Typography>
                            <br />
                        </GeneralCard>
                    </div>
                )}
            </div>
        </div >
    );
}

DetalleChofer.propTypes = {
    loginData: PropTypes.object.isRequired,
};

const mapUserStateToProps = state => ({
    loginData: state.login.loginData,
});

const DetalleChoferMapped = connect(
    mapUserStateToProps
)(DetalleChofer);

export default DetalleChoferMapped;
