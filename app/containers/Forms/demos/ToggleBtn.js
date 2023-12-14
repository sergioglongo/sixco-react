import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const useStyles = makeStyles()((theme) => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing(1)} 0`,
    background: theme.palette.background.default,
  },
}));

function ToggleBtn() {
  const {
    classes
  } = useStyles();
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormat] = useState(['blog']);

  const handleFormat = (event, newFormats) => {
    setFormat(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value="left">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Typography gutterBottom>
          Exclusive Selection
        </Typography>
        <Typography variant="caption">
          Text justification toggle buttons present options for left, right, center, full, and
          justified text with only one item available for selection at a time. Selecting one
          option deselects any other.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton disabled value="color">
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Typography gutterBottom>
          Multiple Selection
        </Typography>
        <Typography variant="caption">
          Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to
          be selected.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ToggleBtn;
