import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import imgData from 'dan-api/images/imgData';
import PapperBlock from '../PapperBlock/PapperBlock';
import useStyles from './widget-jss';

function AlbumWidget() {
  const { classes } = useStyles();
  return (
    <PapperBlock noMargin title="My Albums (4)" whiteBg desc="">
      <div className={classes.albumRoot}>
        <ImageList rowHeight={180} className={classes.gridList}>
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
    </PapperBlock>
  );
}

export default AlbumWidget;
