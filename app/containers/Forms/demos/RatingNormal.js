import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Rating } from 'dan-components';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  field: {
    margin: `${theme.spacing(3)} 5px`,
  },
}));

function RatingNormal() {
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
        md={4}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Ratting Normal</Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <Rating
            value={rating}
            max={5}
            onChange={(value) => handleChange(value)}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        md={4}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Read Only</Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <Rating
            value={2}
            max={5}
            readOnly
          />
        </FormControl>
      </Grid>
      <Grid
        item
        md={4}
        className={classes.demo}
      >
        <Typography variant="button" component="p">Disabled</Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <Rating
            value={4}
            max={5}
            disabled
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default RatingNormal;
