import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import images from 'dan-api/images/imgData';
import ImageLightbox from 'react-18-image-lightbox';

export default function ImagePopup() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
        Open Image Lightbox
      </Button>

      {isOpen && (
        <ImageLightbox
          mainSrc={images[photoIndex].img}
          nextSrc={images[(photoIndex + 1) % images.length].img}
          prevSrc={images[(photoIndex + (images.length - 1)) % images.length].img}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + (images.length - 1)) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </Grid>
  );
}
