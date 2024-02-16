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
                        name="calle"
                        component={TextFieldErrorRedux}
                        placeholder="Calle"
                        label="Calle"
                        required
                        validate={[required, string, maxLength]}
                        onChange={(event) => handleInputChange('calle', event.target.value)}
                        value={formData?.calle || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
                <FormControl fullWidth>
                    <Field
                        name="altura"
                        component={TextFieldErrorRedux}
                        placeholder="1235°"
                        label="Altura n°"
                        required
                        validate={[required, string, maxLength]}
                        onChange={(event) => handleInputChange('altura', event.target.value)}
                        value={formData?.altura || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
                <FormControl fullWidth>
                    <Field
                        name="cp"
                        component={TextFieldErrorRedux}
                        placeholder="4105"
                        label="Codigo Postal"
                        onChange={(event) => handleInputChange('cp', event.target.value)}
                        value={formData?.cp || ''}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Ciudad</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.ciudad || 1}
                        onChange={(event) => handleInputChange('ciudad', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {ciudades.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="age-native-simple">Provincia</InputLabel>
                    <Select
                        variant="standard"
                        native
                        value={formData?.provincia || 1}
                        onChange={(event) => handleInputChange('provincia', toInteger(event.target.value))}
                        inputProps={{
                            id: 'age-native-simple',
                        }}>
                        {provincias.map((item) => (
                            <option value={item.id} key={item.id}>{item.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={7}>
                <FormControl fullWidth>
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
            </Grid>
            <Grid item xs={12} sm={5}>
                <FormControl fullWidth>
                    <Field
                        name="telefono"
                        component={TextFieldErrorRedux}
                        placeholder="115555555"
                        label="Telefono"
                        required
                        validate={[required, numerico]}
                        onChange={(event) => handleInputChange('telefono', event.target.value)}
                        value={formData?.telefono || ''}
                    />
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
