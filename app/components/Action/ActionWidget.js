import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useStyles from './actionwidget-jss';
import { Hidden } from '@mui/material';

function ActionWidget(props) {
  const {
    color,
    title,
    children,
    btns,
    btntitle,
    link,
  } = props;
  const { classes } = useStyles();
  return (
    <Paper className={classes.root} style={{ backgroundColor: color }}>
      <Hidden smUp>
        <div className={classes.customContent}>
          {children}
        </div>
      </Hidden>
      <div className={classes.info}>
        <div >
          <Typography className={classes.title}>{title}</Typography>

        </div>
        <div className={classes.btnlist}>
          {btns ? btns.map(btn => (
            <div className={classes.btn}>
              <Typography className={classes.counter}>
                <Button variant="contained" color="primary" type="butyon" to={btn.link} component={Link}>
                  {btn.title}
                </Button>
              </Typography>
            </div>
          )) : (
            <Typography className={classes.counter}>
              <Button variant="contained" color="primary" type="butyon" to={link} component={Link}>
                <Hidden smDown>
                  {btntitle}
                </Hidden>
                <Hidden smUp>
                  +
                </Hidden>
              </Button>
            </Typography>
          )
          }
        </div>

      </div>
      <Hidden smDown>
        <div className={classes.customContent}>
          {children}
        </div>
      </Hidden>
    </Paper>
  );
}

export default ActionWidget;
