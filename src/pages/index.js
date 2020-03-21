import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import IndexFeed from "../components/index-feed"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"
import profilePic from '../images/profile-pic.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container main-container">
      <div className="row">
        <div className="col-sm-7">
          <h1 className="as-body col-sm-12 p-0 headline">Hey there, I'm Carlos Roso</h1>
          <h2 className="as-body sub-headline">I’m a software developer, remote work advocate, open source contributor, productivity hacker and designer.</h2>
          <p className="subscribe-line p-0">I write about remote work, software and productivity. Subscribe to enjoy my articles every once in a while (hopefully weekly).</p>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-8 p-0 mb-1">
                <input className="cr-input cr-input--gray" type="text" placeholder="Your email..."></input>
              </div>
              <div className="col-sm-4 cta-button-wrapper">
                <button type="button" className="cta-button mb-1">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="profile-pic d-flex justify-content-center">
            <img className="profile-pic__img" src={profilePic} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
    <div className="latest">
      <div className="container">
        <h3 class="latest__header">Latest articles</h3>
        <IndexFeed/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
