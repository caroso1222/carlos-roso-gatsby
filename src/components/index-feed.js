import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby';
// import QuarantineBox from './quarantine-box';
import './index-feed.scss';

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
              tags
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  const TAG_BLACKLIST = ['covid'];

  const not = fn => args => !fn(args);
  const hasBlaclistedTag = edge =>
    (edge.node.frontmatter.tags || []).some(tag => TAG_BLACKLIST.indexOf(tag) !== -1);
  const isDraft = edge => edge.node.frontmatter.draft;

  const filteredPosts = posts.filter(not(hasBlaclistedTag)).filter(not(isDraft));
  return (
    <div>
      {/* <QuarantineBox /> */}
      {filteredPosts.map(({ node }) => {
        return (
          <article key={node.fields.slug} className="feed-article">
            <header>
              <small className="feed-article__date as-header">{node.frontmatter.date}</small>
              <h3 className="feed-article__header">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
            </header>
            <p
              className="feed-article__description"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description
              }}
            />
          </article>
        );
      })}
    </div>
  );
};

export default IndexFeed;
