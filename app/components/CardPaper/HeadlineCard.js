import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './cardStyle-jss';

function HeadlineCard(props) {
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));
  const {
    thumbnail,
    title,
    desc,
  } = props;
  return (
    <Paper className={classes.mainFeaturedPost}>
      <ButtonBase
        focusRipple
        className={classes.imageFull}
        focusVisibleClassName={classes.focusVisible}
        component={Link}
        to="/blog/article"
      >
        <div className={classes.mainFeaturedPostContent}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${thumbnail})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Grid container>
              <Grid item md={6}>
                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                  {title}
                </Typography>
                {!mdDown && (
                  <Typography component="p" variant="subtitle1" color="inherit" paragraph>
                    {desc}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </ButtonBase>
    </Paper>
  );
}

HeadlineCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default HeadlineCard;
