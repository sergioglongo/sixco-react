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
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
function SingleLineImageList() {
  const {
    classes
  } = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.gridList} cols={3}>
        {imgData.map((tile, index) => (
          <ImageListItem key={index.toString()}>
            <img src={tile.img} alt={tile.title} className={classes.img} />
            <ImageListItemBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={(
                <IconButton size="large">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              )}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default SingleLineImageList;
