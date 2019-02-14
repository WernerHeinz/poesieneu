import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from "react-helmet"

// const Post = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: flex-start;
// padding:0 20px 20px 20px;  
// height:82vh;
// margin: 1vh auto 2vh auto;
// max-width:690px;
// width:100%;
// overflow-y: scroll;
// -webkit-overflow-scrolling: touch;
// img {
//   width:100vw;
// }
// p + h1 {
//   padding:20px 0 0 0;
//   margin:0;
  
// }
// h1 + p {
//   padding:5px 0 0 0;
//   margin:0;
  
// }
// hr {
//  width:100%;
//  border-bottom:1px black solid;
// }
// li {
//   list-style-type:square;
// }
// h2 {
//   font-size:600;
// }
// `
const Post = styled.div`
  padding:20px;
  overflow-y: scroll;
-webkit-overflow-scrolling: touch;
h1 {
  font-size:1.4rem;
  padding:0;
  margin:50px 0 0 0;
}
h1 + img, h1 + p,h2 + img,h2 + img,h3 + img {
  padding:5px 0 0 0;
  margin:5px 0;
}
iframe,img {
  margin:5px 0;
  width:100%;  
}
h2 + h3 {
  padding-top: 10px;
padding-bottom:20px;
  margin:0;
}
`
export default function Template({ data,location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  
        return(
          <Layout location={location}>
            <Helmet title={`An den Ufern der Poesie  - ${frontmatter.title}`} />
            <h1 className="mytit">{frontmatter.title}</h1>
            <Post dangerouslySetInnerHTML={{__html: html}}/>
          </Layout>
        )
      }
     
     



export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
       }
    }
  }
`
