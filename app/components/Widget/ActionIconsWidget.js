import React from 'react';
import Grid from '@mui/material/Grid';
import colorfull from 'dan-api/palette/colorSixco';

// import CounterWidget from '../Counter/CounterWidget';
// import useStyles from './sixcocard-jss';
import ActionWidget from '../Action/ActionWidget';
import SixcoIcon from '../../api/icons/sixco-icons';
import { Badge } from '@mui/material';
import useStyles from './sixcocard-jss';

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
            link="/app/choferes"
          >
            <SixcoIcon iconName={'AirlineSeatReclineNormal'}
              className={classes.counterIcon}
            />
            {/* <AirlineSeatReclineNormalIcon  /> */}
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[1]}
            title="Dominios"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'LocalShipping'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[2]}
            title="Unidades"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <Badge
              // className={classes.margin}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              badgeContent={
                <SixcoIcon
                  iconName={'Person'}
                  className={classes.badgeIcon}
                />
              }
            // color="secondary"
            >
              <SixcoIcon iconName={'LocalShipping'} className={classes.counterIcon} />
            </Badge>
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[3]}
            title="Lista de usuarios"
            btntitle="Acceder"
            link="/app/usuarios"
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
            title="Solicitud de Cupos"
            btntitle="Acceder"
            link="/app/pages/proximamente"
          >
            <SixcoIcon iconName={'AssignmentTurnedIn'} className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
      </Grid>
    </div>
  );
}
export default ActionIconsWidget;