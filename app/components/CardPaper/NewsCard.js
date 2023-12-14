import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useStyles from './cardStyle-jss';

function NewsCard(props) {
  const { classes } = useStyles();
  const {
    children,
    title,
    image,
    ...rest
  } = props;
  return (
    <Card className={classes.cardMedia} {...rest}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NewsCard;
