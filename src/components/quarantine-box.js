import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import "./quarantine-box.scss"

const QuarantineBox = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: "covid" }, draft: {ne: true} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  `)

  const posts = data.allMarkdownRemark.edges;
  console.log({posts});
  // const numPosts = posts.length;
  // const filteredPosts = [posts[0], {
  //   node: { fields: { slug: '/covid-quarantine' }, frontmatter: { title: '...' } }
  // }, ...posts.slice(Math.max(numPosts-6, 2), numPosts)];
  const filteredPosts = posts;
  console.log({filteredPosts});

  return (
    <div className="qbox">
      <h3 className="feed-article__header">Quarantine Journal</h3>
      <p className="feed-article__description qbox__description">A daily look into my journey through the COVID-19 quarantine.</p>
      <div className="qbox__live">
        <p className="as-header">Live</p>
        <span className="qbox__live-dot"></span>
      </div>
      <div className="qbox__links d-flex row m-0">
        {filteredPosts.map(({ node }) => {
          return (
                <Link to={node.fields.slug} key={node.fields.slug}
                      className="as-header col-4 col-sm qbox__link">
                  {node.frontmatter.title.split(' — ')[1] || node.frontmatter.title}
                </Link>
          )
        })}
      </div>
    </div>
  );
}

export default QuarantineBox
