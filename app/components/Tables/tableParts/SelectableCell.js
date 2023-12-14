import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import css from 'dan-styles/Table.scss';

function SelectableCell(props) {
  const theme = useTheme();
  const {
    cellData,
    edited,
    options,
    updateRow,
    branch
  } = props;

  const handleChange = useCallback(event => {
    updateRow(event, branch);
  }, [updateRow, branch]);

  return (
    <TableCell padding="none">
      <Select
        variant="standard"
        name={cellData.type}
        id={cellData.id.toString()}
        className={clsx(css.crudInput, theme.palette.mode === 'dark' ? css.lightTxt : css.darkTxt)}
        value={cellData.value}
        onChange={handleChange}
        displayEmpty
        disabled={!edited}
        margin="none">
        {options.map((option, index) => <MenuItem value={option} key={index.toString()}>{option}</MenuItem>)}
      </Select>
    </TableCell>
  );
}

SelectableCell.propTypes = {
  options: PropTypes.array.isRequired,
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default SelectableCell;
