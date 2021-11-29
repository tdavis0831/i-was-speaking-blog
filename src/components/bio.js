/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
       
        src="../images/profile-pic.png"
        width={1250}
        height={1250}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}.
          {` `}
          To learn more about Tasha, feel free to connect on <a href="https://www.linkedin.com/in/tasha-davis-709a65b6/" target="_blank">LinkedIn</a> or <a href="https://github.com/tdavis0831" target="_blank">GitHub</a>!

        </p>

      
      )}
      
    </div>
  )
}

export default Bio
