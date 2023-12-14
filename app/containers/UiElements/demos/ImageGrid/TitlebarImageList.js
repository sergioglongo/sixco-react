import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Subheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import imgData from 'dan-api/images/imgData';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarImageList() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.gridList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">December</Subheader>
        </ImageListItem>
        {imgData.map((tile, index) => (
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
        ))}
      </ImageList>
    </div>
  );
}

export default TitlebarImageList;
