import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import {Link} from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <h1 className="sitetitel"><Link to="/">An den Ufern<br/> der Poesie</Link></h1>
     
    )}
  />
)
