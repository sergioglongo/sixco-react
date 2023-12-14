import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import imgData from 'dan-api/images/imgData';
import useStyles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function FilesWidget() {
  const { classes } = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock whiteBg noMargin title="Your Storage" icon="ion-ios-cloud-outline" desc="">
          <div className={classes.secondaryWrap}>
            <div className={classes.centerItem}>
              <Chip label="Almost Full" className={classes.chip} color="secondary" />
              <CircularProgress variant="determinate" className={classes.progressCircle} size={140} thickness={4} value={60} />
            </div>
            <ul className={classes.storageInfo}>
              <li>
                <Typography variant="h6" color="primary" gutterBottom>120 GB</Typography>
                <Typography variant="caption" gutterBottom>60% used</Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom>200 GB</Typography>
                <Typography variant="caption" gutterBottom>total storage</Typography>
              </li>
            </ul>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button color="secondary" variant="contained" className={classes.button}>
              Upgrade Space
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock title="Your Photos" icon="ion-ios-images-outline" whiteBg desc="">
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {
                imgData.map((tile, index) => {
                  if (index >= 4) {
                    return false;
                  }
                  return (
                    <ImageListItem key={index.toString()}>
                      <img src={tile.img} className={classes.img} alt={tile.title} />
                      <ImageListItemBar
                        title={tile.title}
                        subtitle={(
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        )}
                        actionIcon={(
                          <IconButton className={classes.icon} size="large">
                            <InfoIcon />
                          </IconButton>
                        )}
                      />
                    </ImageListItem>
                  );
                })
              }
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button color="secondary" className={classes.button}>
              See All
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock title="Favorites" icon="ion-ios-heart-outline" whiteBg desc="">
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {
                imgData.map((tile, index) => {
                  if (index >= 4 && index < 8) {
                    return (
                      <ImageListItem key={index.toString()}>
                        <img src={tile.img} className={classes.img} alt={tile.title} />
                        <ImageListItemBar
                          title={tile.title}
                          subtitle={(
                            <span>
                              by:&nbsp;
                              {tile.author}
                            </span>
                          )}
                          actionIcon={(
                            <IconButton className={classes.icon} size="large">
                              <InfoIcon />
                            </IconButton>
                          )}
                        />
                      </ImageListItem>
                    );
                  }
                  return false;
                })
              }
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button color="secondary" className={classes.button}>
              See All
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
    </Grid>
  );
}

export default FilesWidget;
