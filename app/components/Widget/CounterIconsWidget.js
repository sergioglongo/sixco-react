import React from 'react';
import Grid from '@mui/material/Grid';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';
import Edit from '@mui/icons-material/Edit';
import colorfull from 'dan-api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import useStyles from './widget-jss';

function CounterIconWidget() {
  const { classes } = useStyles();
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={207}
            duration={3}
            title="Subscribers"
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={300}
            duration={3}
            title="Followers"
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[2]}
            start={0}
            end={67}
            duration={3}
            title="Total Posts"
          >
            <Edit className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={70}
            duration={3}
            title="Total Articles"
          >
            <CollectionsBookmark className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

export default CounterIconWidget;
