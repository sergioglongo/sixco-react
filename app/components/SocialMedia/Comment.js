import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Send from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import dummy from 'dan-api/dummy/dummyContents';
import useStyles from './jss/socialMedia-jss';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line
function Comment(props) {
  const [comment, setComment] = useState('');
  const {
    open,
    handleClose,
    dataComment,
    submitComment
  } = props;
  const { classes, cx } = useStyles();

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = commentParam => {
    submitComment(commentParam);
    setComment('');
  };

  const getItem = dataArray => dataArray.map(data => (
    <Fragment key={data.id}>
      <ListItem>
        <div className={classes.commentContent}>
          <div className={classes.commentHead}>
            <Avatar alt="avatar" src={data.avatar} className={classes.avatarComment} />
            <section>
              <Typography variant="subtitle1">{data.from}</Typography>
              <Typography variant="caption"><span className={cx(Type.light, Type.textGrey)}>{data.date}</span></Typography>
            </section>
          </div>
          <Typography className={classes.commentText}>{data.message}</Typography>
        </div>
      </ListItem>
      <Divider className={classes.divider} />
    </Fragment>
  ));

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          <CommentIcon />
          &nbsp;
          {dataComment !== undefined && dataComment.size}
          &nbsp;
          Comment
          {dataComment !== undefined && dataComment.size > 1 ? 's' : ''}
          <IconButton
            onClick={handleClose}
            className={classes.buttonClose}
            aria-label="Close"
            size="large">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {dataComment !== undefined && getItem(dataComment)}
          </List>
        </DialogContent>
        <DialogActions className={classes.commentAction}>
          <div className={classes.commentForm}>
            <Avatar alt="avatar" src={dummy.user.avatar} className={classes.avatarMini} />
            <Input
              placeholder="Write Comment"
              onChange={handleChange}
              value={comment}
              className={classes.input}
              inputProps={{
                'aria-label': 'Comment',
              }}
            />
            <Fab size="small" onClick={() => handleSubmit(comment)} color="secondary" aria-label="send" className={classes.button}>
              <Send />
            </Fab>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Comment.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  dataComment: PropTypes.array,
};

Comment.defaultProps = {
  dataComment: []
};

export default Comment;
