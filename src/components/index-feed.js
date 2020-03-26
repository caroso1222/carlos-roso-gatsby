import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import "./index-feed.scss"

const IndexFeed = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              description
              title
              date(formatString: "MMMM DD, YYYY")
              draft
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      {posts.filter(({node}) => !node.frontmatter.draft).map(({ node }) => {
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
            <section>
              <p className="feed-article__description"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description,
                }}
              />
            </section>
          </article>
        )
      })

      }
    </div>
  )
}

export default IndexFeed