import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import { formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { PapperBlock } from 'dan-components';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import useStyles from './userprofile-jss';


const renderRadioGroup = ({ input, ...rest }) => (
    <RadioGroup
        {...input}
        {...rest}
        valueselected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

// validation functions
const required = value => (value == null ? 'Requerido' : undefined);
const maxLength = max => value => (value && value.length > max ? `Tiene que tener ${max} caracteres o menos` : undefined);

const maxLength2 = maxLength(2);
const maxLength3 = maxLength(3);
const maxLength4 = maxLength(4);
const maxLength30 = maxLength(30);

const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Email inválido'
        : undefined
);

const numerico = value => (
    isNaN(value) ? 'Ingrese solo números' : undefined
);

const string = value => (
    !numerico(value) ? 'Ingrese solo caracteres' : undefined
);


const getSelect = ({
    input, options, name, id, required, loading, placeholder
}) => (
    <>
        <InputLabel>{placeholder}</InputLabel>
        <Select
            {...input}
            id={id}
            name={name}
            value={input.value}
            validate={required}
            isLoading={loading}
            onChange={(value) => { input.onChange(value); }}
            onBlur={(value) => { }}
            onBlurResetsInput={false}
            required
        >
            <MenuItem value={null} disabled>{placeholder}</MenuItem>
            {options.map(item => (
                // @ts-ignore - necessary to load object into value
                <MenuItem value={item.label}>{item.label}</MenuItem>
            )
            )}
        </Select>
    </>
);

function EditUserForm(props) {
    const history = useHistory();
    const trueBool = true;
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        clientData,
        // listabarrio,
        init,
        // barrioSeleccionado
    } = props;

    useEffect(() => {
        // init(clientData);
        init(
            {
                apellido: 'Longo'
            }
        )
        console.log("init clientData en form", clientData);
    }, [init, clientData,]);
    const { classes } = useStyles();
    // console.log("clientData", clientData);

    return (
        <PapperBlock title="Editar perfil" whiteBg icon="ion-ios-contact" desc="">
            {clientData
                && (
                    <form onSubmit={handleSubmit}>
                        {clientData.tipo_documento == 'CUIT' ? (
                            <>
                                {/* EMPRESA */}
                                <div>
                                    <FormControl className={classes.field}>
                                        <Field
                                            name="cf_945"
                                            component={TextFieldRedux}
                                            placeholder="Razón Social"
                                            label="Razón Social"
                                            validate={required}
                                            className={classes.field}
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.field}>
                                        <Field
                                            name="accountname"
                                            component={TextFieldRedux}
                                            placeholder="Nombre Fantasía"
                                            label="Nombre Fantasía"
                                            validate={required}
                                            className={classes.field}
                                        />
                                    </FormControl>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* INDIVIDUO */}
                                <div>
                                    <FormControl className={classes.field}>
                                        <Field
                                            name="accountname"
                                            component={TextFieldRedux}
                                            placeholder="Nombre"
                                            label="Nombre"
                                            required
                                            validate={required}
                                            className={classes.field}
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
                                            className={classes.field}
                                        />
                                    </FormControl>
                                </div>

                            </>
                        )}

                        <div>
                            <FormControl className={classes.field}>
                                <Field
                                    name="phone"
                                    component={TextFieldRedux}
                                    placeholder="Teléfono Principal"
                                    label="Teléfono Principal"
                                    validate={[numerico]}
                                    className={classes.field}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormControl className={classes.field}>
                                <Field
                                    name="email1"
                                    component={TextFieldRedux}
                                    placeholder="Email"
                                    label="Email"
                                    required
                                    validate={[required, email]}
                                    className={classes.field}
                                />
                            </FormControl>
                        </div>
                        {/* <div>
              <FormControl className={classes.field}>
                <Field
                  component={getSelect}
                  options={listabarrio}
                  name="listabarrio"
                  placeholder="Seleccione su Barrio"
                  validate={required}
                  autoWidth={trueBool}
                />
              </FormControl>
            </div> */}
                        {/* { barrioSeleccionado !== "" &&  */}
                        {/* <div>
                            <FormControl className={classes.field}>
                                <Field
                                    component={getSelect}
                                    name="tipo"
                                    options={[{ label: 'Calle', value: 'Calle' }, { label: 'Pasaje', value: 'Pasaje' }, { label: 'Peatonal', value: 'Peatonal' }, { label: 'Avenida', value: 'Avenida' }, { label: 'Avenida Circunvalación', value: 'Avenida Circunvalación' }, { label: 'Ruta Provincial', value: 'Ruta Provincial' }]}
                                    //  style={{
                                    //   display: !barrioSeleccionado ? 'none' : 'block',
                                    // }}
                                    validate={required}
                                    placeholder="Tipo"
                                />
                            </FormControl>
                        </div> */}
                        {/* } */}
                        <div>
                            <FormControl className={classes.field}>
                                <Field
                                    name="domicilio"
                                    component={TextFieldRedux}
                                    validate={[required, string, maxLength30]}
                                    label="Domicilio"
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.field}>
                                <Field
                                    name="bill_code"
                                    component={TextFieldRedux}
                                    placeholder="Código Postal"
                                    label="Código Postal"
                                    required
                                    validate={[required]}
                                />
                            </FormControl>
                        </div>
                        <div>
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
                )
            }
        </PapperBlock>
    );
}

EditUserForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    clientData: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    init: bindActionCreators(initAction, dispatch),
    clear: () => dispatch(clearAction),
});

const EditUserFormMapped = reduxForm({
    form: 'profileForm',
    // enableReinitialize: true /* If your initialValues prop gets updated, your form will update too */
})(EditUserForm);

const EditUserForms = connect(
    state => ({
        initialValues: state.initval.formValues
        // barrioSeleccionado: state.getIn([state,'formValues'])
    }),
    mapDispatchToProps,
)(EditUserFormMapped);

export default EditUserForms;
