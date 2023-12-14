import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import css from 'dan-styles/Table.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import Row from './Row';
import useStyles from '../tableStyle-jss';

function MainTable(props) {
  const { classes, cx } = useStyles();
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const {
    items,
    addEmptyRow,
    removeRow,
    updateRow,
    editRow,
    finishEditRow,
    anchor,
    branch,
    title,
  } = props;

  const getItems = dataArray => dataArray.map(item => (
    <Row
      anchor={anchor}
      updateRow={(event) => updateRow(event, item, branch)}
      item={item}
      removeRow={() => removeRow(item, branch)}
      key={item.id}
      editRow={() => editRow(item, branch)}
      finishEditRow={() => finishEditRow(item, branch)}
      branch={branch}
    />
  ));

  const getHead = dataArray => dataArray.map((item, index) => {
    if (!item.hidden) {
      return (
        <TableCell padding="none" key={index.toString()} width={item.width}>{item.label}</TableCell>
      );
    }
    return false;
  });

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">{title}</Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          <Tooltip title="Add Item">
            <Button variant="contained" onClick={() => addEmptyRow(anchor, branch)} color="secondary" className={classes.button}>
              <AddIcon className={cx(smUp && classes.leftIcon, classes.iconSmall)} />
              {smUp && 'Add New'}
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
      <div className={classes.rootTable}>
        <Table className={cx(css.tableCrud, classes.table, classes.stripped)}>
          <TableHead>
            <TableRow>
              {getHead(anchor)}
            </TableRow>
          </TableHead>
          <TableBody>
            {getItems(items)}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

MainTable.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  anchor: PropTypes.array.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default MainTable;
