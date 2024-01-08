import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import { RegisterFormV2 } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import intro from 'dan-images/intro-sixco-large.mp4';
import introroute from 'dan-images/footer-deco.svg';
import { Hidden } from '@mui/material';
import logo from 'dan-images/logo-sixco-only.svg';

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
      console.log(`You submitted:`, values);
      // window.location.href = '/app';
    }, 500); // simulate server latency
  };

  const title = brand.name + ' - App';
  const description = brand.desc;
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.rootFull}>
      <div className={classes.containerSide}>
        <Hidden mdDown>
          <div className={`${classes.opening} ${classes.openingVideo}`} >
            <video autoPlay loop muted className={classes.video}>
              <source src={intro} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            {/* <img src={introroute} alt={brand.name} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} /> */}
            {/* <div style={{ position: 'absolute', width: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}> */}
            <div style={{ position: 'absolute', width: '100%', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
              <div style={{ textAlign: 'start', display: 'inline-block' }}>
                <div style={{ display: 'flex', height: '60px', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                    <Typography style={{ fontSize: '36px' }}>
                      Somos
                    </Typography>
                  </div>
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt={brand.name} height={'30px'} />
                  </div>
                </div>
                <Typography style={{ fontSize: '36px', fontWeight: 'medium', height: '60px' }}>
                  EMPRESA DE LOGÍSTICA
                </Typography>
                <Typography style={{ fontSize: '36px', fontWeight: 'bold', height: '40px' }}>
                  INTEGRAL
                </Typography>
              </div>
            </div>

          </div>
        </Hidden>
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
