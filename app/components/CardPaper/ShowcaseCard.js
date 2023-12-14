import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useStyles from './cardStyle-jss';

function ShowcaseCard(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    desc,
    action,
    image,
    landscape,
    date,
    noMargin,
    extraSize,
    href
  } = props;
  return (
    <Card className={cx(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
      <CardMedia
        className={
          cx(
            landscape ? classes.roundedThumb : classes.roundedMedia,
            extraSize ? classes.extraRounded : ''
          )
        }
        image={image}
        title={title}
      />
      <CardContent>
        <Typography noWrap variant="h5">{title}</Typography>
        {date && (<Typography variant="caption" gutterBottom>{date}</Typography>)}
        <Typography variant="subtitle1">{desc}</Typography>
        {landscape && (
          <div className={classes.btnArea}>
            <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
          </div>
        )}
      </CardContent>
      {!landscape && (
        <CardActions className={classes.btnArea}>
          <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
        </CardActions>
      )}
    </Card>
  );
}

ShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  date: PropTypes.string,
  href: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  date: undefined,
  noMargin: false,
  extraSize: false,
  href: '#'
};

export default ShowcaseCard;
