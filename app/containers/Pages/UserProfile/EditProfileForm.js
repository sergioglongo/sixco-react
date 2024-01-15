import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { PapperBlock } from 'dan-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import useStyles from './userprofile-jss';
import { InputLabel, Select } from '@mui/material';
import { toNumber } from 'lodash';

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioGroup
        {...input}
        {...rest}
        valueselected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined
);

const string = value => (
    !numerico(value) ? 'Ingrese solo caracteres' : undefined
);

const numerico = value => (
    isNaN(value) ? 'Ingrese solo números' : undefined
);

const maxLength = max => value => (value && value.length > max ? `Tiene que tener ${max} caracteres o menos` : undefined);

const maxLength30 = maxLength(30);

const initData = {
    text: 'Sample Text',
    email: 'sample@mail.com',
    radio: 'option1',
    selection: 'option1',
    onof: true,
    checkbox: true,
    textarea: 'This is default text'
};

const estados = [
    { id: 1, label: 'Habilitado' },
    { id: 2, label: 'Deshabilitado' },
    { id: 3, label: 'Incompleto' },
    { id: 4, label: 'Suspendido' },
]

function EditProfileForm(props) {
    const {
        classes
    } = useStyles();
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        init,
        clear,
        formData,
        setFormData
    } = props;
    const history = useHistory();
    useEffect(() => {
        init(formData);
        return () => {
            clear();
        }
    }, [init, formData]);
    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };
    return (
        <PapperBlock title="Editar perfil" whiteBg icon="ion-ios-contact" desc="">
            <form onSubmit={handleSubmit}>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="nombre"
                            component={TextFieldRedux}
                            placeholder="Nombre"
                            label="Nombre"
                            required
                            validate={required}
                            onChange={(event) => handleInputChange('nombre', event.target.value)}
                            value={formData?.nombre || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="apellido"
                            component={TextFieldRedux}
                            placeholder="Apellido"
                            label="Apellido"
                            required
                            validate={required}
                            onChange={(event) => handleInputChange('apellido', event.target.value)}
                            value={formData?.apellido || ''}                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="telefono"
                            component={TextFieldRedux}
                            placeholder="Teléfono Principal"
                            label="Teléfono Principal"
                            validate={[numerico]}
                            onChange={(event) => handleInputChange('telefono', event.target.value)}
                            value={formData?.telefono || ''}
                            />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="domicilio"
                            component={TextFieldRedux}
                            validate={[required, string, maxLength30]}
                            label="Domicilio"
                            onChange={(event) => handleInputChange('domicilio', event.target.value)}
                            value={formData?.domicilio || ''}
                            />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="codigopostal"
                            component={TextFieldRedux}
                            placeholder="Código Postal"
                            label="Código Postal"
                            required
                            validate={[required]}
                            onChange={(event) => handleInputChange('codigopostal', event.target.value)}
                            value={formData?.codigopostal || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="email"
                            component={TextFieldRedux}
                            placeholder="Email"
                            label="Email"
                            required
                            validate={[required, email]}
                            onChange={(event) => handleInputChange('email', event.target.value)}
                            value={formData?.email || ''}
                        />
                    </FormControl>
                </div>
                <div style={{ width: 200, marginBottom: 20 }}>
                    <FormControl variant="standard" className={classes.field}>
                        <InputLabel htmlFor="age-native-simple">Estado</InputLabel>
                        <Select
                            variant="standard"
                            native
                            name='estado'
                            value={formData?.estado || 1}
                            onChange={(event) => handleInputChange('estado', toNumber(event.target.value))}
                            inputProps={{
                                id: 'age-native-simple',
                            }}>
                            {estados.map((item) => (
                                <option value={item.id} key={item.id}>{item.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.buttonGroup}>
                    <Button
                        type="button"
                        onClick={() => history.goBack()}
                    >
                        Cancelar
                    </Button>
                    <Button variant="contained" color="primary" type="submit" disabled={submitting}>
                        Guardar
                    </Button>
                </div>
            </form>
        </PapperBlock>
    );
}

renderRadioGroup.propTypes = {
    input: PropTypes.object.isRequired,
};

EditProfileForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    formData: PropTypes.object,
    setFormData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    init: bindActionCreators(initAction, dispatch),
    clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
    form: 'editProfile',
    enableReinitialize: true,
})(EditProfileForm);

const EditProfileFormInit = connect(
    state => ({
        initialValues: state.initval.formValues
    }),
    mapDispatchToProps,
)(ReduxFormMapped);

export default EditProfileFormInit;
