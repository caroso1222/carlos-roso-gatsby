import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-post.scss"
import SEO from "../components/seo"
import NewsletterSubscribe from "../components/newsletter-subscribe"
import ShortBio from "../components/short-bio"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title}
            description={post.frontmatter.description}/>
      <div className="container">
        <div className="col-sm-10 offset-sm-1 bg__container">
          <small className="bg__date as-header">{post.frontmatter.date}</small>
          <h1 className="bg__main-title">{post.frontmatter.title}</h1>
          <h2 className="bg__main-subtitle as-body">{post.frontmatter.description}</h2>
          <div className="divider"></div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="bg__bio">
            <span className="bg__bio-separator"></span>
            <ShortBio />
          </div>
        </div>
      </div>
      <div className="post-promo">
        <div className="container">
          <div className="col-sm-10 offset-sm-1 bg__container">
            <h5 className="post-promo__header">Join the newsletter</h5>
            <p>I write about remote work, software and personal growth. Subscribe to enjoy my articles every once in a while (hopefully weekly).</p>
            <div className="col-sm-8 p-0">
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`