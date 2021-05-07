import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Route } from '@config/routing';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';
import Seo from '@common/Seo';
import Link from '@common/Link';
import Layout from '@common/Layout';

const LinkButton = ({ children, href, to }) => {
  return (
    <Link href={href} to={to}>
      <Button size="large" color="primary" variant="contained">
        <Typography variant="h4">{children}</Typography>
      </Button>
    </Link>
  );
};

const useStyles = makeStyles(theme => ({
  nav: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    textAlign: 'center',
  },
}));

const IndexPage = ({ location }) => {
  const classes = useStyles();

  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            dcbotUrl
            apiUrl
            author
            authorEmail
            contactUrl
            scriptsUrl
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Seo title="Home" pathname={location.pathname} />
      <Container component="main" className={classes.container}>
        <header>
          <Typography gutterBottom variant="h1">
            TWHelp
          </Typography>
        </header>
        <nav className={classes.nav}>
          <div>
            <LinkButton href={siteMetadata.apiUrl}>API</LinkButton>
          </div>
          <div>
            <LinkButton href={siteMetadata.dcbotUrl}>Discord Bot</LinkButton>
          </div>
          <div>
            <LinkButton to={Route.SupportedVersions}>
              Stat tracking website
            </LinkButton>
          </div>
          <div>
            <LinkButton href={siteMetadata.scriptsUrl}>Scripts</LinkButton>
          </div>
          <div>
            <LinkButton href={siteMetadata.contactUrl}>Contact</LinkButton>
          </div>
        </nav>
        <footer>
          <Typography>
            &copy; {new Date().getFullYear()}{' '}
            <Link href={`mailto:${siteMetadata.authorEmail}`}>
              {siteMetadata.author}
            </Link>
          </Typography>
        </footer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
