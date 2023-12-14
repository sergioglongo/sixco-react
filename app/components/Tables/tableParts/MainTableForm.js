import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import RowReadOnly from './RowReadOnly';
import useStyles from '../tableStyle-jss';

function MainTableForm(props) {
  const { classes, cx } = useStyles();
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const {
    title,
    items,
    removeRow,
    editRow,
    addNew,
    anchor,
    branch,
  } = props;

  const getItems = dataArray => dataArray.map(item => (
    <RowReadOnly
      item={item}
      removeRow={() => removeRow(item, branch)}
      key={item.id}
      editRow={() => editRow(item, branch)}
      anchor={anchor}
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
            <Button variant="contained" onClick={() => addNew(anchor, branch)} color="secondary" className={classes.button}>
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

MainTableForm.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  anchor: PropTypes.array.isRequired,
  addNew: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default MainTableForm;
