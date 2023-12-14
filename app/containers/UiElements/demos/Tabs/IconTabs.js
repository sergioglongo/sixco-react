import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Typography from '@mui/material/Typography';

export default function IconTabs() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleChange2 = (event, val2) => {
    setValue2(val2);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography variant="button" gutterBottom>Without Text</Typography>
          <Paper>
            <Tabs
              value={value2}
              onChange={handleChange2}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<PhoneIcon />} />
              <Tab icon={<FavoriteIcon />} />
              <Tab icon={<PersonPinIcon />} />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" gutterBottom>With Text</Typography>
          <Paper>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab icon={<PhoneIcon />} label="RECENTS" />
              <Tab icon={<FavoriteIcon />} label="FAVORITES" />
              <Tab icon={<PersonPinIcon />} label="NEARBY" />
            </Tabs>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
