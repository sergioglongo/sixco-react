import React, { useRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import themeSource from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { green } from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  buttonWrapper: {
    position: 'relative',
    marginBottom: theme.spacing(4),
  },
  anchor: {
    backgroundColor: green[500],
    width: 10,
    height: 10,
    borderRadius: '50%',
    position: 'absolute',
  },
  radioAnchor: {
    color: green[600],
    [`&.${classes.checked}`]: {
      color: green[500],
    },
  },
  checked: {},
  typography: {
    margin: theme.spacing(2),
  },
}));

const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5,
    },
    center: {
      top: 'calc(50% - 5px)',
    },
    bottom: {
      bottom: -5,
    },
  },
  anchorHorizontal: {
    left: {
      left: -5,
    },
    center: {
      left: 'calc(50% - 5px)',
    },
    right: {
      right: -5,
    },
  }
};

function PopoverPlayground() {
  const {
    classes
  } = useStyles();
  const anchorRef = useRef();
  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const [state, setState] = React.useState({
    open: false,
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'left',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: 'anchorEl',
  });

  const {
    open,
    anchorOriginVertical,
    anchorOriginHorizontal,
    transformOriginVertical,
    transformOriginHorizontal,
    positionTop,
    positionLeft,
    anchorReference,
  } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumberInputChange = (key) => (event) => {
    setState({
      ...state,
      [key]: parseInt(event.target.value, 10),
    });
  };

  const handleClickButton = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  let mode = '';

  if (anchorReference === 'anchorPosition') {
    mode = `
  anchorReference="${anchorReference}"
  anchorPosition={{ top: ${positionTop}, left: ${positionLeft} }}`;
  }

  const code = `
<Popover ${mode}
  anchorOrigin={{
    vertical: '${anchorOriginVertical}',
    horizontal: '${anchorOriginHorizontal}',
  }}
  transformOrigin={{
    vertical: '${transformOriginVertical}',
    horizontal: '${transformOriginHorizontal}',
  }}
>
  The content of the Popover.
</Popover>
`;

  const radioAnchorClasses = { root: classes.radioAnchor, checked: classes.checked };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item className={classes.buttonWrapper}>
          <Button ref={anchorRef} variant="contained" onClick={handleClickButton}>
            Open Popover
          </Button>
          {anchorReference === 'anchorEl' && (
            <div
              className={classes.anchor}
              style={{
                ...inlineStyles.anchorVertical[anchorOriginVertical],
                ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],
              }}
            />
          )}
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        anchorReference={anchorReference}
        anchorPosition={{ top: positionTop, left: positionLeft }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: anchorOriginVertical,
          horizontal: anchorOriginHorizontal,
        }}
        transformOrigin={{
          vertical: transformOriginVertical,
          horizontal: transformOriginHorizontal,
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">anchorReference</FormLabel>
            <RadioGroup
              row
              aria-label="anchor reference"
              name="anchorReference"
              value={anchorReference}
              onChange={handleChange}
            >
              <FormControlLabel value="anchorEl" control={<Radio />} label="anchorEl" />
              <FormControlLabel value="anchorPosition" control={<Radio />} label="anchorPosition" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" className={classes.formControl}>
            <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>
            <Input
              id="position-top"
              type="number"
              value={positionTop}
              onChange={handleNumberInputChange('positionTop')}
            />
          </FormControl>
          &nbsp;
          <FormControl variant="standard" className={classes.formControl}>
            <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>
            <Input
              id="position-left"
              type="number"
              value={positionLeft}
              onChange={handleNumberInputChange('positionLeft')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">anchorOrigin.vertical</FormLabel>
            <RadioGroup
              aria-label="anchor origin vertical"
              name="anchorOriginVertical"
              value={anchorOriginVertical}
              onChange={handleChange}
            >
              <FormControlLabel
                value="top"
                control={<Radio classes={radioAnchorClasses} />}
                label="Top"
              />
              <FormControlLabel
                value="center"
                control={<Radio classes={radioAnchorClasses} />}
                label="Center"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio classes={radioAnchorClasses} />}
                label="Bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">transformOrigin.vertical</FormLabel>
            <RadioGroup
              aria-label="transform origin vertical"
              name="transformOriginVertical"
              value={transformOriginVertical}
              onChange={handleChange}
            >
              <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" />
              <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />
              <FormControlLabel value="bottom" control={<Radio color="primary" />} label="Bottom" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
            <RadioGroup
              row
              aria-label="anchor origin horizontal"
              name="anchorOriginHorizontal"
              value={anchorOriginHorizontal}
              onChange={handleChange}
            >
              <FormControlLabel
                value="left"
                control={<Radio classes={radioAnchorClasses} />}
                label="Left"
              />
              <FormControlLabel
                value="center"
                control={<Radio classes={radioAnchorClasses} />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio classes={radioAnchorClasses} />}
                label="Right"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" component="fieldset">
            <FormLabel component="legend">transformOrigin.horizontal</FormLabel>
            <RadioGroup
              row
              aria-label="transform origin horizontal"
              name="transformOriginHorizontal"
              value={transformOriginHorizontal}
              onChange={handleChange}
            >
              <FormControlLabel value="left" control={<Radio color="primary" />} label="Left" />
              <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />
              <FormControlLabel value="right" control={<Radio color="primary" />} label="Right" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <SyntaxHighlighter language="jsx" style={themeSource} showLineNumbers="true">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default PopoverPlayground;
