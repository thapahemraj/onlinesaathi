/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([React.createElement("script", {
    key: "site-theme-init",
    dangerouslySetInnerHTML: { __html: `(function(){var theme;try{theme=localStorage.getItem('os-theme')}catch(e){}document.documentElement.dataset.theme=theme==='dark'||theme==='light'?theme:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()` },
  })])
}
