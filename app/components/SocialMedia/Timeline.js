import React, { Fragment, useState } from 'react';
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
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Comment from './Comment';
import useStyles from './jss/timeline-jss';

const optionsOpt = [
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function Timeline(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [openComment, setOpenComment] = useState(false);
  const { classes } = useStyles();
  const {
    dataTimeline,
    onlike,
    commentIndex,
    submitComment,
    fetchComment
  } = props;

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleOpenComment = (data) => {
    fetchComment(data);
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  const getItem = dataArray => dataArray.map(data => (
    <li key={data.id}>
      <div className={classes.iconBullet}>
        <Tooltip id={'tooltip-icon-' + data.id} title={data.time}>
          <Icon className={classes.icon}>
            {data.icon}
          </Icon>
        </Tooltip>
      </div>
      <Card className={classes.cardSocmed}>
        <CardHeader
          avatar={
            <Avatar alt="avatar" src={data.avatar} className={classes.avatar} />
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
          title={data.name}
          subheader={data.date}
        />
        {data.image !== '' && (
          <CardMedia
            className={classes.media}
            image={data.image}
            title={data.name}
          />
        )}
        <CardContent>
          <Typography component="p">
            {data.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton aria-label="Like this" onClick={() => onlike(data)} size="large">
            <FavoriteIcon className={data.liked ? classes.liked : ''} />
          </IconButton>
          <IconButton aria-label="Share" size="large">
            <ShareIcon />
          </IconButton>
          <div className={classes.rightIcon}>
            <Typography variant="caption" component="span">
              {data.comments !== undefined ? data.comments.length : 0}
            </Typography>
            <IconButton aria-label="Comment" onClick={() => handleOpenComment(data)} size="large">
              <CommentIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </li>
  ));
  return (
    <Fragment>
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
          <MenuItem key={option} onClick={handleCloseOpt}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      {dataTimeline.length > 0 && (
        <Comment
          open={openComment}
          handleClose={handleCloseComment}
          submitComment={submitComment}
          dataComment={dataTimeline[commentIndex].comments}
        />
      )}
      <ul className={classes.timeline}>
        {dataTimeline.length > 0 && getItem(dataTimeline)}
      </ul>
    </Fragment>
  );
}

Timeline.propTypes = {
  onlike: PropTypes.func,
  dataTimeline: PropTypes.array.isRequired,
  fetchComment: PropTypes.func,
  submitComment: PropTypes.func,
  commentIndex: PropTypes.number,
};

Timeline.defaultProps = {
  onlike: () => (false),
  fetchComment: () => { },
  submitComment: () => { },
  commentIndex: 0,
};

export default Timeline;
