import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import css from 'dan-styles/Table.scss';

const useStyles = makeStyles()(() => ({
  datepicker: {
    '& button': {
      top: 0
    }
  }
}));

function TimePickerCell(props) {
  const {
    classes,
    cx
  } = useStyles();

  const theme = useTheme();

  const {
    edited,
    cellData,
    updateRow,
    branch
  } = props;

  const [event] = useState({
    target: {
      name: cellData.type,
      value: cellData.value
    }
  });

  const handleTimeChange = useCallback(date => {
    event.target.value = date;
    updateRow(event, branch);
  }, [event, updateRow, branch]);

  return (
    <TableCell className={classes.datepicker}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TimePicker
          name={cellData.type}
          className={cx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
          mask="hh:mm A"
          placeholder="08:00 AM"
          value={event.target.value}
          disabled={!edited}
          renderInput={(params) => <TextField {...params} variant="standard" />}
          onChange={handleTimeChange}
        />
      </LocalizationProvider>
    </TableCell>
  );
}

TimePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default TimePickerCell;
