import React, { Fragment, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

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
}));

function NativeSelectbox() {
  const {
    classes
  } = useStyles();
  const [dataState, setDataState] = useState({
    age: '',
    name: 'hai'
  });

  const handleChange = name => event => {
    setDataState({
      ...dataState,
      [name]: event.target.value
    });
  };

  return (
    <Fragment>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          variant="standard"
          native
          value={dataState.age}
          onChange={handleChange('age')}
          inputProps={{
            id: 'age-native-simple',
          }}>
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <Select
          variant="standard"
          native
          value={dataState.age}
          onChange={handleChange('age')}
          input={<Input id="age-native-helper" />}>
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          variant="standard"
          native
          value={dataState.age}
          onChange={handleChange('age')}
          className={classes.selectEmpty}>
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
        <Select
          variant="standard"
          native
          value={dataState.name}
          onChange={handleChange('name')}
          input={<Input id="name-native-disabled" />}>
          <option value="" />
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl} error>
        <InputLabel htmlFor="name-native-error">Name</InputLabel>
        <Select
          variant="standard"
          native
          value={dataState.name}
          onChange={handleChange('name')}
          input={<Input id="name-native-error" />}>
          <option value="" />
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel htmlFor="name-input2">Name</InputLabel>
        <Input id="name-input2" />
        <FormHelperText>Alignment with an input</FormHelperText>
      </FormControl>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
        <Select
          variant="standard"
          native
          defaultValue={30}
          input={<Input id="uncontrolled-native" />}>
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControl>
    </Fragment>
  );
}

export default NativeSelectbox;
