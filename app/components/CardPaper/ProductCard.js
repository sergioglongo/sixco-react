import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Type from 'dan-styles/Typography.scss';
import Rating from '../Rating/Rating';
import useStyles from './cardStyle-jss';

function ProductCard(props) {
  const { classes, cx } = useStyles();
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const {
    discount,
    soldout,
    thumbnail,
    name,
    desc,
    ratting,
    price,
    prevPrice,
    list,
    detailOpen,
    addToCart,
  } = props;

  return (
    <Card className={cx(classes.cardProduct, smUp && list ? classes.cardList : '')}>
      <div className={classes.status}>
        {discount !== '' && (
          <Chip label={'Discount ' + discount} className={classes.chipDiscount} />
        )}
        {soldout && (
          <Chip label="Sold Out" className={classes.chipSold} />
        )}
      </div>
      <CardMedia
        className={classes.mediaProduct}
        image={thumbnail}
        title={name}
      />
      <CardContent className={classes.floatingButtonWrap}>
        {!soldout && (
          <Tooltip title="Add to cart" placement="top">
            <Fab onClick={addToCart} size="small" color="secondary" aria-label="add" className={classes.buttonAdd}>
              <AddShoppingCart />
            </Fab>
          </Tooltip>
        )}
        <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
          {name}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {desc}
        </Typography>
        <div className={classes.ratting}>
          <Rating value={ratting} max={5} readOnly />
        </div>
      </CardContent>
      <CardActions className={classes.price}>
        <Typography variant="h5">
          <span>
            $
            {price}
          </span>
        </Typography>
        {prevPrice > 0 && (
          <Typography variant="caption" component="h5">
            <span className={Type.lineThrought}>
              $
              {prevPrice}
            </span>
          </Typography>
        )}
        <div className={classes.rightAction}>
          <Button size="small" variant="outlined" color="secondary" onClick={detailOpen}>
            See Detail
          </Button>
          {!soldout && (
            <Tooltip title="Add to cart" placement="top">
              <IconButton
                color="secondary"
                onClick={addToCart}
                className={classes.buttonAddList}
                size="large">
                <AddShoppingCart />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  discount: PropTypes.string,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ratting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  addToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => (false),
  addToCart: () => (false),
};

export default ProductCard;
