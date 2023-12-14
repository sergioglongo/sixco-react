import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Title from './Title';
import useStyles from './landingStyle-jss';

function Contact(props) {
  const { slideMode } = props;
  const { classes, cx } = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={cx(classes.contact, !slideMode && classes.withBg)}>
      <div className={classes.container}>
        <div className={classes.contactBubble}>
          <Title title="Say hello to us" align="left" nomargin />
          <Typography component="p" className={classes.contactText}>Vivamus et luctus mauris. Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis.</Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Who are You?"
                  className={classes.textField}
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                  margin="normal" />
              </FormControl>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="standard-email"
                  label="You'r email?"
                  className={classes.textField}
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                  margin="normal" />
              </FormControl>
            </Grid>
            <Grid item lg={6} xs={12}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="standard-multiline-flexible"
                  label="Messages"
                  multiline
                  rows="4"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={classes.textField}
                  margin="normal" />
              </FormControl>
              <div className={classes.btnArea}>
                <Button variant="contained" size="large" className={classes.button} color="secondary">Send</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  slideMode: PropTypes.bool,
};

Contact.defaultProps = {
  slideMode: false
};

export default Contact;
