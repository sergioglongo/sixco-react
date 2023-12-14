import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
}));

function ControlledSelectbox() {
  const {
    classes
  } = useStyles();
  const [dataState, setDataState] = useState({
    open: false,
    age: '',
  });
  const [openRemotely, setOpenRemotely] = useState(false);

  const handleChange = name => event => {
    setDataState({
      ...dataState,
      [name]: Number(event.target.value)
    });
  };

  const handleChangeControll = event => {
    setDataState({
      ...dataState,
      [event.target.name]: event.target.value
    });
  };

  const handleClickOpen = () => {
    setDataState({
      ...dataState,
      open: true
    });
  };

  const handleClickOpenRemot = () => {
    setOpenRemotely(true);
  };

  const handleClose = () => {
    setDataState({
      ...dataState,
      open: false
    });
  };

  const handleCloseRemot = () => {
    setOpenRemotely(false);
  };

  const handleOpenRemot = () => {
    setOpenRemotely(true);
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
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>With a Dialog</Typography>
        <Typography className={classes.divider}>While its not encouraged by the Material Design specification, you can use a select inside a dialog.</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={handleClickOpen}>Open select dialog</Button>
          <Dialog
            disableEscapeKeyDown
            open={dataState.open}
            onClose={handleClose}
          >
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    variant="standard"
                    native
                    value={dataState.age}
                    onChange={handleChange('age')}
                    input={<Input id="age-native-simple" />}>
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Age</InputLabel>
                  <Select
                    variant="standard"
                    value={dataState.age}
                    onChange={handleChange('age')}
                    input={<Input id="age-simple" />}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Controlled open Select</Typography>
        <div>
          <form autoComplete="off">
            <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickOpenRemot}>
              Open the select
            </Button>
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel htmlFor="controlled-open-select">Age</InputLabel>
              <Select
                variant="standard"
                open={openRemotely}
                onClose={handleCloseRemot}
                onOpen={handleOpenRemot}
                value={dataState.age}
                onChange={handleChangeControll}
                inputProps={{
                  name: 'age',
                  id: 'controlled-open-select',
                }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default ControlledSelectbox;
