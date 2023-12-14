import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  fixed: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
    textAlign: 'center'
  },
}));

function SimpleTooltips() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const {
    classes
  } = useStyles();
  return (
    <div>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="row"
        spacing={2}
      >
        <Grid
          item
          md={6}
        >
          <Typography variant="button" className={classes.divider}>Simple Tooltips</Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={2}
          >
            <Tooltip title="Delete">
              <IconButton aria-label="Delete" size="large">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add">
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
            <br />
            <br />
            <Tooltip title="FAB 'position: absolute;'">
              <Fab color="secondary" className={classes.fixed}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
        >
          <Typography variant="button" className={classes.divider}>Delayed Tooltips</Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={2}
          >
            <Tooltip
              enterDelay={300}
              leaveDelay={300}
              onClose={() => handleTooltipClose()}
              onOpen={() => handleTooltipOpen()}
              open={open}
              placement="bottom"
              title="Delete"
            >
              <IconButton aria-label="Delete" size="large">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTooltips;
