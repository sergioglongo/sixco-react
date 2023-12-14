import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Today from '@mui/icons-material/Today';
import useStyles from './calendar-jss';

const ITEM_HEIGHT = 48;

function DetailEvent(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleDeleteEvent = (event) => {
    const { remove, close } = props;
    setAnchorElOpt(null);
    remove(event);
    close();
  };

  const getDate = date => {
    if (date._isAMomentObject) {
      return date.format('MMMM Do YYYY');
    }
    let dd = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const mm = monthNames[date.getMonth()]; // January is 0!
    const yyyy = date.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    const convertedDate = mm + ', ' + dd + ' ' + yyyy;

    return convertedDate;
  };

  const getTime = time => {
    if (time._isAMomentObject) {
      return time.format('LT');
    }
    let h = time.getHours();
    let m = time.getMinutes();

    if (h < 10) {
      h = '0' + h;
    }

    if (m < 10) {
      m = '0' + m;
    }

    const convertedTime = h + ':' + m;
    return convertedTime;
  };

  const { classes } = useStyles();
  const {
    anchorEl,
    event,
    close,
    anchorPos
  } = props;
  return (
    <Popover
      open={anchorEl}
      anchorReference="anchorPosition"
      anchorPosition={anchorPos}
      className={classes.eventDetail}
      onClose={close}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <IconButton
        aria-label="More"
        aria-owns={anchorElOpt ? 'long-menu' : null}
        aria-haspopup="true"
        className={classes.moreOpt}
        onClick={handleClickOpt}
        size="large">
        <MoreVertIcon />
      </IconButton>
      {event !== null && (
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
            <MenuItem onClick={() => handleDeleteEvent(event)}>
              Delete Event
            </MenuItem>
          </Menu>
          <Typography variant="h5" noWrap style={{ background: `#${event.hexColor}` }} className={classes.eventName}>
            <Today />
            {event.title}
          </Typography>
          <div className={classes.time}>
            <Typography>
              Start:&nbsp;
              {getDate(event.start)}
              -
              {getTime(event.start)}
            </Typography>
            <Divider className={classes.divider} />
            <Typography>
              End::&nbsp;
              {getDate(event.end)}
              -
              {getTime(event.end)}
            </Typography>
          </div>
        </Fragment>
      )}
    </Popover>
  );
}

DetailEvent.propTypes = {
  anchorEl: PropTypes.bool.isRequired,
  anchorPos: PropTypes.object.isRequired,
  event: PropTypes.object,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

DetailEvent.defaultProps = {
  event: null,
};

export default DetailEvent;
