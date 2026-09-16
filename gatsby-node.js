/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const serviceSlugs = [
    "safe-jobs-connect",
    "social-welfare-schemes",
    "micro-atm-services",
    "pan-card-center",
    "travel-bill-payments",
    "neo-banking-remittance",
  ]

  serviceSlugs.forEach(slug => {
    createPage({
      path: `/services/${slug}`,
      component: require.resolve("./src/templates/service-detail.js"),
      context: { slug },
    })
  })
}
