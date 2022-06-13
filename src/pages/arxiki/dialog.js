import React from 'react';
import PropTypes from 'prop-types';
import {Dialog, IconButton} from '@material-ui/core';
import Userform from '../../components/stoixeia/users';
import CloseIcon from '@material-ui/icons/Close';

function SimpleDialog(props) {
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose();
    };
    
    return (
      <Dialog onClose={handleClose} open={open} >
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Userform />
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    open: PropTypes.bool.isRequired,
  };
export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(true);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <SimpleDialog open={open} onClose={handleClose} />
      </div>
    );
  }