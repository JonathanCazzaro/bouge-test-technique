import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

const EditModal: React.VFC<EditModalProps> = ({
  isOpen,
  fullname,
  handleClose,
}) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '.5rem',
        padding: '2rem 5rem',
        boxShadow: '0 2px 2px darkgrey',
      }}
    >
      <Typography variant="h6" component="p">
        Bonjour {fullname} !
      </Typography>
    </Box>
  </Modal>
);

export default EditModal;
