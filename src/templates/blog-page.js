import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPageTemplate = ({
  data: { site, markdownRemark: page },
  location,
}) => {
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <article
        className="blog-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{page.fields.slug}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: page.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: page } }) => {
  return <Seo title={page.id} description={page.excerpt} />
}

export default BlogPageTemplate

export const pageQuery = graphql`
  query BlogPageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
    }
  }
`
