import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Route } from '@config/routing';

import {
  Card,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import Link from '@common/Link';
import Seo from '@common/Seo';
import Layout from '@common/Layout';

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
    <Layout>
      <Seo pathname={location.pathname} title="Supported versions" />
      <Container>
        <header>
          <Typography variant="h1" align="center">
            <Link to={Route.IndexPage}>TWHelp</Link>
          </Typography>
          <Typography variant="h2" align="center" gutterBottom>
            Supported versions
          </Typography>
        </header>
        <Grid container spacing={2}>
          {versions.map(version => (
            <Grid key={version.code} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardHeader
                  title={
                    <Link href={buildURLToVersionPage(baseUrl, version.code)}>
                      {version.host}
                    </Link>
                  }
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default SupportedVersionsPage;
