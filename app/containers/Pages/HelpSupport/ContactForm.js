import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { PapperBlock } from 'dan-components';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import useStyles from './helpSupport-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

function ContactForm(props) {
  const trueBool = true;
  const { classes } = useStyles();
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;
  return (
    <PapperBlock title="Contact Us" whiteBg icon="ion-ios-call-outline" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={TextFieldRedux}
            placeholder="Name"
            label="Name"
            validate={required}
            required
            className={classes.field}
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextFieldRedux}
            placeholder="Email Field"
            label="Email"
            required
            validate={[required, email]}
            className={classes.field}
          />
        </div>
        <div className={classes.field}>
          <Field
            name="message"
            className={classes.field}
            component={TextFieldRedux}
            validate={required}
            placeholder="Message"
            label="Message"
            multiline={trueBool}
            rows={4}
          />
        </div>
        <div>
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
    </PapperBlock>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ContactFormMapped = reduxForm({
  form: 'contactForm',
})(ContactForm);

const FormInit = connect(
  state => ({
    initialValues: state.initval.formValues
  }),
  mapDispatchToProps,
)(ContactFormMapped);

export default FormInit;
