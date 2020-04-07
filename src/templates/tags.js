import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./tags.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tag}
            description={tagHeader}/>
      <div className="container">
        <div className="col-sm-10 offset-sm-1 bg__container">
          <h1 className="m-0 text-capitalize tag-header bg__main-title">{tag}</h1>
          {edges.map(({ node }) => {
            return (
              <article key={node.fields.slug} className="feed-article">
                <header>
                  <small className="feed-article__date as-header">{node.frontmatter.date}</small>
                  <h3 className="feed-article__header">
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                </header>
                <p className="feed-article__description"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description,
                  }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`