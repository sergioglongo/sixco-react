import React, { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles()((theme) => ({
  listItem: {
    padding: `${theme.spacing(1)} 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  orderSummary: {
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  address: {
    padding: theme.spacing(3),
    borderRadius: theme.rounded.medium,
    border: `2px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(3)
  },
  totalRow: {
    borderTop: `2px dashed ${theme.palette.primary.main}`
  }
}));

function Review() {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <div className={classes.orderSummary}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        {products.map(product => (
          <Fragment key={product.name}>
            <ListItem className={classes.listItem}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
            <li>
              <Divider />
            </li>
          </Fragment>
        ))}
        <ListItem className={cx(classes.listItem, classes.totalRow)}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <div className={classes.address}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
            </Typography>
            <Grid container>
              {payments.map(payment => (
                <Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Review;
