import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import Add from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import FloatingPanel from '../Panel/FloatingPanel';
import AddEventForm from './AddEventForm';
import useStyles from './calendar-jss.js';

function AddEvent(props) {
  const showResult = (values) => {
    const { submit } = props;
    setTimeout(() => {
      submit(values);
    }, 500); // simulate server latency
  };

  const { classes } = useStyles();
  const {
    openForm,
    closeForm,
    addEvent
  } = props;
  const branch = '';
  return (
    <div>
      <Tooltip title="Add New Event">
        <Fab color="secondary" onClick={() => addEvent()} className={classes.addBtn}>
          <Add />
        </Fab>
      </Tooltip>
      <FloatingPanel title="Add New Event" openForm={openForm} branch={branch} closeForm={() => closeForm()}>
        <AddEventForm onSubmit={(values) => showResult(values)} />
      </FloatingPanel>
    </div>
  );
}

AddEvent.propTypes = {
  openForm: PropTypes.bool.isRequired,
  addEvent: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default AddEvent;
