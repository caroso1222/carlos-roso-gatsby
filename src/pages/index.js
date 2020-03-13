import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container main-container">
      <div className="row">
        <h1 className="as-body col-sm-12 p-0 headline">Hey there, I'm Carlos Roso</h1>
        <div className="row m-0">
          <h2 className="as-body col-sm-6 sub-headline">I’m a software developer, remote work advocate, open source contributor, productivity hacker and wannabe designer. </h2>
          <div className="col-sm-6"></div>
          <p className="col-sm-6 subscribe-line p-0">I write about remote work, software and productivity. Subscribe to enjoy my articles every once in a while (hopefully weekly)</p>
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-8 p-0">
                <input className="cr-input cr-input--gray" type="text"></input>
              </div>
              <div className="col-4">
                <button type="button" className="cta-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
