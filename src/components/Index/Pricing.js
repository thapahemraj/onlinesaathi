import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const Pricing = () => {
  return (
    <>
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="priceing" />
              Community Impact
            </span>
            <h2>Our network continues to grow</h2>
            <p>
              Online Saathi is building a supportive ecosystem where workers,
              services, and opportunities come together to create lasting impact.
            </p>
          </div>

          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span className="title">Community Highlights</span>
                  </th>
                  <th>
                    <span className="price">12,500+</span>
                    <span className="title">Individuals Placed</span>
                  </th>
                  <th>
                    <span className="price">50+</span>
                    <span className="title">Services</span>
                  </th>
                  <th>
                    <span className="price">1500+</span>
                    <span className="title">Saathis</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Active network</td>
                  <td>Strong</td>
                  <td>Growing</td>
                  <td>Trusted</td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Worker support</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Career pathways</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Service access</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Community growth</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Growth opportunities</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Community trust</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Skill and support</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login">Long-term impact</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login" className="select-btn">
                      Apply now
                    </Link>
                  </td>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login" className="select-btn">
                      Join now
                    </Link>
                  </td>
                  <td>
                    <Link to="https://dash.onlinesaathi.org/login" className="select-btn">
                      Become a Saathi
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
