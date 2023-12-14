import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  picker: {
    margin: `${theme.spacing(3)} 5px`,
  }
}));

function TimeInput() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      spacing={3}
    >
      <Grid
        item
        md={6}
        className={classes.demo}
      >
        <Typography variant="button" className={classes.divider}>Basic usage</Typography>
        <Typography className={classes.divider}>
          A time picker should adjusts to a user’s preferred time setting, i.e. the 12-hour or 24-hour format.
        </Typography>
        <div className={classes.picker}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Time"
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
        <Typography className={classes.divider}>
          Native input controls support by browsers.
        </Typography>
        <div className={classes.picker}>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default TimeInput;
