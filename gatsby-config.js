const DOMAIN = 'tribalwarshelp.com';
const SITE_URL = 'https://' + DOMAIN;
const API_URL = 'https://api.' + DOMAIN;

module.exports = {
  siteMetadata: {
    title: `TWHelp`,
    description: `Tools for the popular online game TribalWars.`,
    dcbotUrl: 'https://dcbot.' + DOMAIN,
    apiUrl: API_URL,
    author: 'Dawid Wysokiński',
    authorEmail: 'contact@dwysokinski.me',
    contactUrl: 'https://dwysokinski.me/#contact',
    scriptsUrl: 'https://github.com/tribalwarshelp/scripts',
    siteUrl: SITE_URL,
    baseUrl: DOMAIN,
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
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: SITE_URL + '/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'twhelp',
        // This is the field under which it's accessible
        fieldName: 'twhelp',
        // URL to query from
        url: API_URL + '/graphql',
      },
    },
    {
      resolve: `@kichiyaki/gatsby-plugin-plausible`,
      options: {
        domain: DOMAIN,
        customDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN,
      },
    },
  ],
};
