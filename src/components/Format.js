import styled from 'styled-components'
import transition from 'styled-transition-group'



export const InhaltsDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
margin:auto;
max-width:690px;
`
export const MyButton = styled.button`
  border:none;
  outline:none;
  color: white;
  background:none;
  padding-left:0;
  padding:3px 0;
  text-decoration:underline;
  font-weight:300;
    cursor:pointer;
  
`

export const Dschutz = transition.div`
font-family:Roboto;
&:enter { opacity: 0.01; }
&:enter-active {
  opacity: 1;
  transition: opacity 1000ms ease-in;
}
&:exit { opacity: 1; }
&:exit-active {
  opacity: 0.01;
  transition: opacity 800ms ease-in;
}
display:flex;
justify-content:center;
align-items:center;
background-image:linear-gradient(45deg, white 0%, #344 30%);
color:white !important;
a {
    color:white;
    text-decoration:underline;
}
font-weight:100;

position:absolute;
z-index:1000;
ul {
   padding:0;

}
h3 {
    display:block;
    text-align:center;
}
li {
    display:inline-block;
    padding:5px 10px;
    
    color:white;
}
bottom:0;
left:0;
right:0;
height:130px;
width:100vw;
padding:5px;

margin:auto;
overflow-y:scroll;
@media(max-with:720px){
    li {
        display:block;
        padding:6px 0;
        margin:0
    }
}

`
export const Listen = styled.div`
 height:100vh;
 width:100%;
 margin:4vh 0 0 0;
 overflow-y:scroll;
 font-family:Roboto;
 font-weight:100;
 }
 
`
export const Liste = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow-y:scroll;
margin:0 0 0 0;
font-family:Roboto;
font-weight:100;

 ul {
     list-style:none;
      padding:0;
      margin:0 0;
    }
    li {
        font-family:Roboto;
      text-align:center;
      padding:8px 0;
      
    }
    li a {
        font-size: 1.1rem;
       text-decoration:none;
       color:#333333;
       letter-spacing:.1rem;
       text-transform:uppercase;
       font-family:Roboto;
        font-weight:100;
    }
    li a:hover {
        color:grey;
    }
    @media(max-width:600px){
        li a {
            font-size: 1rem;
        }
    }
`


export const Liste2 = styled.div`
 display: flex;
 padding-bottom:100px;
 flex-direction:column;
 align-items:center;
 justify-content:flex-start;
 font-size:Roboto;
 ul {
     list-style:none;
      padding:0;
      margin:0;
    }
    
    li {
      text-align:center;
      padding:8px 20px;
      display:inline-flex;
      font-family:Roboto;
        font-weight:100;
    }
    li a {
        font-size: .8rem;
       text-decoration:none;
       color:#333333;
       text-transform:uppercase;
       letter-spacing:.1rem;
       font-weight:100;
    }
    li a:hover {
        color:grey;
    }
    @media(max-width:600px){
        flex-direction:column;
        li { display:block;
        padding:5px 0;
        font-family:Roboto;
        font-weight:100;
        }
        li a {
            font-size: .9rem;
        }
    }
`

