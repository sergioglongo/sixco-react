import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import css from 'dan-styles/Table.scss';

function EditableCell(props) {
  const theme = useTheme();
  const {
    cellData,
    edited,
    inputType,
    updateRow,
    branch
  } = props;

  const handleUpdate = useCallback((event) => {
    event.persist();
    updateRow(event, branch);
  }, [updateRow, branch]);

  switch (inputType) {
    case 'text':
      return (
        <TableCell padding="normal">
          <TextField
            variant="standard"
            placeholder={cellData.type}
            name={cellData.type}
            className={clsx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
            id={cellData.id.toString()}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            disabled={!edited}
            margin="none"
            inputProps={{
              'aria-label': 'Description',
            }} />
        </TableCell>
      );
    case 'number':
      return (
        <TableCell padding="none">
          <TextField
            variant="standard"
            id={cellData.id.toString()}
            name={cellData.type}
            className={clsx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="none"
            disabled={!edited} />
        </TableCell>
      );
    default:
      return (
        <TableCell padding="normal">
          <TextField
            variant="standard"
            placeholder={cellData.type}
            name={cellData.type}
            className={clsx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
            id={cellData.id.toString()}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            disabled={!edited}
            margin="none"
            inputProps={{
              'aria-label': 'Description',
            }} />
        </TableCell>
      );
  }
}

EditableCell.propTypes = {
  inputType: PropTypes.string.isRequired,
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default EditableCell;
