import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import {Link} from 'gatsby'

const Wrapper = styled.div`
  

  

h1.sitetitel a {
  letter-spacing: .09rem;
  font-size: 2.3rem;
  letter-spacing:.18rem;
   margin-top:30px;
   font-family:"Roboto Slab",serif;
   font-weight:100;
}
@media(max-width:550px){
 
  h1.sitetitel a {
    letter-spacing: .1rem;
    font-size: 1.3rem;
    margin-top:5px;
    padding:0 0 6px 0;
    font-family:"Roboto Slab",serif;
   font-weight:100;
  }
    

  }
  @media only screen and (orientation:landscape) and (max-width:700px){
    h1.sitetitel a {
      letter-spacing: .1rem;
      font-size: 1.4rem;
      margin-top:-10px;
      padding:0 0 5px 0;
      font-family:"Roboto Slab",serif;
     font-weight:100;
    }
}

@media only screen
and (min-device-width : 701px)
and (max-device-width : 1024px)
and (orientation : landscape){
  height:100%;
  h1.sitetitel a {
  margin-top:-10px;
  letter-spacing: .09rem;
  font-size: 1rem;
  letter-spacing:.08rem;
   padding-top:0;
   font-family:"Roboto Slab",serif;
   font-weight:100;
  }
}
 ` 
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
      <header>
        <Wrapper>
        <h1 className="sitetitel"><Link to="/">An den Ufern<br/> der Poesie</Link></h1>
        </Wrapper>



      </header>
    )}
  />
)
