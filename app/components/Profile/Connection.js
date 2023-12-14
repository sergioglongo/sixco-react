import React from 'react';
import Grid from '@mui/material/Grid';
import datas from 'dan-api/apps/connectionData';
import ProfileCard from '../CardPaper/ProfileCard';
import useStyles from './profile-jss';

function Connection() {
  const { classes } = useStyles();
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-between"
      direction="row"
      spacing={2}
      className={classes.rootx}
    >
      {
        datas.map((data, index) => (
          <Grid item md={4} sm={6} xs={12} key={index.toString()}>
            <ProfileCard
              cover={data.cover}
              avatar={data.avatar}
              name={data.name}
              title={data.title}
              connection={data.connection}
              isVerified={data.verified}
              btnText="See Profile"
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Connection;
