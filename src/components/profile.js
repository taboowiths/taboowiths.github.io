/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            profile
            summary
          }
          social {
            twitter {
              title
              url
              username
            }
            github {
              title
              url
              username
            }
            instagram {
              title
              url
              username
            }
            email {
              title
              url
              username
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social_ids = data.site.siteMetadata?.social
  const _social_ids = Object.keys(social_ids)

  return (
    <div className="profile">
      {author?.profile && (
        <img
          src={author.profile}
          width={200}
          height={200}
          className="profile-avatar"
          alt="Profile picture"
        />
      )}
      <div>
        {author?.name && (
          <div>
            <p className="name">
              <strong>{author.name}</strong>
            </p>
            <p>{author?.summary || null}</p>
          </div>
        )}
      </div>
      <div className="profile-social">
        {_social_ids.map(
          (social_id, i) =>
            social_ids[social_id].username && (
              <a
                href={
                  social_ids[social_id].url + social_ids[social_id].username
                }
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                <img
                  width={30}
                  src={`/icons/${social_ids[social_id].title}.png`}
                  alt={social_ids[social_id].title}
                />
              </a>
            )
        )}
      </div>
    </div>
  )
}

export default Bio
