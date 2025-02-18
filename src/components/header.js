import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import setting from "/src/utils/customizing-setting"

const HEADER_NAV_ITEM = setting.pages

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="page-container">
      {HEADER_NAV_ITEM.map((item, index) => {
        if (item.isExternal) {
          return (
            <HeaderNavListItem key={index}>
              <Link to={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            </HeaderNavListItem>
          )
        }

        return (
          <div className="page" key={index}>
            <Link to={item.url}>{item.label}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Header

const HeaderNavList = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

const HeaderNavListItem = ({ children }) => {
  return <div>{children}</div>
}
