import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      margin: '0 auto'
    },
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    margin: `${theme.spacing(4)} 0 ${theme.spacing(2)}`,
  },
}));

function MobileSteppers() {
  const [activeStepDots, setDots] = useState(0);
  const [activeStepLine, setLine] = useState(0);

  const handleNextDots = () => {
    setDots(activeStepDots + 1);
  };

  const handleBackDots = () => {
    setDots(activeStepDots - 1);
  };

  const handleNextLine = () => {
    setLine(activeStepLine + 1);
  };

  const handleBackLine = () => {
    setLine(activeStepLine - 1);
  };

  const theme = useTheme();
  const {
    classes
  } = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center" direction="column" md={6}>
        <Typography variant="button" className={classes.title}>
          Mobile Stepper - Dots
        </Typography>
        <MobileStepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStepDots}
          className={classes.root}
          nextButton={(
            <Button size="small" onClick={() => handleNextDots()} disabled={activeStepDots === 5}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={() => handleBackDots()} disabled={activeStepDots === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Grid>
      <Grid item container justifyContent="center" direction="column" md={6}>
        <Typography variant="button" className={classes.title}>
          Mobile Stepper - Progress
        </Typography>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={activeStepLine}
          className={classes.root}
          nextButton={(
            <Button size="small" onClick={() => handleNextLine()} disabled={activeStepLine === 5}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={() => handleBackLine()} disabled={activeStepLine === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
}

export default MobileSteppers;
