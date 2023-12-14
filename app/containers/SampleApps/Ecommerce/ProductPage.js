import React, { useState } from 'react';
import Slider from 'react-slick';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import imgData from 'dan-api/images/imgData';
import imgApi from 'dan-api/images/photos';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Type from 'dan-styles/Typography.scss';
import { Rating, ProductCard, ProductDesc } from 'dan-components';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import useStyles from 'dan-components/Product/product-jss';

const getThumb = imgData.map(a => a.thumb);

function ProductDetail() {
  const [qty, setQty] = useState(1);

  const handleQtyChange = event => {
    setQty(event.target.value);
  };

  const { classes } = useStyles();

  const settings = {
    customPaging: (i) => (
      <a>
        <img src={getThumb[i]} alt="thumb" />
      </a>
    ),
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Paper className={classes.rootDetail} elevation={0}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <aside className={classes.imgGallery}>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                Pellentesque at augue ipsum
              </Typography>
              <Rating value={4} max={5} readOnly />
              <div className="container thumb-nav">
                <Slider {...settings}>
                  {imgData.map((item, index) => {
                    if (index > 4) {
                      return false;
                    }
                    return (
                      <div key={index.toString()} className={classes.item}>
                        <img src={item.img} alt={item.title} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </aside>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <section className={classes.detailWrap}>
              <div className={classes.price}>
                <Typography variant="h5">
                  <span>$ 90</span>
                </Typography>
                <Typography variant="caption" component="h5">
                  <span className={Type.lineThrought}>$ 100</span>
                </Typography>
                <Chip label="Discount 10%" className={classes.chipDiscount} />
              </div>
              <Typography component="p" className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam mattis nunc ut elementum suscipit.
                <br />
                <br />
                Duis fermentum, orci id porta mollis, turpis erat finibus lacus, ut maximus augue odio sit amet arcu. Integer quam justo, ullamcorper a orci quis, scelerisque porta tortor. Donec dignissim vitae elit id pharetra. Maecenas vitae ante est. Etiam efficitur lacinia metus a aliquam. Morbi accumsan massa gravida, lobortis odio non, tempor elit.
                Suspendisse ut placerat ante.
              </Typography>
              <div className={classes.btnArea}>
                <Typography variant="subtitle1">
                  Quantity :
                </Typography>
                <TextField
                  variant="standard"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="none"
                  value={qty}
                  className={classes.quantity}
                  onChange={handleQtyChange} />
                <Button variant="contained" color="secondary">
                  <AddShoppingCart />
                  &nbsp;Add to cart
                </Button>
              </div>
            </section>
          </Grid>
        </Grid>
      </Paper>
      <ProductDesc />
      <Typography variant="h6" className={classes.subtitle} gutterBottom>Related Products</Typography>
      <Grid container className={classes.root} spacing={3}>
        <Grid item sm={4} xs={12}>
          <ProductCard
            discount="10%"
            thumbnail={imgApi[22]}
            name="Cras convallis lacus orci"
            desc="Phasellus ante massa, aliquam non ante at"
            ratting={3}
            price={18}
            prevPrice={20}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ProductCard
            soldout
            thumbnail={imgApi[23]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            ratting={4}
            price={44}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ProductCard
            soldout
            thumbnail={imgApi[27]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            ratting={2}
            price={34}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;
