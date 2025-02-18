import { StaticQuery, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import customizing from "../utils/customizing-setting.json"
import logoImg from "../images/gatsby-icon.png"

const Logo = () => {
  const logoText = customizing.logo
  return (
    <StaticQuery
      query={graphql`
        query TitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <div className="logo-container">
            <Link to="/">
              {logoText ? (
                <h3>{logoText}</h3>
              ) : (
                <img src={logoImg} className="logo-img" alt="logoImg" />
              )}
            </Link>
          </div>
        )
      }}
    />
  )
}

export default Logo
