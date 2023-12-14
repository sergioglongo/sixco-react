import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const useStyles = makeStyles()(theme => ({
  root: {
    width: 300 + 24 * 2,
    padding: 24,
  },
  margin: {
    height: theme.spacing(3),
  },
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function valuetext(value) {
  return `${value}°C`;
}

const marksDegree = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function AdvanceRange() {
  const {
    classes
  } = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-around"
      direction="row"
      spacing={3}
    >
      <Grid
        item
        md={5}
        className={classes.demo}
      >
        <Box sx={{ width: 320 }}>
          <Typography gutterBottom>iOS</Typography>
          <IOSSlider
            aria-label="ios slider"
            defaultValue={60}
            marks={marks}
            valueLabelDisplay="on"
          />
          <Box sx={{ m: 3 }} />
          <Typography gutterBottom>pretto.fr</Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
          <Box sx={{ m: 3 }} />
          <Typography gutterBottom>Tooltip value label</Typography>
          <Slider
            valueLabelDisplay="auto"
            slots={{
              valueLabel: ValueLabelComponent,
            }}
            aria-label="custom thumb label"
            defaultValue={20}
          />
          <Box sx={{ m: 3 }} />
          <Typography gutterBottom>Airbnb</Typography>
          <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[20, 40]}
          />
        </Box>
      </Grid>
      <Grid
        item
        md={5}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>With input field</Typography>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <VolumeUp />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
        <br />
        <Typography variant="button" className={classes.divider}>Vertical sliders</Typography>
        <div>
          <Typography id="vertical-slider" gutterBottom>
            Temperature
          </Typography>
          <div style={{ height: 300 }}>
            <Slider
              orientation="vertical"
              getAriaValueText={valuetext}
              defaultValue={30}
              aria-labelledby="vertical-slider"
            />
            <Slider
              disabled
              orientation="vertical"
              getAriaValueText={valuetext}
              defaultValue={30}
              aria-labelledby="vertical-slider"
            />
            <Slider
              orientation="vertical"
              defaultValue={[20, 37]}
              aria-labelledby="vertical-slider"
              getAriaValueText={valuetext}
              marks={marksDegree}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
