import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './taskBoard-jss';

function CustomHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { classes } = useStyles();
  const {
    title,
    color,
    label,
    id,
    removeBoard
  } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = (elmId) => {
    removeBoard(elmId);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.headerBoard}>
      <span className={classes.deco} style={{ background: color }} />
      <Typography variant="h5" className={classes.mainTitle}>{title}</Typography>
      <Typography variant="caption" className={classes.labelCaption}>{label}</Typography>
      <div className={classes.headerOpt}>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          size="large">
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <MenuItem onClick={() => handleRemove(id)}>Remove</MenuItem>
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

CustomHeader.propTypes = {
  id: PropTypes.string.isRequired,
  removeBoard: PropTypes.func.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
};

CustomHeader.defaultProps = {
  title: '',
  label: '',
  color: '#FF5722'
};

export default CustomHeader;
