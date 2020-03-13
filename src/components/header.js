import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="d-flex justify-content-center topnav align-items-center">
      <Link to="/" className="topnav__link as-header">Home</Link>
      <Link to="books" className="topnav__link as-header">Books</Link>
      <Link to="side-projects" className="topnav__link as-header">Side Projects</Link>
      <Link to="about" className="topnav__link as-header">About</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
