const siteUrl = "https://tribalwarshelp.com"

module.exports = {
  siteMetadata: {
    title: `TWHelp`,
    description: `Tools for the popular online game TribalWars.`,
    dcbotUrl: "https://dcbot.tribalwarshelp.com",
    apiUrl: "https://api.tribalwarshelp.com",
    author: "Dawid Wysokiński",
    contactUrl: "http://dawid-wysokinski.pl/#contact",
    scriptsUrl: "https://github.com/tribalwarshelp/scripts",
    mapToolUrl: "https://map.tribalwarshelp.com",
    siteUrl,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
