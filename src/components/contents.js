import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

const Contents = () => {
  return (
    <StaticQuery
      query={graphql`
        query ContentsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            filter: { fields: { contentType: { eq: "blog" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            nodes {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      `}
      render={data => (
        <div className="post-list-container">
          <div>
            <div className="post-list-container-title">
              <strong>최근 게시글</strong>
            </div>
          </div>
          <ol style={{ listStyle: `none` }}>
            {data.allMarkdownRemark.nodes.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                  <hr />
                </li>
              )
            })}
          </ol>
        </div>
      )}
    />
  )
}

export default Contents
