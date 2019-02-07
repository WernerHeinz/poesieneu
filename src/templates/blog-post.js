import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from "react-helmet"

const Post = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding:0 20px 0 20px;  
height:82vh;
margin: 1vh auto 2vh auto;
max-width:690px;
width:100vw;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
img {
  width:100vw;
}
p + h1 {
  padding:20px 0 0 0;
  margin:0;
  
}
h1 + p {
  padding:5px 0 0 0;
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
