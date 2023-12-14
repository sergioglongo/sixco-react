import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import AddCircle from '@mui/icons-material/AddCircle';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Remove from '@mui/icons-material/Remove';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { Rating } from 'dan-components';
import { green, red, indigo as blue } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  field: {
    margin: `${theme.spacing(3)} 0`,
  },
  chip: {
    margin: theme.spacing(1),
    fontWeight: 'bold',
    color: '#FFF',
    background: red[300]
  },
  blue: {
    color: blue[300]
  },
  green: {
    color: green[500]
  },
  red: {
    color: red[300]
  },
  small: {
    '& button': {
      width: 72,
      height: 72,
      padding: 16
    },
    '& svg': {
      width: 36,
      height: 36
    }
  },
  medium: {
    '& button': {
      width: 96,
      height: 96,
      padding: 24
    },
    '& svg': {
      width: 48,
      height: 48
    }
  },
  large: {
    '& button': {
      width: 120,
      height: 120,
      padding: 30
    },
    '& svg': {
      width: 60,
      height: 60
    }
  }
}));

function RatingCustom() {
  const [rating, setRating] = useState(3);

  const handleChange = value => {
    setRating(value);
  };

  const {
    classes
  } = useStyles();
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-around"
      direction="row"
      spacing={2}
    >
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Ratting Custom Icon</Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <Rating
            value={rating}
            max={5}
            onChange={(value) => handleChange(value)}
            iconFilled={<ThumbUp className={classes.blue} />}
            iconHovered={<ThumbUp className={classes.blue} />}
            iconNormal={<Remove className={classes.red} />}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Show Counter</Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="row"
        >
          <FormControl variant="standard" className={classes.formControl}>
            <Rating
              value={rating}
              max={5}
              onChange={(value) => handleChange(value)}
              iconFilled={<AddCircle className={classes.green} />}
              iconHovered={<AddCircleOutline className={classes.green} />}
              iconNormal={<AddCircleOutline className={classes.green} />}
              tooltipRenderer={(index) => <span>{ index }</span>}
              tooltipPosition="bottom-center"
            />
          </FormControl>
          <Chip label={rating} className={classes.chip} />
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Ratting Custom Size</Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <div className={classes.small}>
            <Rating
              value={rating}
              max={5}
              onChange={(value) => handleChange(value)}
            />
          </div>
          <div className={classes.medium}>
            <Rating
              value={rating}
              max={5}
              onChange={(value) => handleChange(value)}
            />
          </div>
          <div className={classes.large}>
            <Rating
              value={rating}
              max={5}
              onChange={(value) => handleChange(value)}
            />
          </div>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default RatingCustom;
