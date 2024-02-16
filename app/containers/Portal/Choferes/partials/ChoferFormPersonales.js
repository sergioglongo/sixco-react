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
import { Grid, InputLabel, Select } from '@mui/material';
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
const tiposDocumento = [
    { id: 'DNI', label: 'DNI' },
    { id: 'LE', label: 'LE' },
    { id: 'LC', label: 'LC' },
    { id: 'Pasaporte', label: 'Pasaporte' },
]
const nacionalidades = [
    { id: 'Argentino', label: 'Argentino' },
    { id: 'Extranjero', label: 'Extranjero' },
]
const paisesNacimiento = [
    { id: 54, label: 'Argentina' },
    { id: 34, label: 'España' },
]
const provincias = [
    { id: 1, label: 'Buenos Aires' },
    { id: 2, label: 'Cordoba' },
    { id: 3, label: 'Tucuman' },
]
const ciudades = [
    { id: 1, label: 'Ciudad Autonoma Bs As' },
    { id: 2, label: 'Cordoba Capital' },
    { id: 3, label: 'San Miguel de Tucuman' },
]
const sexos = [
    { id: 'Masculino', label: 'Masculino' },
    { id: 'Femenino', label: 'Femenino' },
    { id: 'No declarado', label: 'No declarado' },
]
const estadosCiviles = [
    { id: 'Casado', label: 'Casado' },
    { id: 'Soltero', label: 'Soltero' },
    { id: 'Divorciado', label: 'Divorciado' },
]
const nivelesInstitucion = [
    { id: 'Primario', label: 'Primario' },
    { id: 'Secundario', label: 'Secundario' },
    { id: 'Terciario', label: 'Terciario' },
    { id: 'Universitario', label: 'Universitario' },
    { id: 'Post Grado', label: 'Post Grado' },
]

function ChoferFormPersonales(props) {
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
        <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
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
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
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
            </Grid>
            <Grid item xs={3} sm={3}>
                <FormControl variant="standard" fullWidth >
                    <InputLabel htmlFor="age-native-simple">Tipo documento</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.tipoDocumento || 1}
                        onChange={(event) => handleInputChange('tipoDocumento', event.target.value)}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {tiposDocumento.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={9} sm={4}>
                <FormControl fullWidth>
                    <Field
                        name="nroDocumento"
                        component={TextFieldErrorRedux}
                        placeholder="30123456"
                        label="N° Documento"
                        required
                        validate={[required, numerico]}
                        onChange={(event) => handleInputChange('nroDocumento', event.target.value)}
                        value={formData?.nroDocumento || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                <FormControl fullWidth>
                    <Field
                        name="cuil"
                        component={TextFieldErrorRedux}
                        placeholder="20301234564"
                        label="N° CUIL"
                        required
                        validate={[required, numerico]}
                        onChange={(event) => handleInputChange('cuil', event.target.value)}
                        value={formData?.cuil || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormControl variant="standard" fullWidth >
                    <InputLabel htmlFor="age-native-simple">Nacionalidad</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.nacionalidad || 1}
                        onChange={(event) => handleInputChange('nacionalidad', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {nacionalidades.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Pais Nacimiento</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.paisNacimiento || 1}
                        onChange={(event) => handleInputChange('paisNacimiento', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {paisesNacimiento.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>

            </Grid>

            <Grid item xs={12} sm={3}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Sexo</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.sexo || 1}
                        onChange={(event) => handleInputChange('sexo', event.target.value)}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {sexos.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Nivel de Estudio</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.nivelInstitucion || 1}
                        onChange={(event) => handleInputChange('nivelInstitucion', event.target.value)}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {nivelesInstitucion.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

ChoferFormPersonales.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    clientData: PropTypes.object,
    edit: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
    init: bindActionCreators(initAction, dispatch),
    clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
    form: 'nuevoChofer',
    enableReinitialize: true,
})(ChoferFormPersonales);

const ChoferFormPersonalesInit = connect(
    state => ({
        initialValues: state.initval.formValues
    }),
    mapDispatchToProps,
)(ReduxFormMapped);

export default ChoferFormPersonalesInit;
