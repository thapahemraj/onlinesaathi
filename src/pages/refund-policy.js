import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const RefundPolicyPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Refund Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Refund Policy"
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <p>
                  <i>This Refund Policy was last updated on January 1, 2025.</i>
                </p>

                <h3>1. Overview</h3>
                <blockquote className="blockquote">
                  <p>
                    At Online Saathi, we act solely as a third-party technology
                    platform connecting users with various service providers. We
                    do not directly provide or control the services delivered by
                    our partners. This Refund Policy outlines the limited
                    scenarios where refunds may be applicable and clarifies our
                    role and responsibility.
                  </p>
                </blockquote>

                <h3>2. General Refund Terms</h3>
                <h4>2.1 No Refunds for Completed Services</h4>
                <ul>
                  <li>
                    Once a user successfully purchases a service, subscription,
                    or offer through Online Saathi, and the order is processed
                    with the service provider, no refund will be provided.
                  </li>
                  <li>
                    Users are requested to carefully verify all details before
                    making a payment.
                  </li>
                </ul>
                <h4>2.2 Platform Service Fee</h4>
                <ul>
                  <li>
                    Any platform convenience charges collected by Online Saathi
                    are non-refundable, even if the transaction is later canceled
                    by the user or the service provider.
                  </li>
                </ul>
                <h4>2.3 Third-Party Services</h4>
                <ul>
                  <li>
                    Refunds related to the quality, delay, or non-delivery of the
                    service are subject to the respective service provider's
                    refund or grievance redressal policy.
                  </li>
                  <li>
                    Online Saathi will facilitate communication between the user
                    and service provider but is not responsible for any final
                    outcome of refund claims.
                  </li>
                </ul>

                <h3>3. Refunds for Failed Transactions</h3>
                <h4>3.1 Automatic Refunds for Failed Transactions</h4>
                <ul>
                  <li>
                    If a user's payment is deducted but the transaction fails at
                    Online Saathi's payment gateway level, the amount will be
                    automatically refunded to the user's original payment method
                    within 3 to 21 working days.
                  </li>
                  <li>
                    Refunds will cover only the net transaction amount (excluding
                    any applicable gateway charges, bank fees, or taxes).
                  </li>
                </ul>
                <h4>3.2 Disputed Transactions</h4>
                <ul>
                  <li>
                    If a transaction appears successful but the user does not
                    receive service access, the user must raise a support request
                    by emailing support@onlinesaathi.org within 48 hours of the
                    transaction.
                  </li>
                  <li>
                    Online Saathi will investigate with the payment gateway
                    and/or service provider.
                  </li>
                  <li>
                    Based on the investigation, a refund may be facilitated, but
                    the final decision rests with the service provider.
                  </li>
                </ul>

                <h3>4. KYC Verification Failure</h3>
                <p>
                  If a user fails to complete KYC (Know Your Customer)
                  verification, resulting in account non-activation, the payment
                  made will not be refunded.
                </p>

                <h3>5. Important Terms</h3>
                <ul>
                  <li>
                    Role Clarification: Online Saathi is a facilitator platform.
                    The responsibility for service fulfillment lies with
                    third-party providers.
                  </li>
                  <li>
                    Maximum Liability: Our liability is strictly limited to
                    refunding the transaction amount collected by us, if
                    applicable.
                  </li>
                  <li>
                    No Consequential Damages: Online Saathi is not responsible
                    for any indirect losses, damages, or inconvenience suffered
                    by the user.
                  </li>
                </ul>

                <h3>6. Changes to This Policy</h3>
                <p>
                  We may revise this Refund Policy from time to time. Updates
                  will be posted on our website and/or communicated via email or
                  SMS, as appropriate.
                </p>

                <h3>7. Contact Us</h3>
                <p>For any refund-related queries, please reach out to:</p>
                <ul>
                  <li>Email: support@onlinesaathi.org</li>
                  <li>Phone: +91-9099005251</li>
                  <li>Website: www.onlinesaathi.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Refund Policy" />

export default RefundPolicyPage