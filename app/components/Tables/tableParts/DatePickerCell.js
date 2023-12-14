import React, { useState, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TableCell from '@mui/material/TableCell';
import css from 'dan-styles/Table.scss';

const useStyles = makeStyles()(() => ({
  datepicker: {
    '& button': {
      top: 0
    }
  }
}));

function DatePickerCell(props) {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const {
    edited,
    cellData,
    branch,
    updateRow
  } = props;

  const [state] = useState({
    event: {
      target: {
        name: cellData.type, // eslint-disable-line
        value: cellData.value, // eslint-disable-line
      }
    }
  });

  const handleDateChange = useCallback(date => {
    const { event } = state;
    event.target.value = date;
    updateRow(event, branch);
  }, [updateRow, branch]);

  const { event } = state;
  return (
    <TableCell textalign="center" className={classes.datepicker}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          clearable
          name={cellData.type}
          className={cx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
          format="DD/MM/YYYY"
          placeholder="10/10/2018"
          mask="DD/MM/YYYY"
          value={event.target.value}
          disabled={!edited}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} variant="standard" />}
        />
      </LocalizationProvider>
    </TableCell>
  );
}

DatePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default DatePickerCell;
