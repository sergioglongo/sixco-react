import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import LocationOn from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import useStyles from './widget-jss';

const MapWithAMarker = props => {
  const position = {
    lat: -34.300,
    lng: 119.344
  };
  return (
    <GoogleMap
      {...props}
      center={position}
      onLoad={map => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
      }}
    >
      <Marker position={position} />
    </GoogleMap>
  );
};

function MapWidget() {
  const { classes } = useStyles();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBdYeVetW8SdWB7Tkfyu7tfMf2NiMgDh-M'
  });
  return (
    <Paper>
      {isLoaded ? (
        <div className={classes.mapWrap}>
          <MapWithAMarker
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '200px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      ) : <p>Loading...</p>}
      <div className={classes.address}>
        <Card className={classes.card}>
          <CardContent>
            <ListItem>
              <Avatar className={classes.avatar}>
                <LocationOn />
              </Avatar>
              <ListItemText primary="Your Location" secondary="Town Hall Building no.45 Block C - ABC Street" />
            </ListItem>
          </CardContent>
        </Card>
      </div>
    </Paper>
  );
}

export default MapWidget;
