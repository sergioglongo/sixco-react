import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import { PapperBlock } from 'dan-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import { InputLabel, Select } from '@mui/material';
import { toInteger } from 'lodash';
import { TextFieldErrorRedux } from '../../../../components/Forms/ReduxFormMUI';
import useStyles from '../choferes-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined
);

const string = value => (
    value && !numerico(value) ? 'Ingrese solo caracteres' : undefined
);

const numerico = value => (
    value && isNaN(value) ? 'Ingrese solo números' : undefined
);
const maxLengthValue = max => value => (value && value.length > max ? `Máximo de ${max} caracteres superados` : undefined);

const maxLength = maxLengthValue(50);

const estados = [
    { id: 1, label: 'Habilitado' },
    { id: 2, label: 'Deshabilitado' },
    { id: 3, label: 'Portal' },
    { id: 4, label: 'Suspendido' },
]

function FormularioNuevoChofer(props) {
    const trueBool = true;
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
        edit,
        setFormData,
    } = props;
    const history = useHistory();
    useEffect(() => {
        console.log("formData", formData)
        if (formData)
            init(formData)
        else
            clear()
        return () => {
            clear();
        }
    }, [init, formData]);

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };

    return (
        <PapperBlock title={edit ? "Editar Chofer" : "Nuevo Chofer"} whiteBg icon="ion-ios-person" desc="">
            <form onSubmit={handleSubmit}>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="nombre"
                            component={TextFieldErrorRedux}
                            placeholder="Nombre"
                            label="Nombre"
                            required
                            validate={[required, string, maxLength]}
                            onChange={(event) => handleInputChange('nombre', event.target.value)}
                            value={formData?.nombre || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="apellido"
                            component={TextFieldErrorRedux}
                            placeholder="Apellido"
                            label="Apellido"
                            required
                            validate={[required, string, maxLength]}
                            onChange={(event) => handleInputChange('apellido', event.target.value)}
                            value={formData?.apellido || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="email"
                            component={TextFieldErrorRedux}
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
                            value={formData?.estado || 1}
                            onChange={(event) => handleInputChange('estado', toInteger(event.target.value))}
                            inputProps={{
                                id: 'age-native-simple',
                            }}>
                            {estados.map((item) => (
                                <option value={item.id} key={item.id}>{item.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => history.goBack()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={
                            submitting ||
                            !(formData &&
                                (formData.nombre || formData.apellido || formData.email)
                            )
                        }
                    >
                        Guardar
                    </Button>
                </div>
            </form>
        </PapperBlock>
    );
}

FormularioNuevoChofer.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    clientData: PropTypes.object.isRequired,
    edit: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
    init: bindActionCreators(initAction, dispatch),
    clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
    form: 'nuevoChofer',
    enableReinitialize: true,
})(FormularioNuevoChofer);

const FormularioNuevoChoferInit = connect(
    state => ({
        initialValues: state.initval.formValues
    }),
    mapDispatchToProps,
)(ReduxFormMapped);

export default FormularioNuevoChoferInit;
