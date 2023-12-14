import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ImageLightbox from 'react-18-image-lightbox';
import useStyles from './photo-jss';

function PhotoGallery(props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const { imgData } = props;
  const { classes } = useStyles();

  const openPopup = index => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const onMovePrevRequest = () => {
    setPhotoIndex((photoIndex + imgData.length - 1) % imgData.length);
  };

  const onMoveNextRequest = () => {
    setPhotoIndex((photoIndex + imgData.length + 1) % imgData.length);
  };

  return (
    <div>
      {isOpen && (
        <ImageLightbox
          mainSrc={imgData[photoIndex].img}
          nextSrc={imgData[(photoIndex + 1) % imgData.length].img}
          prevSrc={imgData[(photoIndex + (imgData.length - 1)) % imgData.length].img}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <div className={classes.masonry}>
        {
          imgData.map((thumb, index) => (
            <figure className={classes.item} key={index.toString()}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={() => openPopup(index)}
              >
                <img src={thumb.img} alt={thumb.title} />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {thumb.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </figure>
          ))
        }
      </div>
    </div>
  );
}

PhotoGallery.propTypes = {
  imgData: PropTypes.array.isRequired
};

export default PhotoGallery;
