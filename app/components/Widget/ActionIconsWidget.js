import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import colorfull from 'dan-api/palette/colorfull';

// import CounterWidget from '../Counter/CounterWidget';
import { Event, ForumOutlined, ReceiptOutlined } from '@mui/icons-material';
import useStyles from './widget-jss';
import ActionWidget from '../Action/ActionWidget';


function ActionIconsWidget() {
  const { classes } = useStyles();

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[0]}
            title="Sección 1"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <Event className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[1]}
            title="Sección 2"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <Event className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[2]}
            title="Sección 3"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <ReceiptOutlined className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[5]}
            title="Sección 4"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <ForumOutlined className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
      </Grid>
    </div>
  );
}

// ActionIconsWidget.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ActionIconsWidget);
export default ActionIconsWidget;