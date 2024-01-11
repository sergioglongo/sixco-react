import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Box, FormHelperText } from '@mui/material';

/* Textfield */
export const TextFieldRedux = ({ meta: { touched, error }, input, ...rest }) => (
  <TextField
    variant="standard"
    {...rest}
    {...input}
    error={touched && Boolean(error)} />
);

TextFieldRedux.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
};

TextFieldRedux.defaultProps = {
  meta: null,
};
/* End */

/* TextfieldError */
export const TextFieldErrorRedux = ({ meta: { touched, error }, input, ...rest }) => (
  <Box fullwidth>
    <TextField
      variant="standard"
      fullWidth
      {...rest}
      {...input}
      error={touched && error}
    />
    {touched && error && error != 'Required' && <FormHelperText style={{ position: 'absolute', bottom: '-22px', color: '#d32f2f' }}>{error}</FormHelperText>}
  </Box>
);

TextFieldErrorRedux.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
};

TextFieldErrorRedux.defaultProps = {
  meta: null,
};
/* End */

/* Select */
export const SelectRedux = ({ input, children, ...rest }) => (
  <Select variant="standard" {...input} {...rest}>
    {children}
  </Select>
);

SelectRedux.propTypes = {
  input: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
/* End */

/* Checkbox */
export const CheckboxRedux = ({ input, ...rest }) => (
  <Checkbox
    checked={input.value === '' ? false : input.value}
    {...input}
    {...rest}
  />
);

CheckboxRedux.propTypes = {
  input: PropTypes.object.isRequired,
};
/* End */

/* Switch */
export const SwitchRedux = ({ input, ...rest }) => (
  <Switch
    checked={input.value === '' ? false : input.value}
    {...input}
    {...rest}
  />
);

SwitchRedux.propTypes = {
  input: PropTypes.object.isRequired,
};
/* End */
