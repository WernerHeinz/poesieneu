import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from "react-helmet"

const BlogPost = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding:0 20px 0 20px;  
height:82vh;
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
margin: 1vh auto 2vh auto;
max-width:690px;
width:100%;
.linkis {
  margin:10px 0;
}

h1:nth-child(n2) {
  color:blue;
}
p,li {
  padding:5px 0 0 0;
  font-family:Roboto;
  font-weight:100;
  font-size:1.1rem;
}

  
img {
  width:100vw;
  height:auto;
  padding: 5px 0;
}
  
h1 {
  letter-spacing:.08rem;
  font-weight:200;
  font-family:Roboto;
  text-align:left;

}
h1:first-child {
  padding:15px 0 5px 0;
  margin:0;
  
}
 p a {
  
  margin-top:-25px;
  :before {
    content:"-> ";
  }
  text-decoration:underline;
  padding:0;
 
}
h2,h3,h4 {
  text-align:left;
  text-transform:none;
  line-height:1.35rem;
  font-family:Roboto;
  font-size:1.1rem;
  font-weight:200;
}

p + h1 {
  padding:20px 0 0 0;
  margin:0;
  
}
h1 + p {
  padding:5px 0 0 0;
  margin:0;
  
}

.linkis {
  margin:30px 0;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
}
a.links {
  font-size:1rem;
  padding:20px 0;
  font-weight:300;
  font-familiy:Roboto;
  letter-spacing:0.08rem;
}
  h1 {
    text-align:left;
    padding:20px 0;
  }
  a:before {
    content: "-> ";
  }

@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : landscape){
  height:74%;
  img {
    width:100%;
  }
  
}

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
.imp {
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:baseline;
    margin:auto;
    max-width:690px;
  }
  .imp h1 {
    font-size:1.5rem;
    text-align:left;
    padding-bottom:1rem;
  }
`

const Titelei = styled.div `
  margin: -29px auto 0 auto;
  max-width: 690px;
  padding:0;
  h1.mytit {
    font-family:Roboto; 
    font-size:1.2rem;
    font-family:Roboto;
    font-weight:200;
    text-transform:uppercase;
    letter-spacing:0.08rem;
  }
  
  
  
  @media (max-width:550px){
    h1.mytit {
      margin-top:-10px;
      font-size:1rem;
      text-transform:uppercase;
      font-family:Roboto;
      font-weight:200;
      letter-spacing:.05rem;
      padding:0;
    }
    margin: 5px auto 0 auto;
  }
  @media only screen and (orientation:landscape) and (max-width:1200px){
    h1.mytit  {
      margin-top:20px;
      font-size:.8rem;
      text-transform:uppercase;
      font-family:Roboto;
      font-weight:200;
      letter-spacing:.04rem;
      padding:0;
    }
}

`



export default function Template({ data,location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  
        return(
          <Layout location={location}>
            <Helmet title={`An den Ufern der Poesie  - ${frontmatter.title}`} />
            <Titelei><h1 className="mytit">{frontmatter.title}</h1></Titelei>
            <BlogPost dangerouslySetInnerHTML={{__html: html}}/>
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
