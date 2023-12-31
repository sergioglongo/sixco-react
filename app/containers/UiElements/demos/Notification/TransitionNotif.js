import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles()((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  close: {
    width: theme.spacing(4),
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function TransitionNotif() {
  const [transitionState, setTransition] = useState({
    open: false,
    open2: false,
    open3: false,
    transition: null,
    messageInfo: {},
  });

  const queue = [];

  const processQueue = () => {
    if (queue.length > 0) {
      setTransition({
        ...transitionState,
        messageInfo: queue.shift(),
        open3: true,
      });
    }
  };

  const handleClickQueue = message => {
    const { open3 } = transitionState;
    queue.push({
      message,
      key: new Date().getTime(),
    });

    if (open3) {
      // immediately begin dismissing current message
      // to start showing new one
      setTransition({
        ...transitionState,
        open3: false
      });
    } else {
      processQueue();
    }
  };

  const handleCloseQueue = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setTransition({
      ...transitionState,
      open3: false
    });
  };

  const handleExited = () => {
    processQueue();
  };

  const handleClick = transition => {
    setTransition({
      ...transitionState,
      open: true,
      transition
    });
  };

  const handleClose = () => {
    setTransition({
      ...transitionState,
      open: false
    });
  };

  const handleClick2 = () => {
    setTransition({
      ...transitionState,
      open2: true
    });
  };

  const handleClose2 = () => {
    setTransition({
      ...transitionState,
      open2: false
    });
  };

  const {
    classes
  } = useStyles();
  const {
    messageInfo,
    open,
    open2,
    open3,
    transition
  } = transitionState;
  const { message, key } = messageInfo;
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Transition</Typography>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => handleClick(TransitionLeft)}>Right</Button>
          <Button variant="contained" className={classes.button} onClick={() => handleClick(TransitionUp)}>Up</Button>
          <Button variant="contained" className={classes.button} onClick={() => handleClick(TransitionRight)}>Left</Button>
          <Button variant="contained" className={classes.button} onClick={() => handleClick(TransitionDown)}>Down</Button>
          <Snackbar
            open={open}
            onClose={() => handleClose()}
            TransitionComponent={transition}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span>I love snacks</span>}
          />
        </div>
      </Grid>
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Change Transition</Typography>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => handleClick2()}>Open with Fade Transition</Button>
          <Snackbar
            open={open2}
            onClose={() => handleClose2()}
            TransitionComponent={Fade}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span>I love snacks</span>}
          />
        </div>
      </Grid>
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Consecutive Snackbars</Typography>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => handleClickQueue('message a')}>Show message A</Button>
          <Button variant="contained" className={classes.button} onClick={() => handleClickQueue('message b')}>Show message B</Button>
          <Snackbar
            key={key}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open3}
            autoHideDuration={6000}
            onClose={() => handleCloseQueue()}
            TransitionProps={{
              onExited: handleExited
            }}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span>{message}</span>}
            action={[
              <Button key="undo" color="secondary" size="small" onClick={() => handleClose2()}>
                UNDO
              </Button>,
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={() => handleCloseQueue()}
                size="large">
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default TransitionNotif;
