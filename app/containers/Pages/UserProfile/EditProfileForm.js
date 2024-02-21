import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { PapperBlock } from 'dan-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import useStyles from './userprofile-jss';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { toNumber } from 'lodash';
import { getCiudades } from '../../../api/apiclient/ApiClient';
import { CheckboxRedux, SelectRedux } from '../../../components/Forms/ReduxFormMUI';


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
    const [provincia, setProvincia] = useState('');
    const [provinciasList, setProvinciasList] = useState([]);
    const [provinciasArgentinaList, setProvinciasArgentinaList] = useState([]);
    const [ciudad, setCiudad] = useState();
    const [codigoArea, setCodigoArea] = useState();
    const [ciudadesList, setCiudadesList] = useState([]);
    const [pais, setPais] = useState('');
    const [paisesList, setPaisesList] = useState([]);
    const [ciudadesArgentinaList, setCiudadesArgentinaList] = useState([]);
    const [ciudadesExtranjeroList, setCiudadesExtranjeroList] = useState([]);
    const [extranjero, setExtranjero] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        init(formData);
        return () => {
            clear();
        }
    }, [init, formData]);

    useEffect(() => {
        getCiudades().then(response => {
            if (typeof response !== 'undefined' && response.records) {
                const ciudadesArgentina = [];
                const ciudadesExtranjero = [];
                const provinciasArgentina = [];
                const paises = [];
                response.records.map((v, i) => {
                    //       {"othercity": "13930",     ejemplo de dato
                    //       "denominacion": "Adelia Maria",
                    //       "geo_provincia": "Cordoba",
                    //       "geo_pais": "Argentina"}
                    if (v.geo_pais === 'Argentina') {
                        ciudadesArgentina.push({
                            value: v.denominacion,
                            label: v.denominacion,
                            obj: v,
                        });
                        const provinciaArgentinaExistente = provinciasArgentina.find((provincia) => provincia.value == v.geo_provincia);
                        if (!provinciaArgentinaExistente && v.geo_pais === 'Argentina') {
                            provinciasArgentina.push({
                                value: v.geo_provincia,
                                label: v.geo_provincia,
                            });
                        }
                    }
                    else {
                        const paisExistente = paises.find((pais) => pais.value == v.geo_pais)
                        ciudadesExtranjero.push({
                            value: v.denominacion,
                            label: v.denominacion,
                            obj: v,
                        });
                        if (!paisExistente) {
                            paises.push({
                                value: v.geo_pais,
                                label: v.geo_pais,
                            });
                        }
                    }
                }
                )
                setCiudadesArgentinaList(ciudadesArgentina);
                setCiudadesExtranjeroList(ciudadesExtranjero);
                setProvinciasList(provinciasArgentina);
                setProvinciasArgentinaList(provinciasArgentina);
                setPaisesList(paises)
            }
        });
        setLoading(false);
        setCodigoArea('+54');
    }, []);

    useEffect(() => {
        setCiudad(null)
        if (extranjero) {
            setCiudadesList([])
            setProvinciasList([])
        }
        else {
            setCiudadesList([])
            setPais('')
            setProvinciasList(provinciasArgentinaList)
        }
    }, [extranjero])

    useEffect(() => {
        setCiudadesList([])
        const provincias = [];
        ciudadesExtranjeroList.map((ciudad) => {
            if (ciudad.obj.geo_pais == pais) {
                const provinciaExistente = provincias.find((provincia) => provincia.value == ciudad.obj.geo_provincia);
                if (!provinciaExistente) {
                    provincias.push({
                        value: ciudad.obj.geo_provincia,
                        label: ciudad.obj.geo_provincia,
                    });
                }
            }
        });
        setProvinciasList(provincias);
    }, [pais])

    useEffect(() => {
        const ciudadesProvincia = []
        if (provincia) {
            if (extranjero) {
                ciudadesExtranjeroList.map((ciudad) => {
                    if (ciudad.obj.geo_provincia == provincia) {
                        ciudadesProvincia.push(ciudad)
                    }
                })
                setCiudadesList(ciudadesProvincia)
            } else {
                ciudadesArgentinaList.map((ciudad) => {
                    if (ciudad.obj.geo_provincia == provincia) {
                        ciudadesProvincia.push(ciudad)
                    }
                })
                setCiudadesList(ciudadesProvincia)
            }
        } else {
            setCiudad(null)
            setCiudadesList([])
        }
    }, [provincia])

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };
    return (
        <PapperBlock title="Editar perfil" whiteBg icon="ion-ios-contact" desc="">
            <form onSubmit={handleSubmit}>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="firstname"
                            component={TextFieldRedux}
                            placeholder="Nombre"
                            label="Nombre"
                            required
                            validate={required}
                            onChange={(event) => handleInputChange('contact_firstname', event.target.value)}
                            value={formData?.firstname || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="lastname"
                            component={TextFieldRedux}
                            placeholder="Apellido"
                            label="Apellido"
                            required
                            validate={required}
                            onChange={(event) => handleInputChange('contact_lastname', event.target.value)}
                            value={formData?.lastname || ''} />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="mailingstreet"
                            component={TextFieldRedux}
                            placeholder="Domicilio"
                            label="Domicilio"
                            validate={[string]}
                            onChange={(event) => handleInputChange('contact_mobile', event.target.value)}
                            value={formData?.mailingstreet || ''}
                        />
                    </FormControl>
                </div>
                <div style={{ width: '100%' }}>
                    <FormControlLabel
                        control={
                            <Field
                                name="extranjero"
                                component={CheckboxRedux}
                                initialValue={false}
                                validate={required}
                                onChange={() => setExtranjero(!extranjero)}
                            />
                        }
                        label="Extranjero"
                    />
                </div>
                {paisesList.length > 0 && extranjero &&
                    <div style={{ width: '100%' }}>
                        <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Pais</InputLabel>
                            <Select
                                variant="standard"
                                native
                                value={pais}
                                onChange={(e) => setPais(e.target.value)}
                                inputProps={{
                                    id: 'age-native-simple',
                                }}>
                                <option key='vacio' value='vacio'></option>
                                {paisesList.map((option, index) => {
                                    return <option key={index} value={option.value}>{option.label}</option>
                                })}
                            </Select>
                        </FormControl>
                    </div>
                }
                {provinciasList.length > 0 &&
                    <div style={{ width: '100%' }}>
                        <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Provincia</InputLabel>
                            <Select
                                variant="standard"
                                native
                                value={provincia}
                                onChange={(e) => setProvincia(e.target.value)}
                                inputProps={{
                                    id: 'age-native-simple',
                                }}>
                                <option key='vacio' value='vacio'></option>
                                {provinciasList.map((option, index) => {
                                    return <option key={index} value={option.value}>{option.label}</option>
                                })}
                            </Select>
                        </FormControl>
                    </div>
                }
                {ciudadesList.length > 0 &&
                    <div style={{ width: '100%' }}>
                        <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Ciudad</InputLabel>
                            <Field
                                name="othercity"
                                component={SelectRedux}
                                value={ciudad}
                                placeholder="Selection"
                                required
                                style={{ textAlign: 'left' }}
                            >
                                {ciudadesList.map((option, index) => {
                                    return <MenuItem key={index} value={option.obj.othercity}>{option.label}</MenuItem>
                                })}
                            </Field>
                        </FormControl>
                    </div>
                }
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="mobile"
                            component={TextFieldRedux}
                            placeholder="Teléfono Principal"
                            label="Teléfono Principal"
                            validate={[string]}
                            onChange={(event) => handleInputChange('contact_mobile', event.target.value)}
                            value={formData?.mobile || ''}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="siccode"
                            component={TextFieldRedux}
                            // validate={[required, string, maxLength30]}
                            label="CUIT / DNI"
                            // onChange={(event) => handleInputChange('account_nro_doc', event.target.value)}
                            value={formData?.siccode || ''}
                            disabled
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
                            // validate={[required, email]}
                            // onChange={(event) => handleInputChange('email', event.target.value)}
                            value={formData?.email || ''}
                            disabled
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.field}>
                        <Field
                            name="accountname"
                            component={TextFieldRedux}
                            placeholder="Cuenta"
                            label="Cuenta"
                            // validate={[required, email]}
                            // onChange={(event) => handleInputChange('email', event.target.value)}
                            value={formData?.accountname || ''}
                            disabled
                        />
                    </FormControl>
                </div>
                {/* <div style={{ width: 200, marginBottom: 20 }}>
                    <FormControl variant="standard" className={classes.field}>
                        <InputLabel htmlFor="age-native-simple">Estado</InputLabel>
                        <Select
                            variant="standard"
                            native
                            name='tipo_contacto'
                            value={formData?.tipo_contacto || 1}
                            onChange={(event) => handleInputChange('estado', toNumber(event.target.value))}
                            inputProps={{
                                id: 'age-native-simple',
                            }}>
                            {estados.map((item) => (
                                <option value={item.id} key={item.id}>{item.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                </div> */}
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
