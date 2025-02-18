import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Logo from "../components/logo"
import Header from "../components/header"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Blog">
      <Header />
      <Logo />
      <div>
        <h1>Blog</h1>
        <ol>
          {posts.map((node, i) => {
            return (
              <li key={i}>
                <Link to={`${node.fields.slug}`}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog

export const homePageQuery = graphql`
  query {
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
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
        }
      }
    }
  }
`
