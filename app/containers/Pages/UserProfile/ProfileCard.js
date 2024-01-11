import React, { useState } from 'react';
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

const optionsOpt = [
  {
    title: 'Editar Perfil',
    link: '/app/pages/editar-perfil'
  }, {
    title: 'Cambiar contraseña',
    link: '/app/pages/cambiar-contrasenia'
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
    clientData,
  } = props;
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
      {clientData &&
        <div className={classes.content}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <Typography variant="h4" className={classes.name} gutterBottom>
            {clientData.tipo_documento == 'CUIT' ? clientData.nombre : clientData.nombre + ' ' + clientData.apellido}
            <VerifiedUser className={classes.verified} />
          </Typography>
          {clientData.siccode ? (
            <Typography className={classes.subheading} gutterBottom>
              {clientData.tipo_documento ? clientData.tipo_documento : 'DOC'}
              :
              {clientData.nro}
            </Typography>
          ) : (<></>)}
          {clientData.email ? (
            <Typography className={classes.subheading} gutterBottom>
              EMAIL:
              {' '}
              {clientData.email}
            </Typography>
          ) : (<></>)}
          {clientData.telefono ? (
            <Typography className={classes.subheading} gutterBottom>
              TELÉFONO:
              {' '}
              {clientData.telefono}
            </Typography>
          ) : (<></>)}
          {clientData.domicilio ? (
            <Typography className={classes.subheading} gutterBottom>
              DIRECCIÓN:
              {' '}
              {clientData.domicilio}
              <br />
              {clientData.codigopostal ? (
                <>
                  CP:
                  {clientData.codigopostal}
                  <br />
                </>
              ) : <></>}
              {clientData.bill_city ? (
                <>
                  {clientData.bill_city}
                  {' '}
                  -
                  {' '}
                  {clientData.bill_state}
                  <br />
                </>
              ) : <></>}
              {clientData.bill_country ? (<>{clientData.bill_country}</>) : <></>}
            </Typography>
          ) : (<></>)}
          {/*
        <Button className={classes.button} size="large" variant="contained" color="secondary">
          Add to Connection
        </Button> */}
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
  clientData: PropTypes.object.isRequired,
};

export default (ProfileCard);
