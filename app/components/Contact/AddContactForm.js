import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Type from 'dan-styles/Typography.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';
import PermContactCalendar from '@mui/icons-material/PermContactCalendar';
import Bookmark from '@mui/icons-material/Bookmark';
import LocalPhone from '@mui/icons-material/LocalPhone';
import Email from '@mui/icons-material/Email';
import Smartphone from '@mui/icons-material/Smartphone';
import LocationOn from '@mui/icons-material/LocationOn';
import Work from '@mui/icons-material/Work';
import Language from '@mui/icons-material/Language';
import css from 'dan-styles/Form.scss';
import { TextFieldRedux } from '../Forms/ReduxFormMUI';
import useStyles from './contact-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

function AddContactForm(props) {
  const saveRef = useRef(null);

  const { classes } = useStyles();
  const {
    reset,
    pristine,
    submitting,
    handleSubmit,
    onDrop,
    imgAvatar
  } = props;
  let dropzoneRef;
  const acceptedFiles = ['image/jpeg', 'image/png', 'image/bmp'];
  const fileSizeLimit = 300000;
  const imgPreview = img => {
    if (typeof img !== 'string' && img !== '') {
      return URL.createObjectURL(imgAvatar);
    }
    return img;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={css.bodyForm}>
          <div>
            <Typography display="block" variant="button" className={Type.textCenter}>Upload Avatar</Typography>
            <Dropzone
              className={classes.hiddenDropzone}
              accept={acceptedFiles.join(',')}
              acceptClassName="stripes"
              onDrop={onDrop}
              maxSize={fileSizeLimit}
              ref={(node) => { dropzoneRef = node; }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
            <div className={classes.avatarWrap}>
              <Avatar
                alt="John Doe"
                className={classes.uploadAvatar}
                src={imgPreview(imgAvatar)}
              />
              <Tooltip id="tooltip-upload" title="Upload Photo">
                <IconButton
                  className={classes.buttonUpload}
                  component="button"
                  onClick={() => {
                    dropzoneRef.open();
                  }}
                  size="large">
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div>
            <Field
              name="name"
              component={TextFieldRedux}
              placeholder="Name"
              label="Name"
              validate={required}
              required
              ref={saveRef}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PermContactCalendar />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="title"
              component={TextFieldRedux}
              placeholder="Title"
              label="Title"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Bookmark />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="phone"
              component={TextFieldRedux}
              placeholder="Phone"
              type="tel"
              label="Phone"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhone />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="secondaryPhone"
              component={TextFieldRedux}
              placeholder="Secondary Phone"
              type="tel"
              label="Secondary Phone"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Smartphone />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="personalEmail"
              component={TextFieldRedux}
              placeholder="Personal Email"
              type="email"
              validate={email}
              label="Personal Email"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="companyEmail"
              component={TextFieldRedux}
              placeholder="Company Email"
              type="email"
              validate={email}
              label="Company Email"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Work />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="address"
              component={TextFieldRedux}
              placeholder="Address"
              label="Address"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="website"
              component={TextFieldRedux}
              placeholder="Website"
              type="url"
              label="Website"
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Language />
                  </InputAdornment>
                )
              }}
            />
          </div>
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

AddContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  imgAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

const AddContactFormRedux = reduxForm({
  form: 'addContact',
  enableReinitialize: true,
})(AddContactForm);

const AddContactInit = connect(
  state => ({
    initialValues: state.contact.formValues
  })
)(AddContactFormRedux);

export default AddContactInit;
