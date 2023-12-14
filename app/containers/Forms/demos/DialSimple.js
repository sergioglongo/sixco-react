import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing(3),
  },
  exampleWrapper: {
    position: 'relative',
    height: 380,
  },
  radioGroup: {
    margin: `${theme.spacing(1)} 0`,
  },
  speedDial: {
    position: 'absolute',
    [`&.${classes.directionUp}, &.${classes.directionLeft}`]: {
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    [`&.${classes.directionDown}, &.${classes.directionRight}`]: {
      top: theme.spacing(2),
      left: theme.spacing(3),
    },
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

function DialSimple() {
  const {
    classes,
    cx
  } = useStyles();

  const [direction, setDirection] = useState('up');
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDirectionChange = (event, value) => {
    setDirection(value);
  };

  const handleHiddenChange = (event, value) => {
    setHidden(value);
    setOpen(value ? false : open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const speedDialClassName = cx(
    classes.speedDial
  );

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <FormControlLabel
          control={(
            <Switch
              checked={hidden}
              onChange={handleHiddenChange}
              value="hidden"
              color="primary"
            />
          )}
          label="Hidden"
        />
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="Direction"
          name="direction"
          className={classes.radioGroup}
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </div>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={speedDialClassName}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={handleClose}
          onClick={handleClick}
          onClose={handleClose}
          onFocus={handleOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          open={open}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

export default DialSimple;
