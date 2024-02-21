import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { PapperBlock } from 'dan-components';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import FormControl from '@mui/material/FormControl';
import useStyles from './userprofile-jss';
import { TextFieldErrorRedux } from '../../../components/Forms/ReduxFormMUI';

// validation functions
const required = value => (value == null ? 'Requerido' : undefined);
const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Contraseñas no coinciden';
    
  }
  return undefined;
};

function ChangePasswordForm(props) {
  const history = useHistory();
  const trueBool = true;
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    init,
    clear
  } = props;
  
  const { classes } = useStyles();
  
  useEffect(() => {
    return () => {
      clear();
    }
  }, []);

  return (
    <PapperBlock title="Cambiar Contraseña" whiteBg icon="ion-ios-contact" desc="">
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl className={classes.field}>
            <Field
              name="password"
              component={TextFieldRedux}
              type="password"
              label="Contraseña"
              required
              validate={[required, passwordsMatch]}
            />
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.field}>
            <Field
              name="passwordConfirm"
              component={TextFieldErrorRedux}
              type="password"
              label="Repetir Contraseña"
              required
              validate={[required, passwordsMatch]}
            />
          </FormControl>
        </div>
        <div style={{ marginTop: 12 }}>
          <Button
            type="button"
            
            // disabled={pristine || submitting}
            onClick={() => history.goBack()}
          >
            Cancelar
          </Button>
          <Button variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
            Guardar
          </Button>
        </div>
      </form>
    </PapperBlock>
  );
}

ChangePasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ChangePasswordFormMapped = reduxForm({
  form: 'changePassword',
})(ChangePasswordForm);

const ChangePasswordFormInit = connect(
  state => ({
    initialValues: state.initval.formValues
  }),
  mapDispatchToProps,
)(ChangePasswordFormMapped);

export default ChangePasswordFormInit;
