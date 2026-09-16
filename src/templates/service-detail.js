import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent"
import RelatedServices from "../components/ServiceDetails/RelatedServices"
import Footer from "../components/_App/Footer"
import services from "../data/services"

const getService = slug =>
  services.find(service => service.slug === slug) || services[0]

const ServiceDetailPage = ({ pageContext }) => {
  const service = getService(pageContext.slug)

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={service.title}
        homePageText="Home"
        homePageUrl="/"
        middlePageText="Services"
        middlePageUrl="/services"
        activePageText={service.title}
      />

      <ServiceDetailsContent service={service} />

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ pageContext }) => {
  const service = getService(pageContext.slug)
  return <Seo title={service.title} />
}

export default ServiceDetailPage