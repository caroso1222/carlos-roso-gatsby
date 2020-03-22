import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="d-flex justify-content-center topnav align-items-center">
      <Link to="/" className="topnav__link as-header">Home</Link>
      <a className="topnav__link as-header" target="_blank" rel="noopener noreferrer" href="https://legacy.carlosroso.com">About</a>
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
