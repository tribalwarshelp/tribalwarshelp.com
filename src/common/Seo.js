import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import seoImg from '@images/seo.png';

function Seo({ description, lang, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${seoImg}`,
        },
        {
          property: `og:image:width`,
          content: `1280`,
        },
        {
          property: `og:image:height`,
          content: `640`,
        },
        {
          property: `og:image`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${seoImg}`,
        },
        {
          name: `twitter:image:alt`,
          content: site.siteMetadata.title,
        },
      ].concat(meta)}
    >
      <link
        rel="canonical"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      ></link>
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
