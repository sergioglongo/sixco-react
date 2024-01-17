import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import useStyles from './reset-jss';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
  });
  
function RegisterFormFinish(props) {
    const { classes, cx } = useStyles();
    const {
        deco,
    } = props;

    return (
        <Paper className={cx(classes.sideWrap, deco && classes.petal)}>
            <div >
                <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name}
                        style={{
                            filter: 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2))',
                            width: 200, height: 80
                        }}
                    />
                </NavLink>
            </div>
            <Typography variant="h4" className={classes.title} gutterBottom>
                ¡Gracias por registrarte!
            </Typography>
            <Typography
                variant="h6"
                component="p"
                className={classes.subpening}
            >
                La información será evaluada por un administrador.
            </Typography>
            <Typography component="small" gutterBottom>
                Recibirás un email cuando tu registro sea aprobado.
            </Typography>
            <section className={classes.formWrap}>
                <div className={classes.btnArea}>
                    <Button
                        size="small"
                        component={LinkBtn}
                        to="/auth/login"
                        className={classes.buttonLink}
                    >
                        Ir al inicio
                    </Button>
                </div>
            </section>


        </Paper>
    );
}

RegisterFormFinish.propTypes = {
    deco: PropTypes.bool.isRequired,
};

const FormMapped = connect(
    state => ({
        deco: state.ui.decoration
    }),
)(RegisterFormFinish);

export default FormMapped;
