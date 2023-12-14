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
            title="Solicite aquí un turno"
            btntitle="Solicitar Turno"
            link="/app/turnos/nuevo-turno"
          >
            <Event className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[1]}
            title="Perfil"
            btntitle="Mi Perfil"
            link="/app/pages/perfil"
          >
            <Event className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[2]}
            title="Historial de Facturas"
            btntitle="Ver"
            link="/app/facturas-electronicas"
          >
            <ReceiptOutlined className={classes.counterIcon} />
          </ActionWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <ActionWidget
            color={colorfull[5]}
            title="Consultas y Seguimientos"
            btntitle="Ver"
            link="/app/consultas"
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