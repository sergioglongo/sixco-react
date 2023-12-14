import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';

const emails = ['username@mail.com', 'user02@mail.com'];
const useStyles = makeStyles()(() => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}));

const SimpleDialog = props => {
  const {
    classes
  } = useStyles();
  const {
    onClose,
    selectedValue,
    ...other
  } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" {...other}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <div>
        <List>
          {emails.map(email => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
          <ListItem button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="add account" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const SimpleDialogWrapped = SimpleDialog;

function SelectDialog() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <div>
      <Grid container justifyContent="center" direction="column">
        <Typography variant="subtitle1">
          Selected:&nbsp;
          <strong>
            {selectedValue}
          </strong>
        </Typography>
        <br />
        <Button variant="outlined" color="primary" onClick={() => handleClickOpen()}>Open simple dialog</Button>
        <SimpleDialogWrapped
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Grid>
    </div>
  );
}

export default SelectDialog;
