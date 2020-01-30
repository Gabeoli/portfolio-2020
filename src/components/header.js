import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo-holder">
      <div className="my-logo">
        <Link to ="/">
          <svg id="mylogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.4 27">
            <title>mylogo</title>
            <path id="gd" d="M47.1,3.5l-.2-.2A15.77,15.77,0,0,0,43,.9c-.1,0-.2-.1-.3-.1s-.4-.1-.6-.2-.2-.1-.3-.1A16.52,16.52,0,0,0,38,0H24.4V5.6A13.31,13.31,0,0,0,13.5,0,13.57,13.57,0,0,0,0,13.5,13.57,13.57,0,0,0,13.5,27a13.3,13.3,0,0,0,4.5-.8V27H38a15,15,0,0,0,3.7-.5c.1,0,.2-.1.3-.1s.4-.1.6-.2.2-.1.3-.1a15.77,15.77,0,0,0,3.9-2.4c.1-.1.2-.1.2-.2a13.51,13.51,0,0,0,4.4-10A13.07,13.07,0,0,0,47.1,3.5Zm-20.2-1h3.2a14.35,14.35,0,0,0-3.2,3.3Zm-2.5,12H17.9A4.59,4.59,0,0,1,13.5,18a4.5,4.5,0,1,1,4.4-5.4h6.5Zm-7.2,9.4a11.48,11.48,0,0,1-3.7.6,11,11,0,0,1,0-22A11.12,11.12,0,0,1,24,10.1H19.7A7,7,0,0,0,6.6,13.5,7,7,0,0,0,19.7,17h4.9v7.5H20.7V22.7Zm9.8.6V21.4a13,13,0,0,0,3.1,3.1Zm11,0a11,11,0,1,1,11-11A11,11,0,0,1,38,24.5Z"/>
            <path id="o" d="M38,6.5a7,7,0,1,0,7,7A7,7,0,0,0,38,6.5ZM38,18a4.5,4.5,0,1,1,4.5-4.5A4.48,4.48,0,0,1,38,18Z"/>
          </svg>
        </Link>
      </div>
    </div>
    <nav>
      <ul>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
