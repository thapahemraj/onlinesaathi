import React, { useState } from "react"
import { Link } from "gatsby"
import scientist1 from "../../images/scientist/scientist1.png"
import scientist2 from "../../images/scientist/scientist2.png"
import scientist3 from "../../images/scientist/scientist3.png"
import scientist4 from "../../images/scientist/scientist4.png"
import scientist5 from "../../images/scientist/scientist5.png"
import scientist6 from "../../images/scientist/scientist6.png"
import scientist7 from "../../images/scientist/scientist7.png"
import scientist8 from "../../images/scientist/scientist8.png"

const teamMembers = [
  {
    id: 1,
    name: "Naresh Sijapati",
    role: "CEO & Founder",
    department: "Leadership",
    image: scientist6,
  },
  {
    id: 2,
    name: "Bhavika Bhogekar",
    role: "COO Founder",
    department: "Leadership",
    image: scientist3,
  },
  {
    id: 3,
    name: "Hemraj Thapa",
    role: "Chief Technology Officer",
    department: "Operations",
    image: scientist4,
  },
  {
    id: 4,
    name: "Puspa Raj Shestha",
    role: "Chief Operating Officer",
    department: "Finance & Accounts",
    image: scientist8,
  },
  {
    id: 5,
    name: "Binita Lama",
    role: "Customer Support Associate",
    department: "Customer Support",
    image: scientist5,
  },
  {
    id: 6,
    name: "Suresh Thapa",
    role: "Agent Associate",
    department: "Sales & Agents",
    image: scientist1,
  },
  {
    id: 7,
    name: "Binita BC",
    role: "Customer Support Assistant",
    department: "Customer Support",
    image: scientist7,
  },
  {
    id: 8,
    name: "Laxmi Sijapati",
    role: "Customer Support",
    department: "Customer Support",
    image: scientist2,
  },
]

const departments = [
  "All Departments",
  ...new Set(teamMembers.map(member => member.department)),
]

const TeamStyleOne = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeDepartment, setActiveDepartment] = useState("All Departments")

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = (
      member.name +
      " " +
      member.role +
      " " +
      member.department
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesDepartment =
      activeDepartment === "All Departments" ||
      member.department === activeDepartment

    return matchesSearch && matchesDepartment
  })

  const renderSocial = () => {
    return (
      <ul className="social">
        <li>
          <Link
            to="#"
            className="d-block"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="d-block"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="d-block"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="d-block"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <>
      <div className="scientist-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="team-search-section">
            <form
              className="team-search-form"
              onSubmit={event => event.preventDefault()}
            >
              <div className="team-search-input">
                <i className="bx bx-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search team member by name, role or department..."
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)}
                />
              </div>
              <select
                className="form-control team-department-select"
                value={activeDepartment}
                onChange={event => setActiveDepartment(event.target.value)}
              >
                {departments.map(department => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="row">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <div className="col-lg-3 col-sm-6" key={member.id}>
                  <div className="single-scientist-box">
                    <div className="image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="content">
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                      <span className="team-department">
                        {member.department}
                      </span>
                      {renderSocial()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="team-no-results">
                  <p>
                    No team members found. Try a different search term or
                    department.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamStyleOne