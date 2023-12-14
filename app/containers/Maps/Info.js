import React from 'react';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';

function Info() {
  return (
    <Typography className={Type.textWarning} gutterBottom style={{ marginBottom: 20 }}>
      This demo may not working properly because it has not added Google Map api key. To add Your own Google Map api key please follow this link
      &nbsp;
      <a rel="noopener noreferrer" style={{ wordWrap: 'break-word' }} target="_blank" href="https://developers.google.com/maps/documentation/javascript/get-api-key">https://developers.google.com/maps/documentation/javascript/get-api-key</a>
    </Typography>
  );
}

export default Info;
