import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
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
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function AdvancedImageList() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.gridList}>
        {imgData.map((tile, index) => (
          <ImageListItem key={index.toString()} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} className={classes.img} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              position="top"
              actionIcon={(
                <IconButton className={classes.icon} size="large">
                  <StarBorderIcon />
                </IconButton>
              )}
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default AdvancedImageList;
