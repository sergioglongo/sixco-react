import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhone from '@mui/icons-material/LocalPhone';
import Email from '@mui/icons-material/Email';
import Smartphone from '@mui/icons-material/Smartphone';
import LocationOn from '@mui/icons-material/LocationOn';
import Work from '@mui/icons-material/Work';
import Language from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import useStyles from './contact-jss';

const optionsOpt = [
  'Block Contact',
  'Delete Contact',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function ContactDetail(props) {
  const { classes, cx } = useStyles();
  const {
    dataContact,
    itemSelected,
    edit,
    favorite,
    showMobileDetail,
    hideDetail,
    remove
  } = props;
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const smUp = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const deleteContact = (item) => {
    remove(item);
    setAnchorElOpt(null);
  };

  return (
    <main className={cx(classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <section className={classes.cover}>
        <div className={classes.opt}>
          {dataContact[itemSelected] && (
            <IconButton
              className={classes.favorite}
              aria-label="Favorite"
              onClick={() => favorite(dataContact[itemSelected])}
              size="large">
              {dataContact[itemSelected].favorited ? (<Star />) : <StarBorder />}
            </IconButton>
          )}
          <IconButton
            aria-label="Edit"
            onClick={() => edit(dataContact[itemSelected])}
            size="large">
            <Edit />
          </IconButton>
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={handleClickOpt}
            size="large">
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorElOpt}
            open={Boolean(anchorElOpt)}
            onClose={handleCloseOpt}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {optionsOpt.map(option => {
              if (option === 'Delete Contact') {
                return (
                  <MenuItem key={option} selected={option === 'Edit Profile'} onClick={() => deleteContact(dataContact[itemSelected])}>
                    {option}
                  </MenuItem>
                );
              }
              return (
                <MenuItem key={option} selected={option === 'Edit Profile'} onClick={handleCloseOpt}>
                  {option}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <IconButton
          onClick={hideDetail}
          className={classes.navIconHide}
          aria-label="Back"
          size="large">
          <ArrowBack />
        </IconButton>
        {(dataContact.length > 0 && !smDown) && (
          <>
            <Avatar alt={dataContact[itemSelected].name} src={dataContact[itemSelected].avatar} className={classes.avatar} />
            <Typography className={classes.userName} variant="h6">
              {dataContact[itemSelected].name}
              <Typography display="block" variant="caption">
                {dataContact[itemSelected].title}
              </Typography>
            </Typography>
          </>
        )}
      </section>
      {dataContact.length > 0 && (
        <div>
          {!smUp && (
            <div className={classes.avatarTop}>
              <Avatar alt={dataContact[itemSelected].name} src={dataContact[itemSelected].avatar} className={classes.avatar} />
              <Typography variant="h5">
                {dataContact[itemSelected].name}
                <Typography>
                  {dataContact[itemSelected].title}
                </Typography>
              </Typography>
            </div>
          )}
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].phone} secondary="Phone" />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.amberIcon}>
                  <Smartphone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].secondaryPhone} secondary="Secondary Phone" />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.tealIcon}>
                  <Email />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].personalEmail} secondary="Personal Email" />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.brownIcon}>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].companyEmail} secondary="Company Email" />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.redIcon}>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].address} secondary="Address" />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.purpleIcon}>
                  <Language />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dataContact[itemSelected].website} secondary="Website" />
            </ListItem>
          </List>
        </div>
      )}
    </main>
  );
}

ContactDetail.propTypes = {
  showMobileDetail: PropTypes.bool.isRequired,
  dataContact: PropTypes.array.isRequired,
  itemSelected: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
};

export default ContactDetail;
