import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Favorite from '@mui/icons-material/Favorite';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
import Divider from '@mui/material/Divider';
import useStyles from './cardStyle-jss';

function ProfileCard(props) {
  const { classes } = useStyles();
  const {
    cover,
    avatar,
    name,
    title,
    connection,
    isVerified,
    btnText
  } = props;

  return (
    <Card className={classes.cardSocmed}>
      <CardMedia
        className={classes.mediaProfile}
        image={cover}
        title="cover"
      />
      <CardContent className={classes.contentProfile}>
        <Avatar alt="avatar" src={avatar} className={classes.avatarBig} />
        <Typography variant="h6" className={classes.name} gutterBottom>
          {name}
          {isVerified && <VerifiedUser className={classes.verified} />}
        </Typography>
        <Typography className={classes.subheading} gutterBottom>
          <span className={Type.regular}>{title}</span>
        </Typography>
        <Typography variant="caption" component="p">
          {connection}
            &nbsp;connection
        </Typography>
        <Button className={classes.buttonProfile} size="large" variant="outlined" color="secondary">
          {btnText}
        </Button>
      </CardContent>
      <Divider />
      <CardActions>
        <BottomNavigation
          showLabels
          className={classes.bottomLink}
        >
          <BottomNavigationAction label="20 Connection" icon={<SupervisorAccount />} />
          <BottomNavigationAction label="10 Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="5 Albums" icon={<PhotoLibrary />} />
        </BottomNavigation>
      </CardActions>
    </Card>
  );
}

ProfileCard.propTypes = {
  cover: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  connection: PropTypes.number.isRequired,
  btnText: PropTypes.string.isRequired,
  isVerified: PropTypes.bool
};

ProfileCard.defaultProps = {
  isVerified: false
};

export default ProfileCard;
