import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Send from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';
import dummy from 'dan-api/dummy/dummyContents';
import useStyles from '../SocialMedia/jss/socialMedia-jss';

function Comment(props) {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    setComment(event.target.value);
  };

  const { classes } = useStyles();
  const {
    dataList,
  } = props;

  const getItem = dataArray => dataArray.map(data => (
    <Fragment key={data.id}>
      <ListItem>
        <div className={classes.commentContent}>
          <div className={classes.commentHead}>
            <Avatar alt="avatar" src={data.avatar} className={classes.avatarComment} />
            <section>
              <Typography variant="subtitle1">{data.from}</Typography>
              <Typography variant="caption"><span className={clsx(Type.light, Type.textGrey)}>{data.date}</span></Typography>
            </section>
          </div>
          <Typography className={classes.commentText}>{data.message}</Typography>
        </div>
      </ListItem>
      <Divider />
    </Fragment>
  ));

  return (
    <div>
      <section className={classes.commentAction}>
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
          <Fab size="small" color="secondary" aria-label="send" className={classes.button}>
            <Send />
          </Fab>
        </div>
      </section>
      <List>
        {getItem(dataList)}
      </List>
    </div>
  );
}

Comment.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default Comment;
