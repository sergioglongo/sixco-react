import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TableCell from '@mui/material/TableCell';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import css from 'dan-styles/Table.scss';

function ToggleCell(props) {
  const {
    cellData,
    edited,
    updateRow,
    branch
  } = props;

  const [isChecked, setIsChecked] = useState(cellData.value);

  const handleChange = useCallback(event => {
    setIsChecked(event.target.checked);
    updateRow(event, branch);
  }, [updateRow, branch]);

  return (
    <TableCell className={css.toggleCell} padding="none" textalign="center">
      <div className={clsx(css.coverReadonly, !edited ? css.show : '')} />
      <FormControlLabel
        control={(
          <Switch
            name={cellData.type}
            id={cellData.id.toString()}
            className={css.crudInput}
            checked={isChecked}
            onChange={handleChange}
            value={cellData.value.toString()}
          />
        )}
      />
    </TableCell>
  );
}

ToggleCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default ToggleCell;
