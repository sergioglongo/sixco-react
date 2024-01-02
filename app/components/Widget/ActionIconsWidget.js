import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import colorfull from 'dan-api/palette/colorSixco';

// import CounterWidget from '../Counter/CounterWidget';
import useStyles from './widget-jss';
import ActionWidget from '../Action/ActionWidget';
import SixcoIcon from '../../api/icons/sixco-icons';

function ActionIconsWidget() {
  const { classes } = useStyles();

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[0]}
            title="Choferes"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'AirlineSeatReclineNormal'} className={classes.counterIcon} />
            {/* <AirlineSeatReclineNormalIcon  /> */}
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[1]}
            title="Unidades"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'LocalShipping'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[2]}
            title="Solicitud cupos"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'AssignmentTurnedIn'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[3]}
            title="Lista de usuarios"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'People'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[4]}
            title="Bonificaciones"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'CurrencyExchange'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[5]}
            title="Dominios"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'Garage'} className={classes.counterIcon} />
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