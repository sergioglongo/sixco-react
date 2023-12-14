import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Icon from '@mui/material/Icon';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function BottomNav() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState('recents');

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleChange2 = (event, val2) => {
    setValue2(val2);
  };

  const {
    classes
  } = useStyles();

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>With Label</Typography>
        <div>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="button" className={classes.divider}>Without Label</Typography>
        <div>
          <BottomNavigation value={value2} onChange={handleChange2} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
          </BottomNavigation>
        </div>
      </Grid>
    </Grid>
  );
}

export default BottomNav;
