import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import LocalPhone from '@mui/icons-material/LocalPhone';
import LocationOn from '@mui/icons-material/LocationOn';
import useStyles from './cardStyle-jss';

function IdentityCard(props) {
  const { classes } = useStyles();
  const {
    title,
    name,
    avatar,
    phone,
    address,
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle1" className={classes.title}>{title}</Typography>
        <Divider className={classes.divider} />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={name}
              src={avatar}
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address" secondary={address} />
        </ListItem>
      </CardContent>
    </Card>
  );
}

IdentityCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default IdentityCard;
