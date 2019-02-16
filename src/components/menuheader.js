import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaAlignJustify} from 'react-icons/fa'
const Menu = styled.div`
  position:fixed;
  z-index:25000;
  top:30px;
  right:4%;
  padding:1px;
  width:30px;
  margin:0;
  
  padding:2px;
  @media(max-width:740px){
    top:6.8px;
    right:1%;
  }
  
  @media(min-width:741px) and (max-width:833px){
    right:9.4%;
  }
  @media(min-width:834px) and (max-width:940px){
    right:14%;
  }
  @media(min-width:1501px){
    right:16%;
  }
  a:hover {
    border-bottom:1px white solid;
  }
`

const Menuheader = (props) => {
  if(props.mypathname && props.mypathname.pathname!=="/") {
    return (
        <Menu>
          <Link to="/"><FaAlignJustify color="black" fontSize="1.55rem"/></Link>
        </Menu>
      )
     }
      else {
    return null
     }
}
export default Menuheader
