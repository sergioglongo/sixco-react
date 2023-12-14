import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Type from 'dan-styles/Typography.scss';
import useStyles from './cart-jss';

function Cart(props) {
  const { classes } = useStyles();
  const {
    anchorEl,
    close,
    dataCart,
    removeItem,
    totalPrice,
    checkout
  } = props;

  const getCartItem = dataArray => dataArray.map((item, index) => (
    <Fragment key={index.toString()}>
      <ListItem>
        <figure>
          <img src={item.thumbnail} alt="thumb" />
        </figure>
        <ListItemText
          primary={item.name}
          secondary={`Quantity: ${item.quantity} Item - USD ${item.price * item.quantity}`}
          className={classes.itemText}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments" onClick={() => removeItem(item)} size="large">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <li>
        <Divider />
      </li>
    </Fragment>
  ));
  return (
    <Menu
      id="cart-menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={close}
      className={classes.cartPanel}
    >
      <List
        component="ul"
        subheader={(
          <ListSubheader component="div">
            <ShoppingCartIcon />
            Total:&nbsp;
            {dataCart.size}
            &nbsp;Unique items in Cart
          </ListSubheader>
        )}
        className={classes.cartWrap}
      >
        {
          dataCart.size < 1 ? (
            <div className={classes.empty}>
              <Typography variant="subtitle1">Empty Cart</Typography>
              <Typography variant="caption">Your shopping items will be listed here</Typography>
            </div>
          ) : (
            <Fragment>
              {getCartItem(dataCart)}
              <ListItem className={classes.totalPrice}>
                <Typography variant="subtitle1">
                  Total :
                  <span className={Type.bold}>
                    $
                    {totalPrice}
                  </span>
                </Typography>
              </ListItem>
              <li>
                <Divider />
              </li>
              <ListItem>
                <Button fullWidth className={classes.button} variant="contained" onClick={() => checkout()} color="secondary">
                  Checkout
                </Button>
              </ListItem>
            </Fragment>
          )
        }
      </List>
    </Menu>
  );
}

Cart.propTypes = {
  dataCart: PropTypes.array.isRequired,
  anchorEl: PropTypes.object,
  close: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

Cart.defaultProps = {
  anchorEl: null,
};

export default Cart;
