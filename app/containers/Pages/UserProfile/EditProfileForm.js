import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
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

const useStyles = makeStyles()((theme) => ({
    root: {
        flexGrow: 1,
        padding: 30
    },
    field: {
        width: '100%',
        marginBottom: 20
    },
    fieldBasic: {
        width: '100%',
        marginBottom: 20,
        marginTop: 10
    },
    inlineWrap: {
        display: 'flex',
        flexDirection: 'row'
    },
    buttonInit: {
        margin: theme.spacing(4),
        textAlign: 'center'
    },
}));
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

function EditProfileForm(props) {
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
        clientData
    } = props;
    const history = useHistory();
    useEffect(() => {
        init(clientData);
        console.log("clientdata datos", clientData)
        return () => {
            clear();
        }
    }, [init, clientData]);

    return (
        <PapperBlock title="Editar perfil" whiteBg icon="ion-ios-contact" desc="">
            <form onSubmit={handleSubmit}>
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
                            name="codigopostal"
                            component={TextFieldRedux}
                            placeholder="Código Postal"
                            label="Código Postal"
                            required
                            validate={[required]}
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
                            className={classes.field}
                        />
                    </FormControl>
                </div>
                <div>
                    <Button
                        type="button"
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
    clientData: PropTypes.object.isRequired,
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
