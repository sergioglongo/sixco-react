import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useStyles from 'dan-components/Tables/tableStyle-jss';
import { EmptyData } from 'dan-components';

function EmptyTable() {
  const { classes } = useStyles();
  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">Nutrition</Typography>
        </div>
      </Toolbar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="normal">Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <EmptyData />
    </div>
  );
}

export default EmptyTable;
