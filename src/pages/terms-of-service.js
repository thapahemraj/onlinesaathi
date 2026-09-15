import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const TermsOfServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Terms of Service"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Terms of Service"
      />

      <section className="terms-of-service-area ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="terms-of-service-content">
                <p>
                  <i>These Terms were last updated on January 1, 2025.</i>
                </p>

                <h3>1. Introduction</h3>
                <blockquote className="blockquote">
                  <p>
                    Welcome to Online Saathi, operated by SHUBHLAXMI MULTISERVICES
                    INDIA PRIVATE LIMITED. By accessing or using our website
                    www.onlinesaathi.org, mobile app, or any other services
                    ("Platform"), you agree to be legally bound by these Terms
                    and Conditions. If you do not agree to these Terms, please
                    do not use our Platform.
                  </p>
                </blockquote>
                <p>
                  Online Saathi provides a technology-based marketplace and
                  facilitation platform enabling users to access a range of
                  services including financial services, remittance, travel
                  bookings, bill payments, job discovery, government scheme
                  consultancy, and community engagement support. Online Saathi
                  operates solely as a facilitator between users and third-party
                  service providers and does not directly deliver, control, or
                  guarantee the end services or outcomes offered by such service
                  providers.
                </p>

                <h3>2. Definitions and Interpretations</h3>
                <h4>Platform</h4>
                <p>
                  "Platform" means the digital ecosystem operated by Online
                  Saathi, including its website, mobile applications, and all
                  associated services offered to users.
                </p>
                <h4>User</h4>
                <p>
                  "User" refers to any individual, entity, or organization that
                  accesses, browses, registers, or avails services through the
                  Online Saathi Platform.
                </p>
                <h4>Saathi</h4>
                <p>
                  "Saathi" means an independent local community entrepreneur
                  affiliated with Online Saathi, who facilitates access to
                  social welfare schemes, financial services, employment
                  opportunities, and other essential services to citizens. A
                  Saathi operates on a commission or incentive basis and is not
                  an employee of Online Saathi.
                </p>

                <h3>3. Scope of Services</h3>
                <p>
                  We facilitate a range of services through trusted partners:
                </p>
                <ul>
                  <li>
                    Indo-Nepal Remittance Services: We act only as a reseller and
                    technology platform. Users are responsible for entering
                    accurate beneficiary details, and transactions once processed
                    cannot be reversed.
                  </li>
                  <li>
                    Travel Services (Bus, Train, Air Tickets): We assist only
                    with ticket booking, issuance, cancellation, and refund
                    processing as per partner policies. We do not operate any
                    transport services ourselves.
                  </li>
                  <li>
                    Bill Payments & Insurance Premium Payments: We act as a
                    Distributor Technology Platform and do not guarantee instant
                    success of payments, which depends on the respective service
                    provider's systems.
                  </li>
                  <li>
                    Domestic Money Remittance (DMT): Provided via authorized
                    partner banks and payment systems. Refunds in case of
                    transaction failures are subject to banking regulations and
                    may take 3-21 working days.
                  </li>
                  <li>
                    Job Discovery Services: We provide access to curated job
                    listings but do not guarantee placement, interview calls, or
                    employment offers.
                  </li>
                  <li>
                    Government Schemes Consultancy: We help with guidance and
                    application assistance only; we do not guarantee approval or
                    disbursement of benefits.
                  </li>
                  <li>
                    Community Engagement Services: Users are responsible for the
                    content they share; abuse, harassment, spamming, or sharing
                    misleading information is strictly prohibited.
                  </li>
                </ul>

                <h3>4. User Obligations</h3>
                <p>By using the Platform, you agree that:</p>
                <ul>
                  <li>
                    You are at least 18 years old and legally competent.
                  </li>
                  <li>
                    You will provide true, accurate, current, and complete
                    information.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your login credentials.
                  </li>
                  <li>
                    You will not use the Platform for any unlawful activities.
                  </li>
                </ul>

                <h3>5. Registration and Account</h3>
                <p>
                  To access some services, you must register an account. Online
                  Saathi reserves the right to reject or suspend any account if
                  false information is provided, fraudulent activities are
                  suspected, or required KYC verification is incomplete.
                </p>

                <h3>6. Payment Terms</h3>
                <ul>
                  <li>
                    All payments must be made through Online Saathi's official
                    payment methods.
                  </li>
                  <li>
                    Consultancy fees for government schemes are charged separately
                    and do not guarantee scheme approval.
                  </li>
                  <li>
                    We do not collect any government application fees.
                  </li>
                  <li>Refunds are processed only as per our Refund Policy.</li>
                </ul>

                <h3>7. Role as a Third-Party Facilitator</h3>
                <p>
                  Online Saathi is only a facilitator. Actual services
                  (remittance, ticket bookings, etc.) are provided by third-party
                  service providers, and all disputes regarding services must be
                  directly addressed with the respective provider.
                </p>

                <h3>8. Limitation of Liability</h3>
                <p>
                  Online Saathi's liability is strictly limited to the
                  transaction value or ₹500, whichever is lesser. We are not
                  responsible for delays, cancellations, errors, or failures by
                  service providers, or for financial loss, emotional distress,
                  or indirect damages.
                </p>

                <h3>9. Intellectual Property</h3>
                <p>
                  All content, trademarks, service marks, and logos on the
                  Platform belong exclusively to Online Saathi. No User may copy,
                  distribute, reproduce, or exploit any material without our
                  prior written permission.
                </p>

                <h3>10. Prohibited Conduct</h3>
                <p>You agree NOT to:</p>
                <ul>
                  <li>Engage in fraudulent activities.</li>
                  <li>Share or post misleading, offensive, or illegal content.</li>
                  <li>Harass, abuse, or harm other users.</li>
                  <li>Attempt to breach Platform security.</li>
                  <li>
                    Copy, scrape, or misuse Platform data using bots or any
                    automated tools.
                  </li>
                </ul>
                <p>
                  Violations will result in account termination and legal action.
                </p>

                <h3>11. Termination</h3>
                <p>
                  Online Saathi reserves the right to suspend or terminate any
                  user account without notice if the Terms are violated, fraud or
                  misuse is detected, or required by law enforcement or
                  regulatory bodies.
                </p>

                <h3>12. Jurisdiction and Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Courts located in Ahmedabad, Gujarat
                  shall have exclusive jurisdiction for all disputes arising out
                  of or relating to the Platform.
                </p>

                <h3>13. Changes to Terms</h3>
                <p>
                  Online Saathi may amend these Terms at any time without prior
                  notice. Users are advised to review the Terms periodically.
                  Continued use of the Platform after changes implies acceptance.
                </p>

                <h3>14. Contact Us</h3>
                <p>
                  For queries, complaints, or grievances, please reach out to:
                </p>
                <ul>
                  <li>
                    Registered Office: 29-421, Bhadreshwar Housing Society,
                    Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475,
                    India.
                  </li>
                  <li>
                    Corporate Office: 309, The Atlanta Business Hub, Naroda Ring
                    Road, Ahmedabad, Gujarat - 382330, India.
                  </li>
                  <li>General Inquiries: admin@onlinesaathi.org</li>
                  <li>Grievance Redressal Officer: ceo@onlinesaathi.org</li>
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

export const Head = () => <Seo title="Terms Of Service" />

export default TermsOfServicePage