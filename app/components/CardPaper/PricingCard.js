import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import useStyles from './cardStyle-jss';

function PricingCard(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    price,
    feature,
    tier
  } = props;

  const getTier = lv => {
    switch (lv) {
      case 'cheap':
        return classes.cheap;
      case 'expensive':
        return classes.expensive;
      case 'more-expensive':
        return classes.moreExpensive;
      default:
        return classes.free;
    }
  };

  return (
    <Card className={cx(classes.priceCard, getTier(tier))}>
      <div className={classes.priceHead}>
        <Typography variant="h5">{title}</Typography>
        <Typography component="h4" variant="h2">{price}</Typography>
      </div>
      <CardContent className={classes.featureList}>
        <ul>
          {feature.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardActions className={classes.btnArea}>
        <Button variant="outlined" size="large" className={classes.lightButton}>Get in now</Button>
      </CardActions>
    </Card>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired,
  feature: PropTypes.array.isRequired,
};

export default PricingCard;
