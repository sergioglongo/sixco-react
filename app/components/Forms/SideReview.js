import React, { Fragment } from 'react';
import { lighten, darken } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Type from 'dan-styles/Typography.scss';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import imgApi from 'dan-api/images/photos';

const dataCart = [
  {
    name: 'Product 1',
    thumb: imgApi[21],
    price: 9.99,
    quantity: 1
  },
  {
    name: 'Product 1',
    thumb: imgApi[22],
    price: 2.34,
    quantity: 1
  },
  {
    name: 'Product 1',
    thumb: imgApi[23],
    price: 10.00,
    quantity: 2
  },
  {
    name: 'Product 1',
    thumb: imgApi[24],
    price: 7.99,
    quantity: 3
  },
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
    [theme.breakpoints.up('md')]: {
      width: 600,
      margin: '0 auto'
    },
  },
  paper: {
    background: theme.palette.mode === 'dark' ? darken(theme.palette.secondary.main, 0.5) : lighten(theme.palette.secondary.light, 0.5),
    padding: theme.spacing(2),
    height: 550,
    overflow: 'auto',
    '& h6': {
      textAlign: 'center',
    }
  },
  thumb: {
    width: 120,
    height: 70,
    marginRight: theme.spacing(2),
    overflow: 'hidden',
    borderRadius: theme.rounded.small,
    '& img': {
      maxWidth: '100%'
    }
  },
  totalPrice: {
    '& h6': {
      textAlign: 'right',
      width: '100%',
      '& span': {
        color: theme.palette.primary.main,
        fontSize: 28
      }
    },
  }
}));

function SideReview() {
  const {
    classes
  } = useStyles();
  const getCartItem = dataArray => dataArray.map((item, index) => (
    <Fragment key={index.toString()}>
      <ListItem>
        <figure className={classes.thumb}>
          <img src={item.thumb} alt="thumb" />
        </figure>
        <ListItemText
          primary={item.name}
          secondary={`Quantity: ${item.quantity} Item - USD ${item.price * item.quantity}`}
          className={classes.itemText}
        />
      </ListItem>
      <li>
        <Divider />
      </li>
    </Fragment>
  ));
  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" gutterBottom>
        <ShoppingCart />
        &nbsp; Order Summary
      </Typography>
      <List component="ul">
        {getCartItem(dataCart)}
        <ListItem className={classes.totalPrice}>
          <Typography variant="h6">
            Total :&nbsp;
            <span>
              <small>$</small>
              <strong className={Type.bold}>34.06</strong>
            </span>
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}

export default SideReview;
