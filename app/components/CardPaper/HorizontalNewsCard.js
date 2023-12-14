import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useStyles from './cardStyle-jss';

function HorizontalNewsCard(props) {
  const { classes } = useStyles();
  const {
    thumbnail,
    title,
    desc,
  } = props;
  return (
    <Card className={classes.newsList}>
      <CardContent className={classes.newsListContent}>
        <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
          {title}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {desc}
        </Typography>
        <div className={classes.actionArea}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Read More
          </Button>
        </div>
      </CardContent>
      <CardMedia
        className={classes.mediaNews}
        image={thumbnail}
        title={title}
      />
    </Card>
  );
}

HorizontalNewsCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default HorizontalNewsCard;
