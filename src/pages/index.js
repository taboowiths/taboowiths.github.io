import * as React from "react"
import { graphql } from "gatsby"

import Profile from "../components/profile"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contents from "../components/contents"
import Category from "../components/category"
import Title from "../components/title"
import Logo from "../components/logo"
import Header from "../components/header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <div className="display_flex">
          <Profile />
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="display-row">
        <Logo />
        <Header />
      </div>
      <div className="display-row">
        <div className="display-grid-l">
          <div className="display-column">
            <Profile />
            <Category />
          </div>
          <div className="display-column">
            <Title />
            <Contents />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      categoryList: distinct(field: frontmatter___category)
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
`
