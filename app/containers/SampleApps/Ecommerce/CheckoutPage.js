import React, { useState, Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  AddressForm,
  PaymentForm,
  Review,
  SideReview
} from 'dan-components';

const useStyles = makeStyles()((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  stepper: {
    padding: `${theme.spacing(3)} 0 ${theme.spacing(5)}`,
  },
  finishMessage: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    '& h4': {
      color: theme.palette.primary.main,
      '& span': {
        textAlign: 'center',
        display: 'block',
        '& i': {
          fontSize: 120
        }
      }
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const smDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const {
    classes
  } = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {activeStep === steps.length ? (
            <div className={classes.finishMessage}>
              <Typography variant="h4" gutterBottom>
                <span>
                  <i className="ion-ios-checkmark-outline" />
                </span>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is&nbsp;
                <strong>#2001539</strong>
                .&nbsp;We have emailed your order confirmation, and will
                send you an update when your order has shipped.
              </Typography>
              <Button variant="contained" color="primary" href="/app/pages/ecommerce" className={classes.button}>
                Shoping Again
              </Button>
            </div>
          ) : (
            <Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel={smDown}>
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {getStepContent(activeStep)}
                </Grid>
                <Grid item xs={12} md={5}>
                  <SideReview />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  size="large"
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </div>
            </Fragment>
          )}
        </Paper>
      </main>
    </Fragment>
  );
}

export default Checkout;
