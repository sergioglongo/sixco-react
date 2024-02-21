import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Info from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './profile-card-jss';
// import { setClientDataAction } from '../../redux/actions/Register';
import Loading from '../../../components/Loading';
import { CircularProgress } from '@mui/material';

const optionsOpt = [
  {
    title: 'Editar Perfil',
    link: '/app/pages/editar-perfil'
  }, {
    title: 'Cambiar contraseña',
    link: '/app/pages/cambiar-contraseña'
  },
];

const ITEM_HEIGHT = 48;

function ProfileCard(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const { classes } = useStyles();
  const {
    avatar,
    name,
    desc,
    coverImg,
    profile,
  } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const history = useHistory();
  const handleClickOpts = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleClickOpt = (destino) => {
    setAnchorElOpt(null);
    history.push(destino);
  };

  return (
    <div className={classes.cover} style={{ backgroundImage: `url(${coverImg})` }}>
      <div className={classes.opt}>
        {/* <IconButton className={classes.button} aria-label="Delete">
          <Info />
        </IconButton> */}
        <IconButton
          aria-label="Mas"
          aria-owns={anchorElOpt ? 'long-menu' : null}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleClickOpts}
        >
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
          {optionsOpt.map(option => (
            <MenuItem
              key={option.title.replace(' ', '_')}
              // selected={option === 'Editar Perfil'}
              onClick={e => { e.preventDefault(); handleClickOpt(option.link); }}
            >
              {option.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {profile ?
        <div className={classes.content}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <Typography variant="h4" className={classes.name} gutterBottom>
            {profile.firstname + ' ' + profile.lastname}
            <VerifiedUser className={classes.verified} />
          </Typography>
          {profile.tipo_contacto ? (
            <Typography className={classes.subheading} gutterBottom>
              TIPO:
              {' '}
              {profile.tipo_contacto}
            </Typography>
          ) : (<></>)}
          {profile.siccode ? (
            <Typography className={classes.subheading} gutterBottom>
              {profile.tipo_doc ? profile.tipo_doc : 'DOC'}
              :
              {" " + profile.siccode}
            </Typography>
          ) : (<></>)}
          {profile.accountname ? (
            <Typography className={classes.subheading} gutterBottom>
              CUENTA:
              {' '}
              {profile.accountname}
            </Typography>
          ) : (<></>)}
          {profile.email ? (
            <Typography className={classes.subheading} gutterBottom>
              EMAIL:
              {' '}
              {profile.email}
            </Typography>
          ) : (<></>)}
          {profile.mobile ? (
            <Typography className={classes.subheading} gutterBottom>
              TELÉFONO:
              {' '}
              {profile.mobile}
            </Typography>
          ) : (<></>)}
          {profile.mailingstreet ? (
            <Typography className={classes.subheading} gutterBottom>
              DOMICILIO:
              {' '}
              {profile.mailingstreet}
            </Typography>
          ) : (<></>)}
          {profile.othercityname ? (
            <Typography className={classes.subheading} gutterBottom>
              LOCALIDAD:
              {' '}
              {profile.othercityname}
            </Typography>
          ) : (<></>)}
          {profile.otherstate ? (
            <Typography className={classes.subheading} gutterBottom>
              PROVINCIA/ESTADO:
              {' '}
              {profile.otherstate}
            </Typography>
          ) : (<></>)}
          {profile.othercountry ? (
            <Typography className={classes.subheading} gutterBottom>
              PAIS:
              {' '}
              {profile.othercountry}
            </Typography>
          ) : (<></>)}
          {/*
        <Button className={classes.button} size="large" variant="contained" color="secondary">
          Add to Connection
        </Button> */}
        </div>
        :
        <div className={classes.content}>
          <CircularProgress className={classes.circularProgress} size={90} thickness={1} color="secondary" />
        </div>
      }
    </div>
  );
}

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired || null,
};

export default (ProfileCard);
