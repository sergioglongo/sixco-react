import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
  subheader: {
    width: '100%',
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
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function ImageGridList() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.gridList} cols={3}>
        {imgData.map((tile, index) => (
          <ImageListItem key={index.toString()} cols={tile.cols || 1}>
            <img src={tile.img} className={classes.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default ImageGridList;
