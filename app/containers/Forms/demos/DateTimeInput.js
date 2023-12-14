import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

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

function DateTimeInput() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { classes } = useStyles();
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
        <div className={classes.picker}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              value={selectedDate}
              onChange={handleDateChange}
              label="DateTimePicker"
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
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            variant="standard"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default DateTimeInput;
