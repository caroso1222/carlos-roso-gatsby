/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="d-flex justify-content-between footer">
          <h6 className="footer__info">Carlos Roso © 2019</h6>
          <div className="footer__icons">
            <a href="https://twitter.com/caroso1222" target="_blank" className="d-inline-block footer__icon">
              <svg width="16px" height="13px" viewBox="0 0 16 13" version="1.1">
                  <defs></defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                      <g id="Desktop" transform="translate(-824.000000, -1151.000000)" fill="#000000" fillRule="nonzero">
                          <g id="twitter" transform="translate(824.000000, 1151.000000)">
                              <path d="M16,1.539 C15.405,1.8 14.771,1.973 14.11,2.057 C14.79,1.651 15.309,1.013 15.553,0.244 C14.919,0.622 14.219,0.889 13.473,1.038 C12.871,0.397 12.013,0 11.077,0 C9.261,0 7.799,1.474 7.799,3.281 C7.799,3.541 7.821,3.791 7.875,4.029 C5.148,3.896 2.735,2.589 1.114,0.598 C0.831,1.089 0.665,1.651 0.665,2.256 C0.665,3.392 1.25,4.399 2.122,4.982 C1.595,4.972 1.078,4.819 0.64,4.578 C0.64,4.588 0.64,4.601 0.64,4.614 C0.64,6.208 1.777,7.532 3.268,7.837 C3.001,7.91 2.71,7.945 2.408,7.945 C2.198,7.945 1.986,7.933 1.787,7.889 C2.212,9.188 3.418,10.143 4.852,10.174 C3.736,11.047 2.319,11.573 0.785,11.573 C0.516,11.573 0.258,11.561 -5.68434189e-14,11.528 C1.453,12.465 3.175,13 5.032,13 C11.068,13 14.368,8 14.368,3.666 C14.368,3.521 14.363,3.381 14.356,3.242 C15.007,2.78 15.554,2.203 16,1.539 Z" id="Shape"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
            <a href="https://twitter.com/caroso1222" target="_blank" className="d-inline-block footer__icon">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                      <g id="Desktop" transform="translate(-863.000000, -1149.000000)" fill="#000000" fillRule="nonzero">
                          <g id="github" transform="translate(863.000000, 1149.000000)">
                              <path d="M7.999,0.01028125 C3.582,0.01028125 0,3.60628125 0,8.04228125 C0,11.5902812 2.292,14.6002812 5.472,15.6632812 C5.872,15.7372812 6.018,15.4892812 6.018,15.2762812 C6.018,15.0852812 6.011,14.5802812 6.007,13.9102812 C3.782,14.3952812 3.312,12.8332812 3.312,12.8332812 C2.949,11.9052812 2.424,11.6582812 2.424,11.6582812 C1.697,11.1602812 2.478,11.1702812 2.478,11.1702812 C3.281,11.2272812 3.703,11.9982812 3.703,11.9982812 C4.417,13.2252812 5.576,12.8712812 6.032,12.6652812 C6.104,12.1462812 6.311,11.7922812 6.54,11.5912812 C4.764,11.3882812 2.896,10.6992812 2.896,7.62228125 C2.896,6.74528125 3.208,6.02828125 3.72,5.46628125 C3.637,5.26328125 3.363,4.44628125 3.798,3.34128125 C3.798,3.34128125 4.47,3.12528125 5.998,4.16428125 C6.636,3.98628125 7.32,3.89728125 8.001,3.89428125 C8.68,3.89828125 9.365,3.98628125 10.004,4.16528125 C11.531,3.12628125 12.202,3.34228125 12.202,3.34228125 C12.638,4.44828125 12.364,5.26428125 12.282,5.46728125 C12.795,6.02928125 13.104,6.74628125 13.104,7.62328125 C13.104,10.7082813 11.234,11.3872812 9.452,11.5862812 C9.739,11.8342813 9.995,12.3242812 9.995,13.0732812 C9.995,14.1472812 9.985,15.0132812 9.985,15.2762812 C9.985,15.4912812 10.129,15.7412813 10.535,15.6622812 C13.71,14.5982812 16,11.5892812 16,8.04228125 C16,3.60628125 12.418,0.01028125 7.999,0.01028125 Z" id="Shape"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
            <a href="https://twitter.com/caroso1222" target="_blank" className="d-inline-block footer__icon">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                      <g id="Desktop" transform="translate(-902.000000, -1148.000000)" fill="#000000" fillRule="nonzero">
                          <g id="linkedin" transform="translate(902.000000, 1148.000000)">
                              <rect id="Rectangle-path" x="0" y="5" width="3.578" height="11"></rect>
                              <path d="M13.324,5.129 C13.286,5.117 13.25,5.104 13.21,5.093 C13.162,5.082 13.114,5.073 13.065,5.065 C12.875,5.027 12.667,5 12.423,5 C10.337,5 9.014,6.517 8.578,7.103 L8.578,5 L5,5 L5,16 L8.578,16 L8.578,10 C8.578,10 11.282,6.234 12.423,9 C12.423,11.469 12.423,16 12.423,16 L16,16 L16,8.577 C16,6.915 14.861,5.53 13.324,5.129 Z" id="Shape"></path>
                              <circle id="Oval" cx="1.75" cy="1.75" r="1.75"></circle>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
