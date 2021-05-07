import React from 'react';
import { Route } from '@config/routing';
import { Typography, Container } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Seo from '@common/Seo';
import Layout from '@common/Layout';

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="404" pathname={location.pathname} />
    <Container>
      <Typography variant="h1" gutterBottom align="center">
        Page not found
      </Typography>
      <Typography variant="h2" align="center">
        <Link to={Route.IndexPage}>Back to our site</Link>
      </Typography>
    </Container>
  </Layout>
);

export default NotFoundPage;
