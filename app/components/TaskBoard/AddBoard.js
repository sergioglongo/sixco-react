import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import Add from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import FloatingPanel from '../Panel/FloatingPanel';
import AddBoardForm from './AddBoardForm';
import useStyles from './taskBoard-jss.js';

function AddEvent(props) {
  const showResult = (values) => {
    setTimeout(() => {
      props.submit(values); // eslint-disable-line
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
      <Tooltip title="Add New Board">
        <Fab color="secondary" onClick={() => addEvent()} className={classes.addBtn}>
          <Add />
        </Fab>
      </Tooltip>
      <FloatingPanel title="Add New Board" openForm={openForm} branch={branch} closeForm={() => closeForm()}>
        <AddBoardForm onSubmit={(values) => showResult(values)} />
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
