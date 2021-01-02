import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Box, Container } from "@material-ui/core"
import SEO from "../components/SEO"
import Link from "../components/Link"

const LinkButton = ({ children, href, to }) => {
  return (
    <Link href={href} to={to} underline="none">
      <Button size="large" color="secondary" variant="contained">
        <Typography variant="h4">{children}</Typography>
      </Button>
    </Link>
  )
}

const useStyles = makeStyles(theme => ({
  nav: {
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}))

const IndexPage = ({ location }) => {
  const classes = useStyles()

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
            contactUrl
            scriptsUrl
          }
        }
      }
    `
  )

  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      paddingY={5}
    >
      <SEO title="Home" pathname={location.pathname} />
      <Container component="main">
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
            <LinkButton to={"/supported-versions"}>
              Stat tracking website
            </LinkButton>
          </div>
          <div>
            <LinkButton href={siteMetadata.scriptsUrl}>Scripts</LinkButton>
          </div>
          <div>
            <LinkButton href={siteMetadata.contactUrl}>Contact</LinkButton>
          </div>
          <Box width="100%">
            <Typography variant="h4">More coming soon...</Typography>
          </Box>
        </nav>
        <footer>
          <Typography>
            &copy; {new Date().getFullYear()} {siteMetadata.author}
          </Typography>
        </footer>
      </Container>
    </Box>
  )
}

export default IndexPage
