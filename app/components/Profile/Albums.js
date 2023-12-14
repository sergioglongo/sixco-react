import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import imgData from 'dan-api/images/imgData';
import useStyles from './profile-jss';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Albums() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        spacing={3}
      >
        <Grid item md={6} sm={12} xs={12}>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            component={LinkBtn}
            to="/app/pages/photo-gallery"
          >
            <ImageList rowHeight={160} className={classes.gridList} cols={3}>
              {imgData.map((tile, index) => {
                if (index > 6) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()} cols={tile.cols || 1}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                  </ImageListItem>
                );
              })}
            </ImageList>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Album Number One
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            component={LinkBtn}
            to="/app/pages/photo-gallery"
          >
            <ImageList rowHeight={160} className={classes.gridListAlbum} cols={3}>
              {imgData.map((tile, index) => {
                if (index > 2 && index < 9) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()} cols={tile.cols || 1}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                  </ImageListItem>
                );
              })}
            </ImageList>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Album Number Three
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            component={LinkBtn}
            to="/app/pages/photo-gallery"
          >
            <ImageList rowHeight={160} className={classes.gridList} cols={3}>
              {imgData.map((tile, index) => {
                if (index > 4 && index < 10) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()} cols={tile.cols || 1}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                  </ImageListItem>
                );
              })}
            </ImageList>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Album Number Two
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            component={LinkBtn}
            to="/app/pages/photo-gallery"
          >
            <ImageList rowHeight={160} className={classes.gridList} cols={3}>
              {imgData.map((tile, index) => {
                if (index % 2) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()} cols={tile.cols || 1}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                  </ImageListItem>
                );
              })}
            </ImageList>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Album Number Four
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}

export default Albums;
