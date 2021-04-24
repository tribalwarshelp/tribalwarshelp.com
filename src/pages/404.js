import React from 'react';

import { Typography, Box, Container } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Seo from '../components/Seo';

const NotFoundPage = ({ location }) => (
  <Box
    display="flex"
    minHeight="100vh"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    paddingY={3}
  >
    <Seo title="404" pathname={location.pathname} />
    <Container>
      <Typography variant="h1" gutterBottom>
        Page not found
      </Typography>
      <Typography variant="h2">
        <Link to="/">Back to our site</Link>
      </Typography>
    </Container>
  </Box>
);

export default NotFoundPage;
