import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function AddressForm() {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            id="addiress2"
            name="addiress2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddressForm;
