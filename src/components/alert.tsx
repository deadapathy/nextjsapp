import React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface AlertComponentProps {
    message: string;
    severity: AlertProps['severity'];
    open: boolean;
    handleClose: () => void;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
    message,
    severity,
    open,
    handleClose,
}) => {
    const handleSnackbarClose: SnackbarProps['onClose'] = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        handleClose();
    };

    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleSnackbarClose}>
            <MuiAlert variant="filled" severity={severity} sx={{ width: '100%' }}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default AlertComponent;
