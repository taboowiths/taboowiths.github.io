import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import setting from "/src/utils/customizing-setting"

const CATEGORY_ITEM = setting.category

const Category = () => {
  return (
    <StaticQuery
      query={graphql`
        query CategoryQuery {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
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
      `}
      render={data => (
        <div className="category">
          <p>
            <strong>카테고리</strong>
          </p>
          <nav>
            {CATEGORY_ITEM.map(category => (
              <div key={category} className="category-list">
                <div>🗒&nbsp;</div>
                <Link
                  to={
                    category === "전체보기"
                      ? `/all-posts`
                      : data.allMarkdownRemark.categoryList.includes(category)
                      ? `/${category}/`
                      : `/empty-posts`
                  }
                >
                  {category}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    />
  )
}

export default Category
