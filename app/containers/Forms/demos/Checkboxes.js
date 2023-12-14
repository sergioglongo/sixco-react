import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import { green } from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  field: {
    margin: `${theme.spacing(3)} 5px`,
  },
  root: {
    color: green[600],
    [`&.${classes.checked}`]: {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
}));

function Checkboxes() {
  const {
    classes
  } = useStyles();
  const [inputState, setInputState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = name => event => {
    setInputState({
      ...inputState,
      [name]: event.target.checked
    });
  };

  const {
    checkedA,
    checkedB,
    checkedF,
    gilad,
    jason,
    antoine,
    checkedG
  } = inputState;

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
        md={3}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Basic usage</Typography>
        <div>
          <Checkbox
            checked={checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA"
          />
          <Checkbox
            checked={checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
          <Checkbox value="checkedC" />
          <Checkbox disabled value="checkedD" />
          <Checkbox disabled checked value="checkedE" />
          <Checkbox
            checked={checkedF}
            onChange={handleChange('checkedF')}
            value="checkedF"
            indeterminate
          />
          <Checkbox defaultChecked color="default" value="checkedG" />
        </div>
      </Grid>
      <Grid
        item
        md={5}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Checkbox with label</Typography>
        <Typography className={classes.divider}>Checkbox can also be used with a label description thanks to the FormControlLabel component.</Typography>
        <div>
          <FormGroup row>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedA}
                  onChange={handleChange('checkedA')}
                  value="checkedA"
                />
              )}
              label="Secondary"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedB}
                  onChange={handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              )}
              label="Primary"
            />
            <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
            <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
            <FormControlLabel
              disabled
              control={<Checkbox checked value="checkedE" />}
              label="Disabled"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedF}
                  onChange={handleChange('checkedF')}
                  value="checkedF"
                  indeterminate
                />
              )}
              label="Indeterminate"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedG}
                  onChange={handleChange('checkedG')}
                  value="checkedG"
                  classes={{
                    root: classes.root,
                    checked: classes.checked,
                  }}
                />
              )}
              label="Custom color"
            />
            <FormControlLabel
              control={
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />
              }
              label="Custom icon"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  className={classes.size}
                  icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
                  checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
                  value="checkedI"
                />
              )}
              label="Custom size"
            />
          </FormGroup>
        </div>
      </Grid>
      <Grid
        item
        md={4}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Checkbox in Form Group</Typography>
        <Typography className={classes.divider}>FormGroup is a helpful wrapper used to group selection controls components that provides an easier API.</Typography>
        <div>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange('gilad')}
                    value="gilad"
                  />
                )}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={jason}
                    onChange={handleChange('jason')}
                    value="jason"
                  />
                )}
                label="Jason Killian"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange('antoine')}
                    value="antoine"
                  />
                )}
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
}

export default Checkboxes;
