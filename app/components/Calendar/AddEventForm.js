import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import css from 'dan-styles/Form.scss';
import { TextFieldRedux } from '../Forms/ReduxFormMUI';
import useStyles from './calendar-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);

const DateTimePickerRow = props => {
  const {
    showErrorsInline,
    dispatch,
    input: { onChange, value },
    ...other
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileDatePicker
        label="DateTimePicker"
        inputFormat="DD/MM/YYYY"
        value={value || new Date()}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
        {...other}
      />
    </LocalizationProvider>
  );
};

DateTimePickerRow.propTypes = {
  showErrorsInline: PropTypes.bool,
  dispatch: PropTypes.func,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

DateTimePickerRow.defaultProps = {
  showErrorsInline: false,
  dispatch: () => { },
};

function AddEventForm(props) {
  const [selectedDate, setSelectDate] = useState(new Date());

  const onChangeDate = date => {
    setSelectDate(date);
  };

  const saveRef = ref => ref;

  const { classes } = useStyles();
  const {
    reset,
    pristine,
    submitting,
    handleSubmit,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={css.bodyForm}>
          <div>
            <Field
              name="title"
              component={TextFieldRedux}
              placeholder="Event Name"
              label="Event Name"
              validate={required}
              required
              ref={saveRef}
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="start"
              component={DateTimePickerRow}
              placeholder="Start Date"
              value={selectedDate}
              onChange={onChangeDate}
              label="Start Date"
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="end"
              component={DateTimePickerRow}
              placeholder="End Date"
              value={selectedDate}
              onChange={onChangeDate}
              label="End Date"
              className={classes.field}
            />
          </div>
          <div className={classes.fieldBasic}>
            <FormLabel component="label">Label Color</FormLabel>
            <Field name="hexColor" className={classes.inlineWrap} component={renderRadioGroup}>
              <FormControlLabel value="EC407A" control={<Radio className={classes.redRadio} classes={{ root: classes.redRadio, checked: classes.checked }} />} label="Red" />
              <FormControlLabel value="43A047" control={<Radio className={classes.greenRadio} classes={{ root: classes.greenRadio, checked: classes.checked }} />} label="Green" />
              <FormControlLabel value="2096f3" control={<Radio className={classes.blueRadio} classes={{ root: classes.blueRadio, checked: classes.checked }} />} label="Blue" />
              <FormControlLabel value="AB47BC" control={<Radio className={classes.violetRadio} classes={{ root: classes.violetRadio, checked: classes.checked }} />} label="Violet" />
              <FormControlLabel value="FF5722" control={<Radio className={classes.orangeRadio} classes={{ root: classes.orangeRadio, checked: classes.checked }} />} label="Orange" />
            </Field>
          </div>
        </section>
        <div className={css.buttonArea}>
          <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

AddEventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const AddEventFormRedux = reduxForm({
  form: 'calendarForm',
  enableReinitialize: true,
})(AddEventForm);

const AddEventInit = connect(
  state => ({
    initialValues: state.calendar.formValues
  }),
)(AddEventFormRedux);

export default AddEventInit;
