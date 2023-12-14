import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    lineHeight: '30px',
    height: 30,
    textTransform: 'uppercase'
  }
}));

function PinnedList() {
  const {
    classes
  } = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
    >
      <List className={classes.root} subheader={<li />}>
        {[0, 1, 2, 3, 4].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader className={classes.head}>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Grid>
  );
}

export default PinnedList;
