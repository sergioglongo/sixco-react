import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import { RegisterFormV2 } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import { Hidden } from '@mui/material';
import logo from 'dan-images/logo-sixco.svg';

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
      <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Helmet>
            <div className={classes.containerSide}>
                <Hidden smDown>
                    <div className={classes.opening}>
                    <img style={{ backgroundColor: 'white', width: 300 }} src={logo} alt={brand.name} />

                    </div>
                </Hidden>
                <div className={classes.sideFormWrap}>
                    <RegisterFormV2
                        onSubmit={(values) => submitForm(values)}
                        loading={loading}
                        setLoading={setLoading}
                    />
                    {/* <StyledNotif
                        datanotif={datanotif}
                        setDatanotif={setDatanotif}
                    /> */}
                </div>
            </div>
    </div>
  );
}

export default RegisterV2;
