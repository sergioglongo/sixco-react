import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBack from '@mui/icons-material/ArrowBack';
import useStyles from '../Contact/contact-jss';

const optionsOpt = [
  'Delete Conversation',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function ChatHeader(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleRemove = (person) => {
    const { remove } = props;
    remove(person);
  };

  const { classes, cx } = useStyles();
  const {
    chatSelected,
    dataContact,
    showMobileDetail,
    hideDetail,
  } = props;
  return (
    <AppBar
      position="absolute"
      className={cx(classes.appBar, classes.fixHeight, classes.appBarShift)}
    >
      <div className={classes.cover}>
        {showMobileDetail && (
          <IconButton
            aria-label="open drawer"
            onClick={() => hideDetail()}
            className={classes.navIconHide}
            size="large">
            <ArrowBack />
          </IconButton>
        )}
        {dataContact.length > 0 && (
          <Fragment>
            <Avatar alt="avatar" src={dataContact[chatSelected].avatar} className={classes.avatar} />
            <Typography variant="h6" component="h2" color="inherit" noWrap>
              {dataContact[chatSelected].name}
              <Typography variant="caption" display="block" className={classes.status} color="inherit" noWrap>
                <span className={classes.online} />
                  &nbsp;Online
              </Typography>
            </Typography>
          </Fragment>
        )}
        <IconButton
          aria-label="More"
          aria-owns={anchorElOpt ? 'long-menu' : null}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleClickOpt}
          size="large">
          <MoreVertIcon color="inherit" />
        </IconButton>
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
          {optionsOpt.map(option => {
            if (option === 'Delete Conversation') {
              return (
                <MenuItem key={option} onClick={handleRemove}>
                  {option}
                </MenuItem>
              );
            }
            return (
              <MenuItem key={option} selected={option === 'Edit Profile'} onClick={handleCloseOpt}>
                {option}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </AppBar>
  );
}

ChatHeader.propTypes = {
  dataContact: PropTypes.array.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  hideDetail: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  chatSelected: PropTypes.number.isRequired,
};

export default ChatHeader;
