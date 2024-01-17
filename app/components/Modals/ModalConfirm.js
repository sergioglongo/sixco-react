import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useStyles from './modal-jss';
import Button from '@mui/material/Button';

function ModalConfirm(props) {
    const { classes, cx } = useStyles();
    const {
        openmodal, setOpenmodal, titulo, mensaje, buttonPrimaryAction, buttonSecondaryAction, loading,
        buttonPrimaryText, buttonSecondaryText, buttonPrimaryShow, buttonSecondaryShow
    } = props;

    const handleClose = (event, reason) => {
        buttonSecondaryAction();
    };

    const handleConfirm = (event, reason) => {
        buttonPrimaryAction();
    };

    return (
        <div>
            <Dialog
                open={openmodal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {titulo}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {mensaje}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {buttonSecondaryShow &&
                        <Button onClick={handleClose} color="primary">
                            {buttonSecondaryText}
                        </Button>
                    }
                    {buttonPrimaryShow &&
                        <Button onClick={handleConfirm} color="primary" variant="contained" autoFocus loading={loading} disabled={loading}>
                            {buttonPrimaryText}
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}

ModalConfirm.propTypes = {
    openmodal: PropTypes.bool.isRequired,
    setOpenmodal: PropTypes.func.isRequired,
    titulo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    buttonPrimaryAction: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};

export default ModalConfirm;
