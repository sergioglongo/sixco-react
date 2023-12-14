import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  input: {
    margin: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function TextFields() {
  const [name, setName] = useState('Composed TextField');
  const {
    classes
  } = useStyles();

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={3}
    >
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Textfield Components</Typography>
        <Typography variant="caption" component="p" className={classes.divider}>TextField is composed of smaller components that you can leverage directly to significantly customize your form inputs.</Typography>
        <div className={classes.container}>
          <FormControl variant="standard" className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input id="name-simple" value={name} onChange={handleChange} />
          </FormControl>
          <FormControl
            variant="standard"
            className={classes.formControl}
            aria-describedby="name-helper-text">
            <InputLabel htmlFor="name-helper">Name</InputLabel>
            <Input id="name-helper" value={name} onChange={handleChange} />
            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
          </FormControl>
          <FormControl variant="standard" className={classes.formControl} disabled>
            <InputLabel htmlFor="name-disabled">Name</InputLabel>
            <Input id="name-disabled" value={name} onChange={handleChange} />
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl
            variant="standard"
            className={classes.formControl}
            error
            aria-describedby="name-error-text">
            <InputLabel htmlFor="name-error">Name</InputLabel>
            <Input id="name-error" value={name} onChange={handleChange} />
            <FormHelperText id="name-error-text">Error</FormHelperText>
          </FormControl>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Input State</Typography>
        <div className={classes.container}>
          <Input
            defaultValue="Hello world"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            placeholder="Placeholder"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            value="Disabled"
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            defaultValue="Error"
            className={classes.input}
            error
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default TextFields;
