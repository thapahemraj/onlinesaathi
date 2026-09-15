/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Online Saathi`,
    description: `Online Saathi connects migrant workers and communities with jobs, government schemes, and essential services through a trusted network of local Saathi agents across India.`,
    author: `@onlinesaathi`,
    siteUrl: `https://www.onlinesaathi.org`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Online Saathi`,
        short_name: `Online Saathi`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon-old.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
