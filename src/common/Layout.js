import React from 'react';
import { Box } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      paddingY={3}
    >
      {children}
    </Box>
  );
};

export default Layout;
