import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Type from 'dan-styles/Typography.scss';
import { SourceReader, PapperBlock } from 'dan-components';
import useStyles from './Usuarios-jss';
// import TablaConsultas from './partials/Tabla';
// import { getListadoConsultas } from '../../../utils/ApiClient';
// import StyledNotif from '../../UiElements/Notifications';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import SixcoIcon from '../../../api/icons/sixco-icons';
import TablaUsuarios from './partials/TablaUsuarios';
import { listContacts } from '../../../api/apiclient/ApiClient';
import { bindActionCreators } from 'redux';
import { changeUserAuthenticatedAction } from '../../../redux/actions/Users';
import { CircularProgress } from '@mui/material';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Usuarios(props) {
  const { loginData, setIsAuthorizated } = props;
  const { classes, cx } = useStyles();
  const [loading, setLoading] = useState(false);
  const [datanotif, setDatanotif] = useState({ open: false, variant: 'error', message: '' });
  const [listusuarios, setListconsultas] = useState([]);
  const title = brand.name + ' - Usuarios';
  const description = brand.desc;

  useEffect(() => {
    const data = {
      session: loginData.session,
    }
    setLoading(true);
    listContacts(data)
      .then(response => {
        if (typeof response != 'undefined' && response.records) {
          console.log(response.records);
            setListconsultas(response.records)
        } else {
          if (response.success == false && typeof response.error != 'undefined' && response.error.message == 'Login required') {
            setIsAuthorizated(false);
            console.error("message error", response.error.message);
          }
        }
      })
      .finally(() => setLoading(false));
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
            <PapperBlock title="Listado de Usuarios" noMargin whiteBg icon="ion-ios-people"
              desc="Usuarios registrados."
            >
              <div>
                {loading
                  ? 
                  <div className={classes.content}>
                    <CircularProgress className={classes.circularProgress} size={90} thickness={1} color="secondary" />
                  </div>
                  :
                  listusuarios.length == 0 ? (
                    <Typography variant="h6" className={Type.textCenter}>
                      Sin usuarios para mostrar.<br /><br />
                      <div className={classes.btnArea}>
                        <Button variant="contained" component={LinkBtn} to="/app/choferes/nuevo-chofer" className={classes.button} color="primary">
                          Nuevo usuario <Icon className={classes.rightIcon}>add</Icon>
                        </Button>
                      </div>
                    </Typography>
                  ) : (
                    <TablaUsuarios lista={listusuarios} />
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

Usuarios.propTypes = {
  loginData: PropTypes.object.isRequired,
  setIsAuthorizated: PropTypes.func.isRequired,
};

const mapUserStateToProps = state => ({
  loginData: state.login.loginData,
});

const constDispatchToProps = dispatch => ({
  setIsAuthorizated: bindActionCreators(changeUserAuthenticatedAction, dispatch),
});


const UsuariosMapped = connect(
  mapUserStateToProps,
  constDispatchToProps
)(Usuarios);

export default UsuariosMapped;
