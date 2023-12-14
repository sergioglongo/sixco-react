import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import SwipeableViews from 'react18-swipeable-views';
import imgApi from 'dan-api/images/photos';

const tutorialSteps = [
  {
    label: 'How to be happy :)',
    imgPath: imgApi[45],
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: imgApi[33],
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: imgApi[14],
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: imgApi[9],
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: imgApi[44],
  },
];

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    flexGrow: 1,
  },
  header: {
    textAlign: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    margin: '0 auto'
  },
  figure: {
    maxWidth: 400,
    overflow: 'hidden',
    margin: '0 auto'
  },
  mobileStepper: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    margin: '0 auto',
    textAlign: 'center'
  }
}));

function StepperCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepSwipe, setActiveStepSwipe] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNextSwipe = () => {
    setActiveStepSwipe(activeStepSwipe + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(activeStepSwipe - 1);
  };

  const handleStepChangeSwipe = step => {
    setActiveStepSwipe(step);
  };

  const theme = useTheme();
  const {
    classes
  } = useStyles();

  const maxSteps = tutorialSteps.length;
  const maxStepsSwipe = tutorialSteps.length;

  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center" direction="column" md={6}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={(
            <Button size="small" onClick={() => handleNext()} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={() => handleBack()} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Grid>
      <Grid item container justifyContent="center" direction="column" md={6}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStepSwipe].label}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStepSwipe}
          onChangeIndex={handleStepChangeSwipe}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div className={classes.figure} key={index.toString()}>
              <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="text"
          steps={maxStepsSwipe}
          position="static"
          activeStep={activeStepSwipe}
          className={classes.mobileStepper}
          nextButton={(
            <Button size="small" onClick={() => handleNextSwipe()} disabled={activeStepSwipe === maxStepsSwipe - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={() => handleBackSwipe()} disabled={activeStepSwipe === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
}

export default StepperCarousel;
