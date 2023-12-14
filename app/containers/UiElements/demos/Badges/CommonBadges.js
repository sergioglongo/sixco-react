import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  ThemeProvider, StyledEngineProvider, createTheme
} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { pink, teal } from '@mui/material/colors';

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
  cssRoot: {
    '& span': {
      backgroundColor: pink[700],
      color: theme.palette.getContrastText(pink[500]),
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: pink
  },
});

function CommonBadges() {
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
      <Grid
        item
        md={6}
      >
        <Typography variant="button" className={classes.divider}>Button Badges</Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="row"
        >
          <div className={classes.field}>
            <Badge color="primary" badgeContent={4} className={classes.margin}>
              <Button variant="contained">Button</Button>
            </Badge>
          </div>
          <div className={classes.field}>
            <Badge color="secondary" badgeContent={4} className={classes.margin}>
              <Button variant="contained" color="primary">Button</Button>
            </Badge>
          </div>
          <div className={classes.field}>
            <Badge color="primary" badgeContent={4} className={classes.margin}>
              <Button variant="contained" color="secondary">Button</Button>
            </Badge>
          </div>
          <div className={classes.field}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <Badge color="primary" badgeContent={4} className={classes.margin}>
                  <Button variant="contained" color="secondary">Button</Button>
                </Badge>
              </ThemeProvider>
            </StyledEngineProvider>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        md={6}
      >
        <Typography variant="button" className={classes.divider}>Text Badges</Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="row"
        >
          <div className={classes.field}>
            <Badge color="primary" badgeContent={4} className={classes.margin}>
              <Typography className={classes.padding}>Badge Text</Typography>
            </Badge>
          </div>
          <div className={classes.field}>
            <Badge color="secondary" badgeContent={4} className={classes.margin}>
              <Typography variant="button" className={classes.padding}>Badges Bold Text</Typography>
            </Badge>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CommonBadges;
