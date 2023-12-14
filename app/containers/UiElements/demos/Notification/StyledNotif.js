import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import MuiAlert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import messageStyles from 'dan-styles/Messages.scss';

const Alert = React.forwardRef(function Alert(props, ref) { // eslint-disable-line
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles()((theme) => ({
  snackbar: {
    margin: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const action = (
  <Button color="secondary" size="small">
    Action
  </Button>
);

function StyledNotif() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const {
    classes,
    cx
  } = useStyles();
  return (
    <Grid container alignItems="flex-start" justifyContent="center" direction="row" spacing={2}>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Default Styled Notification</Typography>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              This is a success message!
            </Alert>
          </Snackbar>
          <Alert severity="error">This is an error message!</Alert>
          <Alert severity="warning">This is a warning message!</Alert>
          <Alert severity="info">This is an information message!</Alert>
          <Alert severity="success">This is a success message!</Alert>
        </Stack>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Custom Styled Notification with CSS</Typography>
        <div>
          <SnackbarContent className={classes.snackbar} message="Notification default" action={action} />
          <SnackbarContent className={cx(classes.snackbar, messageStyles.bgInfo)} message="Notification Info" action={action} />
          <SnackbarContent className={cx(classes.snackbar, messageStyles.bgSuccess)} message="Success Notification Message" />
          <SnackbarContent className={cx(classes.snackbar, messageStyles.bgWarning)} message="I love candy. I love cookies. I love cupcakes." action={action} />
          <SnackbarContent className={cx(classes.snackbar, messageStyles.bgError)} message="I love cheesecake. I love chocolate." action={action} />
        </div>
      </Grid>
    </Grid>
  );
}

export default StyledNotif;
