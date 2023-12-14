import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 240,
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  picker: {
    margin: `${theme.spacing(3)} 5px`,
  }
}));

function DateInput() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { classes } = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      direction="row"
    >
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Basic usage</Typography>
        <div className={classes.picker}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Date desktop"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} variant="standard" />}
            />
          </LocalizationProvider>
        </div>
        <div className={classes.picker}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Date mobile"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} variant="standard" />}
            />
          </LocalizationProvider>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Native pickers</Typography>
        <div className={classes.picker}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            variant="standard"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default DateInput;
