import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import classNames from 'classnames';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useStyles from 'dan-components/Tables/tableStyle-jss';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
// import {IconButton,EditIcon,DeleteIcon} from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/BorderColor';
import { obtenerFechaHora } from '../../../../utils/dateFormat'
// import { Notification } from 'dan-components';

function TablaUsuarios(props) {
  const { lista, width } = props;
  const history = useHistory();
  const { classes, cx } = useStyles();

  const crearNuevaConsulta = () => {
    history.push('/app/usuarios/nuevo-usuario');
  };

  const DetalleConsulta = (userData) => {
    console.log("datos de usuario elegido", userData);
    history.push({
      pathname: '/app/usuarios/detalle',
      state: { userData: userData }
    });
  };

  if (typeof lista[0] === 'undefined') {
    return <></>;
  }
  // console.log("lista de usuarios", lista);
  return (
    <div className={classes.rootTable}>
      {/* <Notification message={'holissss'} /> */}
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">
            Total de usuarios
            {' '}
            {lista.length}
          </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {/* <Button variant="contained" onClick={() => crearNuevaConsulta()} color="secondary" className={classes.button}>
              <AddIcon className={classNames(isWidthUp('sm', width) && classes.leftIcon, classes.iconSmall)} />
              {isWidthUp('sm', width) && 'Nueva Consulta'}
            </Button> */}
        </div>
      </Toolbar>
      <Table className={classNames(classes.table, classes.hover)}>
        <TableHead>
          <TableRow>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell >Estado</TableCell>
            <TableCell >Tipo</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map(item => ([
            <TableRow key={item.contactid}>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.firstname}</TableCell>
              <TableCell >{item.estado_portal}</TableCell>
              <TableCell >{item.tipo_contacto}</TableCell>
              <TableCell align="right">
                <Tooltip title="Ver detalle">
                  <IconButton className={classes.button} color="primary" aria-label="Ver" onClick={() => DetalleConsulta(item)}>
                    <Icon className={classes.rightIcon}>remove_red_eye</Icon>
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ]))}
        </TableBody>
      </Table>
    </div>
  );
}

TablaUsuarios.propTypes = {
  lista: PropTypes.array.isRequired,
  // width: PropTypes.string.isRequired
};

export default (TablaUsuarios);
