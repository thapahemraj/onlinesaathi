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
                <h3>1. Introduction</h3>
                <blockquote className="blockquote">
                  <p>
                    Welcome to Online Saathi ("we", "our", "us"), operated by
                    SHUBHLAXMI MULTISERVICES INDIA PRIVATE LIMITED (SMSIPL).
                  </p>
                </blockquote>
                <p>
                  By accessing or using our website www.onlinesaathi.org, mobile
                  app, or any other services ("Platform"), you ("User", "you",
                  "your") agree to be legally bound by these Terms and
                  Conditions ("Terms").
                </p>
                <p>If you do not agree to these Terms, please do not use our Platform.</p>
                <p>
                  Online Saathi is a platform operated and managed by Shubhlaxmi
                  Multiservices India Private Limited, a company incorporated
                  under the Companies Act, 2013, having its registered office at
                  29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah,
                  Kotarpur, Ahmedabad, Gujarat - 382475, India ("Online Saathi"
                  or "Company").
                </p>
                <p>
                  Online Saathi provides a technology-based marketplace and
                  facilitation platform enabling users to access a range of
                  services including but not limited to financial services,
                  remittance, travel bookings, bill payments, job discovery,
                  government scheme consultancy, and community engagement
                  support.
                </p>
                <p>
                  Online Saathi operates solely as a facilitator between users
                  and third-party service providers and does not directly
                  deliver, control, or guarantee the end services or outcomes
                  offered by such service providers.
                </p>
                <p>
                  The Company's role is limited to providing information,
                  technology tools, and access to third-party services through
                  its platform comprising the website, mobile applications, and
                  associated technologies.
                </p>

                <h3>2. Definitions and Interpretations</h3>
                <p>In this Agreement, unless the context otherwise requires:</p>
                <ul>
                  <li>
                    Terms defined in this section shall have the meanings
                    assigned to them below.
                  </li>
                  <li>
                    Headings are for reference purposes only and shall not
                    affect the interpretation of any provision.
                  </li>
                  <li>
                    Words importing the singular shall include the plural and
                    vice versa.
                  </li>
                  <li>
                    References to persons include individuals, bodies corporate,
                    unincorporated associations, partnerships, and government
                    authorities.
                  </li>
                </ul>
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
                <h4>Third-Party Service Providers</h4>
                <p>
                  "Third-Party Service Providers" means independent vendors,
                  companies, or organizations offering their services through
                  the Online Saathi Platform, including but not limited to
                  remittance, travel bookings, bill payments, insurance, and
                  other services.
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
                <h4>District Partner</h4>
                <p>
                  "District Partner" refers to an organization, agency, or
                  individual formally engaged by Online Saathi to recruit,
                  manage, and support Saathis within a specified district,
                  ensuring operational compliance, training delivery, and
                  service quality monitoring.
                </p>
                <h4>State Partner</h4>
                <p>
                  "State Partner" refers to a senior-level partner entity
                  engaged to oversee the expansion, governance, and coordination
                  of Online Saathi's network and services across an entire State
                  or Union Territory, including management of District Partners
                  and strategic partnerships.
                </p>

                <h3>3. Scope of Services</h3>
                <h4>3.1 Indo-Nepal Remittance Services</h4>
                <p>
                  We facilitate Indo-Nepal remittance services through our
                  partnered service providers.
                </p>
                <ul>
                  <li>Online Saathi acts only as a reseller and technology platform.</li>
                  <li>Users are responsible for entering accurate beneficiary details.</li>
                  <li>Transactions once processed cannot be reversed.</li>
                  <li>
                    Refunds are not available if incorrect details are provided
                    by the user.
                  </li>
                  <li>
                    Compliance with AML (Anti-Money Laundering) and KYC norms is
                    mandatory.
                  </li>
                </ul>
                <p>
                  Important: All disputes related to delivery, exchange rate, or
                  transaction errors must be directly taken up with the service
                  provider. Online Saathi will only provide facilitation
                  support.
                </p>
                <h4>3.2 Travel Services (Bus, Train, Air Tickets)</h4>
                <p>
                  Online Saathi enables booking of bus, train, and flight
                  tickets through authorized aggregators and operators.
                </p>
                <ul>
                  <li>We do not operate any transport services ourselves.</li>
                  <li>
                    We assist only with ticket booking, issuance, cancellation,
                    and refund processing (as per partner policies).
                  </li>
                  <li>
                    Users are advised to verify travel details carefully before
                    confirming bookings.
                  </li>
                  <li>
                    Any issues during travel (like delays, cancellations,
                    missing services) are between the user and the travel
                    operator.
                  </li>
                </ul>
                <p>
                  Note: Refunds and rescheduling are strictly governed by the
                  service provider's policies.
                </p>
                <h4>3.3 Bill Payments & Insurance Premium Payments</h4>
                <p>
                  Users can pay utility bills (electricity, water, gas),
                  mobile/DTH recharges, and insurance premiums via Online Saathi.
                </p>
                <ul>
                  <li>We act as a Distributor Technology Platform.</li>
                  <li>
                    We do not guarantee instant success of bill payments. It
                    depends on the respective service provider's server and
                    systems.
                  </li>
                  <li>Users must double-check bill details before proceeding.</li>
                  <li>
                    Online Saathi is not responsible for delays or rejections
                    caused by banks, payment processors, or billing entities.
                  </li>
                </ul>
                <p>
                  Tip: Always maintain proof of payment (receipt or transaction
                  ID) for any follow-up.
                </p>
                <h4>3.4 Domestic Money Remittance Services</h4>
                <p>
                  We offer domestic money transfer (DMT) services, allowing
                  users to send money within India to bank accounts.
                </p>
                <ul>
                  <li>
                    Services are provided via authorized partner banks and
                    payment systems.
                  </li>
                  <li>
                    Users must ensure that funds originate from legitimate
                    sources.
                  </li>
                  <li>Online Saathi is not responsible for transaction failures caused by:</li>
                </ul>
                <ul>
                  <li>Bank server issues</li>
                  <li>Regulatory interventions (NPCI, RBI)</li>
                  <li>Incorrect account information entered by the user</li>
                </ul>
                <p>
                  Important: Refunds in case of transaction failures are subject
                  to banking regulations and may take 3-21 working days.
                </p>
                <h4>3.5 Job Discovery Services</h4>
                <p>
                  Online Saathi provides access to curated job listings sourced
                  from third-party employers and job boards.
                </p>
                <ul>
                  <li>
                    We do not guarantee placement, interview calls, or
                    employment offers.
                  </li>
                  <li>
                    We strongly recommend users conduct background checks on
                    employers before accepting any offer.
                  </li>
                  <li>Job listings are provided for informational purposes only.</li>
                </ul>
                <p>
                  Note: Online Saathi is not liable for job scams, fake offers,
                  salary disputes, or working condition issues.
                </p>
                <h4>3.6 Government Schemes Discovery and Consultancy</h4>
                <p>
                  We help users by providing guidance and application assistance
                  for various government schemes.
                </p>
                <ul>
                  <li>
                    We do not have any official tie-up with any government
                    department.
                  </li>
                  <li>
                    We only offer consultancy services to assist in
                    understanding eligibility, documents required, and
                    application process.
                  </li>
                  <li>
                    We do not guarantee approval, disbursement of benefits, or
                    processing speed.
                  </li>
                  <li>
                    Consultancy fees are charged only for informational support,
                    not for success outcomes.
                  </li>
                </ul>
                <p>
                  Warning: Never make unauthorized payments directly to agents
                  or outsiders claiming guaranteed approval. Always pay only via
                  official Online Saathi channels.
                </p>
                <h4>3.7 Community Engagement Services</h4>
                <p>
                  Our community platform connects users to share updates,
                  opportunities, and social interactions.
                </p>
                <ul>
                  <li>Users are responsible for the content they share.</li>
                  <li>
                    Abuse, harassment, spamming, or sharing misleading
                    information is strictly prohibited.
                  </li>
                  <li>
                    Online Saathi reserves the right to remove objectionable
                    content and suspend accounts without notice.
                  </li>
                </ul>
                <p>
                  Advice: Exercise caution when acting upon advice or
                  information shared by other users within the community.
                </p>

                <h3>4. User Obligations</h3>
                <p>By using the Platform, you agree that:</p>
                <ul>
                  <li>You are at least 18 years old and legally competent.</li>
                  <li>
                    You will provide true, accurate, current, and complete
                    information.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your login credentials.
                  </li>
                  <li>You will not use the Platform for any unlawful activities.</li>
                  <li>
                    You will avoid making double payments or speculative
                    transactions without confirmation.
                  </li>
                </ul>

                <h3>5. Registration and Account</h3>
                <p>To access some services, you must register an account.</p>
                <p>Online Saathi reserves the right to reject or suspend any account if:</p>
                <ul>
                  <li>False information is provided,</li>
                  <li>Fraudulent activities are suspected,</li>
                  <li>Required KYC verification is incomplete.</li>
                </ul>

                <h3>6. Payment Terms</h3>
                <ul>
                  <li>
                    All payments must be made through Online Saathi's official
                    payment methods.
                  </li>
                  <li>
                    Consultancy fees for government schemes are charged
                    separately and do not guarantee scheme approval.
                  </li>
                  <li>We do not collect any government application fees.</li>
                  <li>Refunds are processed only as per our Refund Policy.</li>
                </ul>

                <h3>7. Role as a Third-Party Facilitator</h3>
                <p>Online Saathi is only a facilitator.</p>
                <p>
                  Actual services (remittance, ticket bookings, etc.) are
                  provided by third-party service providers.
                </p>
                <p>
                  All disputes regarding services must be directly addressed
                  with the respective provider.
                </p>

                <h3>8. Limitation of Liability</h3>
                <p>
                  Online Saathi's liability is strictly limited to the
                  transaction value or ₹500, whichever is lesser.
                </p>
                <p>We are not responsible for:</p>
                <ul>
                  <li>Delays, cancellations, errors, or failures by service providers.</li>
                  <li>Financial loss, emotional distress, or indirect damages.</li>
                  <li>Failures due to banking systems (RBI, NPCI, partner banks).</li>
                </ul>

                <h3>9. Intellectual Property</h3>
                <p>
                  All content, trademarks, service marks, and logos on the
                  Platform belong exclusively to Online Saathi. No User may copy,
                  distribute, reproduce, or exploit any material without our
                  prior written permission.
                </p>

                <h3>10. Privacy Policy</h3>
                <p>
                  Your use of the Platform is also governed by our Privacy
                  Policy, which explains how we collect, use, and protect your
                  data.
                </p>

                <h3>11. Prohibited Conduct</h3>
                <p>You agree NOT to:</p>
                <ul>
                  <li>Engage in fraudulent activities</li>
                  <li>Share or post misleading, offensive, or illegal content</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to breach Platform security</li>
                  <li>
                    Copy, scrape, or misuse Platform data using bots or any
                    automated tools
                  </li>
                </ul>
                <p>Violations will result in account termination and legal action.</p>

                <h3>12. Force Majeure</h3>
                <p>
                  Online Saathi shall not be liable for any failure or delay due
                  to reasons beyond reasonable control, including natural
                  disasters, strikes, pandemics, network failures, government
                  actions, etc.
                </p>

                <h3>13. Termination</h3>
                <p>
                  Online Saathi reserves the right to suspend or terminate any
                  user account without notice if:
                </p>
                <ul>
                  <li>The Terms are violated,</li>
                  <li>Fraud or misuse is detected,</li>
                  <li>Required by law enforcement or regulatory bodies.</li>
                </ul>

                <h3>14. Disclaimer</h3>
                <p>
                  All services are provided on an "as-is" and "as-available"
                  basis. Online Saathi makes no warranties regarding the
                  availability, accuracy, or reliability of any content or
                  services.
                </p>

                <h3>15. Jurisdiction and Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Courts located in Ahmedabad, Gujarat
                  shall have exclusive jurisdiction for all disputes arising out
                  of or relating to the Platform.
                </p>

                <h3>16. Indemnity</h3>
                <p>
                  You agree to indemnify and hold harmless Online Saathi, its
                  officers, directors, employees, and agents from any claims,
                  losses, liabilities, or demands arising from:
                </p>
                <ul>
                  <li>Your use of the Platform,</li>
                  <li>Violation of these Terms,</li>
                  <li>Infringement of third-party rights.</li>
                </ul>

                <h3>17. Changes to Terms</h3>
                <p>
                  Online Saathi may amend these Terms at any time without prior
                  notice. Users are advised to review the Terms periodically.
                  Continued use of the Platform after changes implies
                  acceptance.
                </p>

                <h3>18. Contact Us</h3>
                <p>For queries, complaints, or grievances, please reach out to:</p>
                <ul>
                  <li>
                    Registered Office: 29-421, Bhadreshwar Housing Society,
                    Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475,
                    India.
                  </li>
                  <li>
                    Corporate Office: The Antelia Business Hub, 405, Sardar Patel Ring Rd, Naroda, Ahmedabad, Gujarat 382330.
                  </li>
                  <li>General Inquiries: admin@onlinesaathi.org</li>
                  <li>Grievance Redressal Officer: ceo@onlinesaathi.org</li>
                </ul>
                <p>
                  By continuing to use Online Saathi's services, you acknowledge
                  that you have read, understood, and agreed to these Terms &
                  Conditions.
                </p>
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