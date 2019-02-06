import React from 'react'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, {keyframes} from 'styled-components'
import Header from './header'
import Abends from './hine.jpg'
//import Hinter from './hinter.jpg'
import Menuheader from '../components/menuheader'


const keyFrameExampleOne = keyframes`
  0% {

    opacity: .2;

  }
  100% {

      opacity: 1;

  }
`
const Bild = {
  position:'absolute',
  zIndex:-1,
  backgroundImage: `url(${Abends})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  left:0,
  bottom:0,
  right:0,
  top:0,
  overflow:'hidden'

}
const HWrapper = styled.div`

font-family:Roboto;
display:flex;
 flex-direction:column;
 justify-content:center;
  background:rgba(255,255,255,.6);
animation: ${keyFrameExampleOne} .3s ease-in;
 
height:100vh;
 margin:20px auto 0 auto;
  align-items:center;
 width:100%; 
   padding:0 10px 0 0;
  max-width:690px;
  h1 {
    text-align:center;
  }

  @media(max-width:695px) {
    background:rgba(255,255,255,.75);
    padding-left:0;
    padding-right:0;
    
    p,li,a,span {
      font-weight:600;
    }
    h1{
      font-size:1.2rem;
    }
  }
  @media(min-width:696px) {
    
  }
@media(max-width:800px) {
    height:97vh;
  }
`
const Layout = ({ location,children }) => {
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            keywords,
            description
          }
        }
      }
    `}
    render={data => (
    <React.Fragment>
       <div style={Bild}>
        <Menuheader mypathname={location}/>
         <HWrapper>
           <Header />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `${String(data.site.siteMetadata.description)}`},
            { name: 'keywords', content: `${data.site.siteMetadata.keywords}`},
          ]}
        >
          <html lang="de" />
        </Helmet>
          {children}
          
        </HWrapper>
        </div>
        </React.Fragment>

    )}
  />
)}



export default Layout
