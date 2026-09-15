import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"
import StartProject from "../components/Common/StartProject"
import Footer from "../components/_App/Footer"

const FAQPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageText="Home"
        homePageUrl="/"
        activePageText="FAQ"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q1. How do I become a Saathi partner?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Visit our contact page or reach us at
                    support@onlinesaathi.org. Our partnership team will guide
                    you through onboarding and help you get started as a Saathi
                    agent in your area.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q2. What services can I access through Online Saathi?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Online Saathi offers job matching, government scheme
                    assistance, micro ATM services, PAN card applications, bill
                    payments, travel booking, insurance, and Indo-Nepal
                    remittance services — all through your local Saathi.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q3. How does the Jobs Connect service work?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Your local Saathi assesses your skills, matches you with
                    relevant job opportunities, and supports you through the
                    application process. All employers and job listings are
                    verified for your safety.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q4. Is there a fee to use Online Saathi services?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Most services are free for end users. Some services like PAN
                    card applications or travel bookings may have standard
                    processing fees, which are transparently communicated
                    upfront.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q5. How do I get help with government schemes?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Your local Saathi will identify schemes you may be eligible
                    for, help you gather the required documents, assist with the
                    application, and follow up until benefits are delivered.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <StartProject />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="FAQ" />

export default FAQPage
