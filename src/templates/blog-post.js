import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-post.scss"
import SEO from "../components/seo"

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
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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