import styled from 'styled-components'



export const InDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;

max-width:690px;
padding:20px;

max-height:900px;
 margin:4vh auto 2vh auto;
padding-bottom:30px;
 overflow-y:scroll;
 -webkit-overflow-scrolling: touch;
 font-family:Roboto;
 font-weight:100;
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}


backgrund:rgba(255,255,255,.7);
ul {
     list-style:none;
      padding:0;
      margin:10px 0;
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
    ul + ul {
      display:flex;
      align-items:center;
     
   }
    ul + ul li {
    padding-left:5px;
   margin:auto;
   }
     ul + ul li a {
     font-size:.8rem;
}

    @media(max-width:600px){
        ul + ul {
      display:flex;
      align-items:center;
     flex-direction:column;
    }
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

export const Dschutz = styled.div`
font-family:Roboto;

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

overflow-y: scroll;
  ::-webkit-overflow-scrolling: touch;
:-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

@media(max-with:720px){
    li {
        display:block;
        padding:6px 0;
        margin:0
    }
}
`
export const Listen = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 height:89%;
padding:0 1% 1% 1%;
 width:98%;
max-height:900px;
 margin:4vh auto 2vh auto;
padding-bottom:30px;
 overflow-y:scroll;
 -webkit-overflow-scrolling: touch;
 font-family:Roboto;
 font-weight:100;
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
@media only screen and (orientation:landscape) and (max-width:700px){
   height:50vh;
 
}
 
`
export const Liste = styled.div`
font-family:Roboto;
font-weight:100;


 ul {
     list-style:none;
      padding:0;
      margin:10px 0;
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
    ul + ul {
      display:flex;
      align-items:center;
     
   }
    ul + ul li {
    padding-left:5px;
   margin:auto;
   }
     ul + ul li a {
     font-size:.8rem;
}

    @media(max-width:600px){
        ul + ul {
      display:flex;
      align-items:center;
     flex-direction:column;
    }
`


export const Liste2 = styled.div`
display:flex;
justify-content:center;
 width:100%;
 font-family:Roboto;
margin-top:30px;
 ul {
     text-align:center;
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
        margin-top:30px;
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
export const MeineListe = styled.ul`
display:flex;

flex-direction:column;
justify-content:flex-center;
align-items:center;
padding:0;
margin:0 auto 0 auto;
text-align:center;
max-width:690px;
width:100%;
ul{
    padding:0;
    margin:0 auto 0 auto;
    width:100%;
    text-align:center;
}

opacitiy:1;
> ul {
  display:none; 
  padding:0;
  height:100%;
 
}

&:hover {
 
  > ul {
    height:100%;
    display:block;
    
    li  {
      font-size:.95rem;
      letter-spacing:1.4rem;
      font-style:italic;
    } 
  
    a {
      text-transform:unset !important;
      letter-spacing:.0991rem;
      display:block;
      color:rgb(0, 89, 179);
    }
    
  }

}
`
