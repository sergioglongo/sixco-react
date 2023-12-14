import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    padding: theme.spacing(1)
  }
}));

function SelectVariant() {
  const {
    classes
  } = useStyles();
  const [dataState, setDataState] = useState({
    age: '',
  });

  useEffect(() => {
    setDataState({
      ...dataState,
    });
  }, []);

  const handleChange = event => {
    setDataState({
      ...dataState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.label}>Material Selection</Typography>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                name="age"
                value={dataState.age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
              <Select
                name="age"
                variant="filled"
                value={dataState.age}
                onChange={handleChange}
                input={<FilledInput name="age" id="filled-age-simple" />}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.label}>Native Selection</Typography>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Age
            </InputLabel>
            <Select
              name="age"
              id="outlined-age-native-simple"
              variant="outlined"
              native
              label="Age"
              value={dataState.age}
              onChange={handleChange}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
              name="age"
              variant="standard"
              native
              value={dataState.age}
              onChange={handleChange}
              input={<FilledInput name="age" id="filled-age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default SelectVariant;
