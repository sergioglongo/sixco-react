import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

function handleDelete() {
  alert('You clicked the delete icon.');
}

function handleClick() {
  alert('You clicked the Chip.');
}

function BasicTags() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.root}>
      <Chip label="Basic Tag" className={classes.chip} color="primary" />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Tag"
        onClick={handleClick}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={<Avatar src="/images/pp_girl.svg" />}
        label="Deletable Tag"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        avatar={(
          <Avatar>
            <FaceIcon />
          </Avatar>
        )}
        label="Clickable Deletable Tag"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        label="Custom delete icon Tag"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
      />
    </div>
  );
}

export default BasicTags;
