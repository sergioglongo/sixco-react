import React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import useStyles from 'dan-components/Tables/tableStyle-jss';
import messageStyles from 'dan-styles/Messages.scss';
import PapperBlock from '../PapperBlock/PapperBlock';

let id = 0;
function createData(time, market, price, total, get, status) {
  id += 1;
  return {
    id,
    time,
    market,
    price,
    total,
    get,
    status,
  };
}

const data = [
  createData('12 Sep 2018', 'BTC', 7324, 300, 0.053, 'Pending'),
  createData('1 Sep 2018', 'LTC', 1.2, 10, 12, 'Cancelled'),
  createData('27 Aug 2018', 'XLM', 0.78, 15, 14.3, 'Complete'),
  createData('11 Aug 201', 'ADA', 29.5, 12, 1.56, 'Pending'),
  createData('11 Aug 2018', 'BTC', 7124, 12, 1.77, 'Complete'),
];

function LatestTransactionWidget() {
  const { classes, cx } = useStyles();
  const getStatus = status => {
    switch (status) {
      case 'Cancelled': return messageStyles.bgError;
      case 'Pending': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Complete': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  return (
    <PapperBlock whiteBg noMargin title="Latest Transaction" icon="ion-ios-time-outline" desc="">
      <div className={classes.rootTable}>
        <Table padding="none" className={classes.tableSmall}>
          <TableHead>
            <TableRow>
              <TableCell padding="normal">Date</TableCell>
              <TableCell padding="normal">Coin</TableCell>
              <TableCell padding="normal">Total</TableCell>
              <TableCell padding="normal">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="normal">
                  {n.time}
                </TableCell>
                <TableCell padding="normal">
                  <Typography variant="subtitle1">{n.market}</Typography>
                  <Typography variant="caption">
                    $&nbsp;
                    {n.price}
                  </Typography>
                </TableCell>
                <TableCell align="right" padding="normal">
                  <Typography variant="subtitle1">
                    $
                    {n.total}
                  </Typography>
                  <Typography variant="caption">
                    {n.get}
                    &nbsp;
                    {n.market}
                  </Typography>
                </TableCell>
                <TableCell padding="none">
                  <Chip label={n.status} className={cx(classes.tableChip, getStatus(n.status))} />
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </PapperBlock>
  );
}

export default LatestTransactionWidget;
