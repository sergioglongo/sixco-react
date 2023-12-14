import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import Checkbox from '@mui/material/Checkbox';
import useStyles from './settings-jss';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line
function DetailSettings(props) {
  const { classes } = useStyles();
  const {
    open,
    handleClose,
    title
  } = props;
  const [checked, setChecked] = useState(['switch', 'check2']);

  const handleToggle = useCallback(value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }, [checked]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            done
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.detailWrap}>
        <Grid container justifyContent="center">
          <Grid item md={8} xs={12}>
            <List subheader={<ListSubheader component="div">Nested List Items One</ListSubheader>}>
              <ListItem>
                <ListItemText primary="Switch input" secondary="Odio ac imperdiet luctus" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => handleToggle('switch')}
                    checked={checked.indexOf('switch') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Another switch input" secondary="Lorem Ipsum" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => handleToggle('switch2')}
                    checked={checked.indexOf('switch2') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Checkbox input" secondary="Dolor sit amet" />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleToggle('check')}
                    checked={checked.indexOf('check') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Another checkbox input" secondary="Donec dignissim" />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleToggle('check2')}
                    checked={checked.indexOf('check2') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <br />
            <List subheader={<ListSubheader component="div">Nested List Two</ListSubheader>}>
              <ListItem>
                <ListItemText primary="Switch input" secondary="Odio ac imperdiet luctus" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => handleToggle('switch')}
                    checked={checked.indexOf('switch') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Another switch input" secondary="Lorem Ipsum" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => handleToggle('switch2')}
                    checked={checked.indexOf('switch2') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Checkbox input" secondary="Dolor sit amet" />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleToggle('check')}
                    checked={checked.indexOf('check') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Another checkbox input" secondary="Donec dignissim" />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleToggle('check2')}
                    checked={checked.indexOf('check2') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
}

DetailSettings.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default DetailSettings;
