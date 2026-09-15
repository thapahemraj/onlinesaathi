import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <p>
                  <i>This Privacy Policy was last updated on January 1, 2025.</i>
                </p>
                <h3>1. Commitment to Privacy</h3>
                <blockquote className="blockquote">
                  <p>
                    At Online Saathi, operated by SHUBHLAXMI MULTI SERVICES INDIA
                    PRIVATE LIMITED, we are committed to safeguarding your
                    privacy. Your trust is at the heart of our services. We
                    strictly follow applicable Indian laws, regulations, and
                    guidelines to protect your personal information.
                  </p>
                </blockquote>

                <h3>2. Information We Collect</h3>
                <p>
                  We collect necessary personal and business information to
                  provide a secure, seamless experience:
                </p>
                <h4>2.1 User Information</h4>
                <ul>
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Date of Birth</li>
                  <li>Gender</li>
                  <li>Profile Photo</li>
                </ul>
                <h4>2.2 Member Information</h4>
                <ul>
                  <li>Current and Permanent Address</li>
                  <li>
                    Identity Proof (Aadhar Card, PAN Card, Passport, Citizenship,
                    Driver's License)
                  </li>
                  <li>Occupation and Education Details</li>
                  <li>Marital Status and Location</li>
                </ul>
                <h4>2.3 Business Information (For Saathi, Partners, Companies)</h4>
                <ul>
                  <li>Business Name (only registered names)</li>
                  <li>Business Registration Certificates</li>
                  <li>Director Personal Details</li>
                  <li>Type of Business</li>
                  <li>Registered Address</li>
                  <li>Secondary Contact Information</li>
                  <li>Bank Details (optional)</li>
                  <li>
                    Business Documents (PAN, MOA, AOA, licenses, if applicable)
                  </li>
                </ul>
                <h4>2.4 Job Applicant Information</h4>
                <ul>
                  <li>Resume and Cover Letter</li>
                  <li>Educational and Professional Qualifications</li>
                  <li>References</li>
                </ul>
                <h4>2.5 App Permissions</h4>
                <ul>
                  <li>Camera and Photos: For KYC and profile verification</li>
                  <li>SMS Access: To send and receive transaction confirmations</li>
                  <li>
                    Contacts Access: To simplify number selection (no storage or
                    sharing)
                  </li>
                  <li>Location Access: To locate nearby agents and services</li>
                  <li>Internet Access: For a seamless transaction experience</li>
                </ul>

                <h3>3. How We Use Your Information</h3>
                <p>We use the collected data to:</p>
                <ul>
                  <li>Verify your identity</li>
                  <li>Facilitate services and transactions</li>
                  <li>Communicate service updates and promotions</li>
                  <li>Provide customer support</li>
                  <li>Improve our platform and services</li>
                  <li>Detect fraud and unauthorized activities</li>
                  <li>Ensure compliance with Indian regulatory authorities</li>
                </ul>

                <h3>4. Sharing and Disclosure</h3>
                <p>
                  Your information remains confidential and is not shared without
                  your consent, except:
                </p>
                <ul>
                  <li>When required by law (government, legal authorities)</li>
                  <li>For fraud prevention and security measures</li>
                  <li>
                    When collaborating with trusted partners (under strict data
                    protection agreements)
                  </li>
                </ul>

                <h3>5. Data Retention & Account Deletion</h3>
                <p>We manage your data as follows:</p>
                <ul>
                  <li>
                    Retention: We keep your information only as long as needed
                    for operational, legal, and regulatory purposes.
                  </li>
                  <li>
                    Deletion: Inactive accounts (6 months to 3 years) may be
                    deleted if: the account balance is zero, no pending
                    transactions exist, or fraudulent/misuse activities are
                    detected.
                  </li>
                  <li>
                    For job applicants, data may be retained for evaluation even
                    after recruitment closure.
                  </li>
                </ul>

                <h3>6. Data Protection</h3>
                <p>
                  We employ industry-standard security practices, including
                  encryption, secure servers, and regular audits, to protect
                  your data.
                </p>

                <h3>7. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  practices or legal obligations. Significant changes will be
                  communicated via SMS, email, or in-app notifications. The
                  latest version will be posted on our website.
                </p>

                <h3>8. Contact Information</h3>
                <p>
                  If you have any queries, concerns, or feedback regarding this
                  privacy policy, or if you wish to exercise your rights under
                  applicable law:
                </p>
                <ul>
                  <li>
                    Registered Office: 109, Maruti Heights, Naroda Ring Road,
                    Near Muthiya Toll Plaza, Ahmedabad, Gujarat 382345, India
                  </li>
                  <li>Email: support@onlinesaathi.org</li>
                  <li>Website: www.onlinesaathi.org</li>
                  <li>Phone: +91 84888 56251</li>
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

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage