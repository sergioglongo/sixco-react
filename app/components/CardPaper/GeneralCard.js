import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Comment from '@mui/icons-material/Comment';
import useStyles from './cardStyle-jss';

function GeneralCard(props) {
  const { classes } = useStyles();
  const {
    children,
    liked,
    shared,
    commented
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        {children}
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="Add to favorites" className={classes.button} size="large">
          <FavoriteIcon className={liked > 0 && classes.liked} />
          <span className={classes.num}>{liked}</span>
        </IconButton>
        <IconButton aria-label="Share" className={classes.button} size="large">
          <ShareIcon className={shared > 0 && classes.shared} />
          <span className={classes.num}>{shared}</span>
        </IconButton>
        <IconButton aria-label="Comment" className={classes.rightIcon} size="large">
          <Comment />
          <span className={classes.num}>{commented}</span>
        </IconButton>
      </CardActions>
    </Card>
  );
}

GeneralCard.propTypes = {
  children: PropTypes.node.isRequired,
  liked: PropTypes.number.isRequired,
  shared: PropTypes.number.isRequired,
  commented: PropTypes.number.isRequired,
};

export default GeneralCard;
