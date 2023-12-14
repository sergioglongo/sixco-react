import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react18-swipeable-views';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import imgApi from 'dan-api/images/photos';
import NewsCard from '../CardPaper/NewsCard';
import useStyles from './widget-jss';

const slideData = [
  {
    label: 'How to be success :)',
    imgPath: imgApi[11],
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  },
  {
    label: 'Work with something that you like, like…',
    imgPath: imgApi[31],
    desc: 'Pellentesque ac bibendum tortor, vel blandit nulla.'
  },
  {
    label: 'Keep your schedule in the right time',
    imgPath: imgApi[38],
    desc: 'Aenean facilisis vitae purus facilisis semper.'
  },
  {
    label: 'Travel everytime that you have a chance',
    imgPath: imgApi[10],
    desc: 'Curabitur egestas consequat lorem, vel fermentum augue porta id.'
  },
  {
    label: 'And contribute to Material-UI :D',
    imgPath: imgApi[40],
    desc: 'Integer orci justo, fringilla at faucibus vel, pulvinar in eros.'
  },
];

function NewsWidget() {
  const [activeStepSwipe, setActiveStepSwipe] = useState(0);

  const handleNextSwipe = () => {
    setActiveStepSwipe(step => step + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(step => step - 1);
  };

  const handleStepChangeSwipe = step => {
    setActiveStepSwipe(step);
  };

  const theme = useTheme();
  const { classes } = useStyles();

  const maxStepsSwipe = slideData.length;
  return (
    <div>
      <Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStepSwipe}
          onChangeIndex={handleStepChangeSwipe}
          enableMouseEvents
          className={classes.sliderWrap}
        >
          {slideData.map((slide, index) => (
            <div className={classes.figure} key={index.toString()}>
              <NewsCard
                image={slide.imgPath}
                title="slide.label"
                className={classes.sliderContent}
              >
                <Typography gutterBottom className={classes.title} variant="h6" component="h2">
                  {slide.label}
                </Typography>
                <Typography component="p">
                  {slide.desc}
                </Typography>
              </NewsCard>
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxStepsSwipe}
          position="static"
          activeStep={activeStepSwipe}
          className={classes.mobileStepper}
          nextButton={(
            <Button size="small" onClick={handleNextSwipe} disabled={activeStepSwipe === maxStepsSwipe - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={handleBackSwipe} disabled={activeStepSwipe === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Paper>
    </div>
  );
}

export default NewsWidget;
