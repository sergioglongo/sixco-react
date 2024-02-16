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
import { Grid, InputLabel, Select, TextField } from '@mui/material';
import { toInteger } from 'lodash';
import { TextFieldErrorRedux, TextFieldRedux } from '../../../../components/Forms/ReduxFormMUI';
import useStyles from '../choferes-jss';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

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
const puestosJerarquicos = [
    { id: 1, label: 'Jerarquia 1' },
    { id: 2, label: 'Jerarquia 2' },
    { id: 3, label: 'Jerarquia 3' },
]
const tiposContacto = [
    { id: 1, label: 'Tipo contacto 1' },
    { id: 2, label: 'Tipo contacto 2' },
    { id: 3, label: 'Tipo contacto 3' },
]
const afectadoAList = [
    { id: 1, label: 'Afectado a 1' },
    { id: 2, label: 'Afectado a 2' },
    { id: 3, label: 'Afectado a 3' },
]
const estadosAfiliacion = [
    { id: 'Dentro de convenio', label: 'Dentro de convenio' },
    { id: 'Fuera de convenio', label: 'Fuera de convenio' },
]
const categoriasConvenio = [
    { id: 1, label: 'Categoria de convenio 1' },
    { id: 2, label: 'Categoria de convenio 2' },
    { id: 3, label: 'Categoria de convenio 3' },
]
const conveniosColectivos = [
    { id: 1, label: 'Convenio colectivo 1' },
    { id: 2, label: 'Convenio colectivo 2' },
    { id: 3, label: 'Convenio colectivo 3' },
]

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

function ChoferFormContacto(props) {
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
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                    <Field
                        name="puestoEmpresa"
                        component={TextFieldErrorRedux}
                        placeholder="puesto"
                        label="Puesto en la Empresa"
                        required
                        validate={[required, string]}
                        onChange={(event) => handleInputChange('puestoEmpresa', event.target.value)}
                        value={formData?.puestoEmpresa || ''}
                    />
                </FormControl>
            </Grid> <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <Field
                        name="legajo"
                        component={TextFieldErrorRedux}
                        placeholder="12345"
                        label="Legajo"
                        required
                        validate={[required, numerico]}
                        onChange={(event) => handleInputChange('legajo', event.target.value)}
                        value={formData?.legajo || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Puesto Jerárquico</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.puestoJerarquico || 1}
                        onChange={(event) => handleInputChange('puestoJerarquico', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {puestosJerarquicos.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <Field
                        name="hsNormales"
                        component={TextFieldErrorRedux}
                        placeholder="8"
                        label="Horas Laborales"
                        validate={[required, numerico]}
                        onChange={(event) => handleInputChange('hsNormales', event.target.value)}
                        value={formData?.hsNormales || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Tipo de Contacto</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.tipoContacto || 1}
                        onChange={(event) => handleInputChange('tipoContacto', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {tiposContacto.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Afectado A</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.afectadoA || 1}
                        onChange={(event) => handleInputChange('afectadoA', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {afectadoAList.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                {/* <InputLabel htmlFor="age-native-simple">Fecha de Alta</InputLabel> */}
                <FormControl variant="standard" fullWidth>
                    <Field
                        name="end"
                        component={DateTimePickerRow}
                        placeholder="Fecha Alta"
                        value={formData?.fechaAlta}
                        onChange={(event) => handleInputChange('fechaAlta', toInteger(event.target.value))}
                        label="Fecha de Alta"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Estado de Afiliación</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.estadoAfiliacion || 1}
                        onChange={(event) => handleInputChange('estadoAfiliacion', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {estadosAfiliacion.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Convenio colectivo</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.convenioColectivo || 1}
                        onChange={(event) => handleInputChange('convenioColectivo', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {conveniosColectivos.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

ChoferFormContacto.propTypes = {
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
})(ChoferFormContacto);

const ChoferFormContactoInit = connect(
    state => ({
        initialValues: state.initval.formValues
    }),
    mapDispatchToProps,
)(ReduxFormMapped);

export default ChoferFormContactoInit;
