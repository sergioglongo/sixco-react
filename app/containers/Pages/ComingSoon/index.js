import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo-sixco.svg';
import useStyles from 'dan-components/Forms/user-jss';

function ComingSoon(props) {
  const { deco } = props;
  const { classes, cx } = useStyles();
  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const title = brand.name + ' - Próximamente';
  const description = brand.desc;
  return (
    <div className={classes.rootFull}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.fullFormWrap}>
          <Paper
            className={
              cx(
                classes.fullWrap,
                deco && classes.petal,
                classes.centerV
              )
            }
          >
            <div className={classes.brandCenter}>
              {/* <div className={classes.brand}> */}
                <img src={logo} alt={brand.name} width={'180px'} height={'60px'}/>
                {/* {brand.desc} */}
              {/* </div> */}
            </div>
            <Typography variant="h2" className={classes.titleGradient} gutterBottom>
              Próximamente
            </Typography>
            <Typography variant="h5" gutterBottom align="center" className={classes.text}>
              Estamos trabajando en esta sección
            </Typography>
            <section className={classes.pageFormWrap}>
              <div className={cx(classes.notifyForm, classes.centerAdornment)}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Email"
                    className={classes.textField}
                    value={email}
                    onChange={handleChange}
                    margin="normal" />
                </FormControl>
                <aside>
                  <Button variant="contained" color="primary" type="submit">
                    Sugerencias
                  </Button>
                </aside>
              </div>
            </section>
          </Paper>
        </div>
      </div>
    </div>
  );
}

ComingSoon.propTypes = {
  deco: PropTypes.bool.isRequired,
};

const FormInit = connect(
  state => ({
    ...state,
    deco: state.ui.decoration
  }),
)(ComingSoon);

export default FormInit;
