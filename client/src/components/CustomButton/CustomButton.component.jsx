import { Button, Box } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        backgroundColor: '#21C8AA',
        color: '#fff',
        padding: '5px 50px',
        fontWeight: 600,
        letterSpacing: '1px',
        '&:hover': {
          backgroundColor: '#21C8AA',
          color: '#fff',
        },
      }}
      {...props}
    >
      {children}
      <Box sx={{ marginLeft: '0.8rem' }}>
        <Icon icon="bi:qr-code-scan" width="28" height="28" />
      </Box>
    </Button>
  );
};

export default CustomButton;
