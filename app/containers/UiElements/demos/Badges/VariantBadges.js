import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LimitedBadges } from '../../../../components';

const useStyles = makeStyles()((theme) => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
    display: 'block'
  },
  alone: {
    position: 'relative',
    margin: 20
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: `0 ${theme.spacing(2)}`,
  },
  autoscale: {
    '& span': {
      width: 'auto',
      padding: 2
    }
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
}));

function CommonBadges() {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid
        item
        md={4}
      >
        <Typography variant="button" className={classes.divider}>Icon Badges</Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="row"
        >
          <div className={classes.field}>
            <Badge className={classes.margin} badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </div>
          <div className={classes.field}>
            <IconButton size="large">
              <Badge badgeContent={10} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.field}>
            <LimitedBadges className={classes.margin} value={300} limit={99} color="secondary">
              <MailIcon />
            </LimitedBadges>
          </div>
          <div className={cx(classes.padding, classes.autoscale)}>
            <IconButton size="large">
              <LimitedBadges className={classes.margin} value={3000} limit={999} color="primary">
                <MailIcon />
              </LimitedBadges>
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="Cart" size="large">
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        md={7}
      >
        <Typography variant="button" className={classes.divider}>Tab Badges</Typography>
        <AppBar position="static">
          <Tabs value={0} indicatorColor="secondary" textColor="inherit">
            <Tab
              label={(
                <Badge className={classes.padding} color="secondary" badgeContent={4}>
                  Item One
                </Badge>
              )}
            />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default CommonBadges;
