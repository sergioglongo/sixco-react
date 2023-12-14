import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'dan-styles/Form.scss';

function Form(props) {
  const {
    handleSubmit,
    children,
    reset,
    pristine,
    submitting,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={css.bodyForm}>
          {children}
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

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const FormMapped = reduxForm({
  form: 'editableTbForm',
  enableReinitialize: true,
})(Form);

const FormMappedInit = connect(
  state => ({
    initialValues: state.crudTableForm.formValues
  })
)(FormMapped);

export default FormMappedInit;
