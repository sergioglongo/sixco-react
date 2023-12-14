import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import settingList from 'dan-api/ui/settingList';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import dummy from 'dan-api/dummy/dummyContents';
import DetailSettings from './DetailSettings';
import useStyles from './settings-jss';

function Settings() {
  const title = brand.name;
  const description = brand.desc;
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [settingTitle, setSettingTitle] = useState('Settings');

  const handleClickOpen = (newTitle) => {
    setOpen(true);
    setSettingTitle(newTitle);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = event => {
    setKeyword(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Paper className={classes.paperStyled} elevation={0}>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <div className={classes.profile}>
              <Avatar
                alt={dummy.user.name}
                src={dummy.user.avatar}
                className={classes.avatar}
              />
              <div className={classes.profileText}>
                <h4>{dummy.user.name}</h4>
                {dummy.user.title}
              </div>
            </div>
          </Grid>
          <Grid item sm={8} xs={12}>
            <div className={classes.quickAccess}>
              <Button onClick={() => handleClickOpen('Settings 1')}>
                <Icon className={classes.icon}>person_add</Icon>
                Settings 1
              </Button>
              <Button onClick={() => handleClickOpen('Settings 2')}>
                <Icon className={classes.icon}>account_circle</Icon>
                Settings 2
              </Button>
              <Button onClick={() => handleClickOpen('Settings 3')}>
                <Icon className={classes.icon}>edit</Icon>
                Settings 3
              </Button>
              <Button onClick={() => handleClickOpen('Settings 4')}>
                <Icon className={classes.icon}>lock</Icon>
                Settings 4
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root} elevation={4}>
        <AppBar position="static" color="inherit" className={classes.searchSettings}>
          <Toolbar>
            <div className={classes.flex}>
              <div className={classes.wrapper}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input className={classes.input} placeholder="Find a settings" onChange={(event) => handleSearch(event)} />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <section className={classes.settingList}>
          <Grid container spacing={2}>
            {settingList.map((menu, index) => {
              const rawKey = menu.name + menu.caption;
              if (rawKey.toLowerCase().indexOf(keyword) === -1) {
                return false;
              }
              return (
                <Grid item key={index.toString()} sm={4} xs={12}>
                  <Button onClick={() => handleClickOpen(menu.name)} color="secondary" className={classes.button}>
                    <Icon className={classes.icon}>{menu.icon}</Icon>
                    <span className={classes.text}>
                      {menu.name}
                      <Typography variant="caption" className={classes.info}>
                        {menu.caption}
                      </Typography>
                    </span>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </Paper>
      <DetailSettings open={open} handleClose={handleClose} title={settingTitle} />
    </div>
  );
}

export default Settings;
