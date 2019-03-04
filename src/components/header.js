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
       <div style={{display:'blog',textAlign:'center'}} >
       <img  src="/Logo50.png" alt="logo"/>
        <h1 className="sitetitel"><Link to="/">An den Ufern<br/> der Poesie</Link></h1>
     
      </div>
     
    )}
  />
)
