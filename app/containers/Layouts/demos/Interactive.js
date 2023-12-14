import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    height: '100%',
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
  },
  control: {
    padding: theme.spacing(2),
  },
  fieldset: {
    '& label + div': {
      alignItems: 'flex-start'
    }
  }
}));

function InteractiveGrid() {
  const [gridState, setGridState] = useState({
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  });

  const handleChange = (e, key) => {
    setGridState({
      ...gridState,
      [key]: e.target.value,
    });
  };

  const {
    classes
  } = useStyles();
  const { alignItems, direction, justify } = gridState;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.demo}
          alignItems={alignItems}
          direction={direction}
          justifyContent={justify}
        >
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper
                className={classes.paper}
                style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
              >
                {`Cell ${value + 1}`}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item xs={6} sm={4}>
              <FormControl variant="standard" component="fieldset" className={classes.fieldset}>
                <FormLabel>direction</FormLabel>
                <RadioGroup
                  name="direction"
                  aria-label="direction"
                  value={direction}
                  onChange={(e) => handleChange(e, 'direction')}
                >
                  <FormControlLabel value="row" control={<Radio />} label="row" />
                  <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                  <FormControlLabel value="column" control={<Radio />} label="column" />
                  <FormControlLabel
                    value="column-reverse"
                    control={<Radio />}
                    label="column-reverse"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl variant="standard" component="fieldset" className={classes.fieldset}>
                <FormLabel>justify</FormLabel>
                <RadioGroup
                  name="justify"
                  aria-label="justify"
                  value={justify}
                  onChange={(e) => handleChange(e, 'justify')}
                >
                  <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                  <FormControlLabel value="center" control={<Radio />} label="center" />
                  <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                  <FormControlLabel
                    value="space-between"
                    control={<Radio />}
                    label="space-between"
                  />
                  <FormControlLabel
                    value="space-around"
                    control={<Radio />}
                    label="space-around"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl variant="standard" component="fieldset" className={classes.fieldset}>
                <FormLabel>alignItems</FormLabel>
                <RadioGroup
                  name="alignItems"
                  aria-label="alignItems"
                  value={alignItems}
                  onChange={(e) => handleChange(e, 'alignItems')}
                >
                  <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                  <FormControlLabel value="center" control={<Radio />} label="center" />
                  <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                  <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                  <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default InteractiveGrid;
