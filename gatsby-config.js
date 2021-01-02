const baseUrl = "tribalwarshelp.com"
const siteUrl = "https://" + baseUrl
const apiUrl = "https://api." + baseUrl

module.exports = {
  siteMetadata: {
    title: `TWHelp`,
    description: `Tools for the popular online game TribalWars.`,
    dcbotUrl: "https://dcbot." + baseUrl,
    apiUrl,
    author: "Dawid Wysokiński",
    contactUrl: "http://dawid-wysokinski.pl/#contact",
    scriptsUrl: "https://github.com/tribalwarshelp/scripts",
    siteUrl,
    baseUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tribal Wars Help`,
        short_name: `TWHelp`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#303030`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: siteUrl + "/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "twhelp",
        // This is the field under which it's accessible
        fieldName: "twhelp",
        // URL to query from
        url: apiUrl + "/graphql",
      },
    },
  ],
}
