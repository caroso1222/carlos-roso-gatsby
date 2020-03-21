import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-post.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="col-sm-10 offset-sm-1 bg__container">
        <h1 className="bg__main-title">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`