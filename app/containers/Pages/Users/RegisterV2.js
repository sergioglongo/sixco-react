import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import { RegisterFormV2 } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import intro from 'dan-images/intro-sixco-large.mp4';

function RegisterV2() {
  const [valueForm, setValueForm] = useState(null);
  const [datanotif, setDatanotif] = useState({
    open: false,
    variant: "error",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submitForm = values => {
    setTimeout(() => {
      setValueForm(values);
      console.log(`You submitted:\n\n${valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  };

  const title = brand.name + ' - App';
  const description = brand.desc;
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.rootFull}>
      <div className={classes.containerSide}>
        <div className={`${classes.opening} ${classes.openingVideo}`} >
          <video autoPlay loop muted className={classes.video}>
            <source src={intro} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div style={{ position: 'absolute', width: '100%', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            <div style={{ textAlign: 'start', display: 'inline-block' }}>
              <Typography style={{ fontSize: '36px', height: '50px' }}>
                Somos Sixco
              </Typography>
              <Typography style={{ fontSize: '36px', fontWeight: 'medium', height: '50px' }}>
                EMPRESA DE LOGÍSTICA
              </Typography>
              <Typography style={{ fontSize: '36px', fontWeight: 'bold', height: '40px' }}>
                INTEGRAL
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.sideFormWrap}>
          <RegisterFormV2
            onSubmit={(values) => submitForm(values)}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterV2;
