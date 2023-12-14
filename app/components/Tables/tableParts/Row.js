import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/BorderColor';
import DoneIcon from '@mui/icons-material/Done';
import css from 'dan-styles/Table.scss';
import EditableCell from './EditableCell';
import SelectableCell from './SelectableCell';
import ToggleCell from './ToggleCell';
import DatePickerCell from './DatePickerCell';
import TimePickerCell from './TimePickerCell';

const useStyles = makeStyles()((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Row(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    anchor,
    item,
    removeRow,
    updateRow,
    editRow,
    finishEditRow,
    branch
  } = props;

  const eventDel = useCallback(() => {
    removeRow(item, branch);
  }, [removeRow, item, branch]);

  const eventEdit = useCallback(() => {
    editRow(item, branch);
  }, [editRow, item, branch]);

  const eventDone = useCallback(() => {
    finishEditRow(item, branch);
  }, [finishEditRow, item, branch]);

  const renderCell = dataArray => dataArray.map((itemCell, index) => {
    if (itemCell.name !== 'action' && !itemCell.hidden) {
      const inputType = anchor[index].type;
      switch (inputType) {
        case 'selection':
          return (
            <SelectableCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              options={anchor[index].options}
              branch={branch}
            />
          );
        case 'toggle':
          return (
            <ToggleCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        case 'date':
          return (
            <DatePickerCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        case 'time':
          return (
            <TimePickerCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        default:
          return (
            <EditableCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              inputType={inputType}
              branch={branch}
            />
          );
      }
    }
    return false;
  });
  return (
    <tr className={item.edited ? css.editing : ''}>
      {renderCell(anchor)}
      <TableCell padding="none">
        <IconButton
          onClick={() => eventEdit(this)}
          className={cx((item.edited ? css.hideAction : ''), classes.button)}
          aria-label="Edit"
          size="large">
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => eventDone(this)}
          color="secondary"
          className={cx((!item.edited ? css.hideAction : ''), classes.button)}
          aria-label="Done"
          size="large">
          <DoneIcon />
        </IconButton>
        <IconButton
          onClick={() => eventDel(this)}
          className={classes.button}
          aria-label="Delete"
          size="large">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </tr>
  );
}

Row.propTypes = {
  anchor: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired
};

export default Row;
