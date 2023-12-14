import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import css from 'dan-styles/Table.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/BorderColor';

const useStyles = makeStyles()((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(0, 1)
  }
}));

function RowReadOnly(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    anchor,
    item,
    removeRow,
    editRow,
    branch
  } = props;

  const eventDel = useCallback(() => {
    removeRow(item, branch);
  }, [removeRow, item, branch]);

  const eventEdit = useCallback(() => {
    editRow(item, branch);
  }, [editRow, item, branch]);

  const renderCell = dataArray => dataArray.map((itemCell, index) => {
    if (itemCell.name !== 'action' && !itemCell.hidden) {
      return (
        <TableCell className={classes.padding} key={index.toString()}>
          {item[itemCell.name] !== undefined ? item[itemCell.name].toString() : ''}
        </TableCell>
      );
    }
    return false;
  });
  return (
    <tr>
      {renderCell(anchor)}
      <TableCell className={classes.padding}>
        <IconButton
          onClick={() => eventEdit(this)}
          className={cx((item.edited ? css.hideAction : ''), classes.button)}
          aria-label="Edit"
          size="large">
          <EditIcon />
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

RowReadOnly.propTypes = {
  anchor: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default RowReadOnly;
