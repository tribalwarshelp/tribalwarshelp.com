import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Box,
  Card,
  CardHeader,
  Grid,
  Container,
  Typography,
} from "@material-ui/core"
import Link from "../components/Link"
import SEO from "../components/SEO"

const buildURLToVersionPage = (baseUrl, code) => {
  return `https://${code}.${baseUrl}`
}

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
  `)
  console.log(versions, baseUrl)
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
          <Typography variant="h1" align="center" gutterBottom>
            <Link color="secondary" underline="none" to="/">
              TWHelp
            </Link>
          </Typography>
        </header>
        <Grid container spacing={2}>
          {versions.map(version => (
            <Grid item xs={3}>
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
  )
}

export default SupportedVersionsPage
