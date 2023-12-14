import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Send from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import dummyContents from 'dan-api/dummy/dummyContents';
import Type from 'dan-styles/Typography.scss';
import MessageField from './MessageField';
import ChatHeader from './ChatHeader';
import useStyles from './chatStyle-jss';

function ChatRoom(props) {
  const field = useRef(null);
  const [message, setMessage] = useState('');

  const handleWrite = (e, value) => {
    setMessage(value);
  };

  const resetInput = () => {
    const ctn = document.getElementById('roomContainer');
    setMessage('');
    field.current.value = '';
    setTimeout(() => {
      ctn.scrollTo(0, ctn.scrollHeight);
    }, 300);
  };

  const sendMessageByEnter = (event, msg) => {
    const { sendMessage } = props;
    if (event.key === 'Enter' && event.target.value !== '') {
      sendMessage(msg.__html);
      resetInput();
    }
  };

  const sendMessage = msg => {
    props.sendMessage(msg.__html);
    resetInput();
  };

  const html = { __html: message };
  const { classes, cx } = useStyles();
  const {
    dataChat,
    chatSelected,
    dataContact,
    showMobileDetail,
    remove,
    hideDetail
  } = props;

  const getChat = dataArray => dataArray.map(data => {
    const renderHTML = { __html: data.message };
    return (
      <li className={data.from === 'contact' ? classes.from : classes.to} key={data.id}>
        <time dateTime={data.date + ' ' + data.time}>{data.date + ' ' + data.time}</time>
        {data.from === 'contact' ? (
          <Avatar alt="avatar" src={dataContact[chatSelected].avatar} className={classes.avatar} />
        ) : (
          <Avatar alt="avatar" src={dummyContents.user.avatar} className={classes.avatar} />
        )}
        <div className={classes.talk}>
          <p><span dangerouslySetInnerHTML={renderHTML} /></p> {/* eslint-disable-line */}
        </div>
      </li>
    );
  });
  return (
    <div className={cx(classes.root, classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <ChatHeader
        dataContact={dataContact}
        chatSelected={chatSelected}
        remove={remove}
        showMobileDetail={showMobileDetail}
        hideDetail={hideDetail}
      />
      <ul className={classes.chatList} id="roomContainer">
        {dataChat.length > 0 ? getChat(dataChat) : (<Typography display="block" variant="caption" className={Type.textCenter}>{'You haven\'t made any conversation yet'}</Typography>)}
      </ul>
      <Paper className={classes.writeMessage}>
        <MessageField
          onChange={handleWrite}
          passedRef={field}
          placeholder="Type a message"
          fieldType="input"
          value={message}
          onKeyPress={(event) => sendMessageByEnter(event, html)}
        />
        <Tooltip id="tooltip-send" title="Send">
          <div>
            <IconButton
              mini="true"
              color="secondary"
              disabled={message === ''}
              onClick={() => sendMessage(html)}
              aria-label="send"
              className={classes.sendBtn}
              size="large">
              <Send />
            </IconButton>
          </div>
        </Tooltip>
      </Paper>
    </div>
  );
}

ChatRoom.propTypes = {
  dataChat: PropTypes.array.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  chatSelected: PropTypes.number.isRequired,
  dataContact: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
};

export default ChatRoom;
