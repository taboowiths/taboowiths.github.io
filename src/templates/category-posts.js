import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CategoryPost = ({ data, location, pageContext }) => {
  // ...

  // gatsby-node.js에서 context로 넘겨준 값
  const { category } = pageContext
  const posts = data.allMarkdownRemark.nodes
  // ...

  return (
    <Layout location={location}>
      <Seo title={`Posts in ${category}`} /> {/* 페이지 title 수정 */}
      {/* <Bio /> */}
      <h3>{`Current: ${category}`}</h3> {/* 현재 카테고리 표시 */}
      <ol>
        {posts.map(node => {
          return (
            <li key={node.fields.slug}>
              <Link to={`${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default CategoryPost

// 페이지 쿼리 수정
export const pageQuery = graphql`
  query ($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
