import React from 'react'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Abends from './hine.jpg'
import Menuheader from '../components/menuheader'



const StartWrap = styled.div`

display:flex;
flex-direction:column;
justify-content:flex-start;

  background:rgba(255,255,255,.78);
  height:100vh;
 margin:0 auto 0 auto;
  align-items:center;
 width:100%; 
   padding:10px 0 20px 0;
  max-width:690px;
  overflow-y: scroll;
-webkit-overflow-scrolling: touch;
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
         <StartWrap>
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
          
        </StartWrap>
        </div>
        </React.Fragment>

    )}
  />
)}



export default Layout
