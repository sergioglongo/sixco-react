import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { cyan } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing(4)} 0 ${theme.spacing(2)}`,
  },
  iconCyan: {
    color: cyan[300]
  },
  avatarCyan: {
    background: cyan[300]
  }
}));

function generate(element) {
  return [0, 1, 2].map(value => React.cloneElement(element, {
    key: value,
  }));
}

function ListInteractive() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <FormGroup row>
        <FormControlLabel
          control={(
            <Checkbox
              checked={dense}
              onChange={(event, checked) => setDense(checked)}
              value="dense"
            />
          )}
          label="Enable dense"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={secondary}
              onChange={(event, checked) => setSecondary(checked)}
              value="secondary"
            />
          )}
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="button" className={classes.title}>
            Text only
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="button" className={classes.title}>
            Icon with text
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon className={classes.iconCyan} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="button" className={classes.title}>
            Avatar with text
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarCyan}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="button" className={classes.title}>
            Avatar with text and icon
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarCyan}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" size="large">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ListInteractive;
