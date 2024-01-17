import React, { useState } from 'react';
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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModalConfirm from '../../../../components/Modals/ModalConfirm';

function TablaChoferes(props) {
  const { lista } = props;
  const history = useHistory();
  const { classes, cx } = useStyles();
  const [openmodal, setOpenmodal] = useState(false);
  const [datos, setDatos] = useState({});

  const DetalleChofer = (data) => {
    history.push('/app/choferes/' + data.nro + '/detalle');
  };

  const EditarChofer = (data) => {
    history.push('/app/choferes/' + data.nro + '/editar');
  };

  if (typeof lista[0] === 'undefined') {
    return <></>;
  }

  const handleEliminar = (e, chofer) => {
    e.preventDefault();
    setOpenmodal(true);
  };

  const handleConfirm = () => {
    console.log("Confirmado", datos);
    const record = datos.id;
    const values = {
      estado: 'eliminado'
    };
    setOpenmodal(false);
  };

  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">
            Total de choferes
            {' '}
            {lista.length}
          </Typography>
        </div>
      </Toolbar>
      <Table className={classNames(classes.table, classes.hover)}>
        <TableHead>
          <TableRow>
            <TableCell >Nro Usuario</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell >Estado</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map(item => ([
            <TableRow key={item.nro}>
              <TableCell >{item.nro}</TableCell>
              <TableCell>{item.apellido}</TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell >{item.estado}</TableCell>
              <TableCell align="right">
                <Tooltip title="Ver detalle">
                  <IconButton className={classes.button} color="primary" aria-label="Ver" onClick={() => DetalleChofer(item)}>
                    <Icon className={classes.rightIcon}>remove_red_eye</Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Editar">
                  <IconButton className={classes.button} aria-label="Editar" onClick={(e) => { EditarChofer(item); }}>
                    <Icon className={classes.rightIcon}>edit</Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar chofer">
                  <IconButton className={classes.button} aria-label="Borrar" onClick={(e) => { handleEliminar(e, item); }}>
                    <Icon className={classes.rightIcon}>delete_forever</Icon>
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ]))}
        </TableBody>
      </Table>

      <ModalConfirm
        openmodal={openmodal}
        setOpenmodal={setOpenmodal}
        titulo="Confirmar Operación"
        mensaje={(
          <p>
            ¿Está seguro que desea Eliminar el
            <br />
            {' '}
            Chofer {datos.apellido} {datos.nombre}
            ?
          </p>
        )}
        buttonPrimaryAction={handleConfirm}
        buttonSecondaryAction={() => setOpenmodal(false)}
        loading={false}
        buttonSecondaryText="Cancelar"
        buttonPrimaryText="Aceptar"
        buttonSecondaryShow={true}
        buttonPrimaryShow={true}
      />
    </div>
  );
}

TablaChoferes.propTypes = {
  lista: PropTypes.array.isRequired,
  // width: PropTypes.string.isRequired
};

export default (TablaChoferes);
