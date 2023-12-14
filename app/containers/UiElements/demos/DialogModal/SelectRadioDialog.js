import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import List from '@mui/material/List';
import ConfirmationDialog from './ConfirmationDialog';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dialog: {
    width: '80%',
    maxHeight: 435,
  },
}));

function SelectRadioDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Dione');

  const handleClose = val => {
    setValue(val);
    setOpen(false);
  };

  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ConfirmationDialog
          classes={{
            paper: classes.dialog,
          }}
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  );
}

export default SelectRadioDialog;
