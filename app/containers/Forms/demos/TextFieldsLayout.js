import React from 'react';
import { makeStyles, withStyles } from 'tss-react/mui';
import {
  alpha, createTheme, ThemeProvider
} from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';

const CssTextField = withStyles(TextField, () => ({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
}));

const BootstrapInput = withStyles(InputBase, (theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '24px 12px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const useStylesReddit = makeStyles()((theme, _params, classes) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    [`&.${classes.focused}`]: {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const { classes } = useStylesReddit();

  return (
    <TextField
      variant="standard"
      InputProps={{ classes, disableUnderline: true }}
      {...props} />
  );
}

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  marginBootstrap: {
    margin: theme.spacing(-1, 1, 1)
  }
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedInputs() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <CssTextField
        id="custom-css-standard-input"
        label="Custom CSS"
      />
      <CssTextField
        className={classes.margin}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <ThemeProvider theme={theme}>
        <TextField
          variant="standard"
          className={classes.margin}
          label="ThemeProvider"
          id="mui-theme-provider-standard-input" />
        <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
      <FormControl variant="standard" className={classes.marginBootstrap}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
      <RedditTextField
        label="Reddit"
        className={classes.margin}
        defaultValue="react-reddit"
        variant="filled"
        id="reddit-input"
      />
      <InputBase
        className={classes.margin}
        defaultValue="Naked input"
        inputProps={{ 'aria-label': 'naked' }}
      />
    </div>
  );
}
