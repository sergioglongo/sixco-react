import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Comment from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './cardStyle-jss';

const optionsOpt = [
  'Report this post',
  'Hide this post',
  'Copy link',
];

const ITEM_HEIGHT = 48;

function PostCard(props) {
  const [anchorElOpt, setAchorElOpt] = useState(null);

  const handleClickOpt = event => {
    setAchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAchorElOpt(null);
  };

  const { classes } = useStyles();
  const {
    avatar,
    name,
    date,
    image,
    content,
    liked,
    shared,
    commented
  } = props;
  return (
    <Card className={classes.cardSocmed}>
      <CardHeader
        avatar={
          <Avatar alt="avatar" src={avatar} className={classes.avatar} />
        }
        action={(
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={handleClickOpt}
            size="large">
            <MoreVertIcon />
          </IconButton>
        )}
        title={name}
        subheader={date}
      />
      <Menu
        id="long-menu"
        anchorEl={anchorElOpt}
        open={Boolean(anchorElOpt)}
        onClose={handleCloseOpt}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {optionsOpt.map(option => (
          <MenuItem key={option} selected={option === 'Edit Profile'} onClick={handleCloseOpt}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      {image !== '' && (
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
      )}
      <CardContent>
        <Typography component="p">
          {content}
        </Typography>
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

PostCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
  shared: PropTypes.number.isRequired,
  commented: PropTypes.number.isRequired,
};

PostCard.defaultProps = {
  image: ''
};

export default PostCard;
