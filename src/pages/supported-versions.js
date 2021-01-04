import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Box,
  Card,
  CardHeader,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';
import Link from '../components/Link';
import SEO from '../components/SEO';

const buildURLToVersionPage = (baseUrl, code) => {
  return `https://${code}.${baseUrl}`;
};

function SupportedVersionsPage({ location }) {
  const {
    twhelp: {
      versions: { items: versions },
    },
    site: {
      siteMetadata: { baseUrl },
    },
  } = useStaticQuery(graphql`
    query {
      twhelp {
        versions(sort: ["host ASC"]) {
          items {
            host
            code
          }
        }
      }
      site {
        siteMetadata {
          baseUrl
        }
      }
    }
  `);

  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      paddingY={5}
    >
      <SEO pathname={location.pathname} title="Supported versions" />
      <Container>
        <header>
          <Typography variant="h1" align="center">
            <Link color="secondary" underline="none" to="/">
              TWHelp
            </Link>
          </Typography>
          <Typography variant="h2" align="center" gutterBottom>
            Version selection
          </Typography>
        </header>
        <Grid container spacing={2}>
          {versions.map(version => (
            <Grid key={version.code} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardHeader
                  title={
                    <Link
                      color="secondary"
                      underline="none"
                      href={buildURLToVersionPage(baseUrl, version.code)}
                    >
                      {version.host}
                    </Link>
                  }
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SupportedVersionsPage;
