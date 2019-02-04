
import React from 'react'

import {Link } from 'gatsby'
import UserContext from '../components/UserContext'
import {Listen,MyButton,Dschutz} from '../components/Format'
import {Inhalt} from '../components/Inhalt'

 const Daten = (props) => {
    return(
        <UserContext.Consumer>{
            ({dflag}) => {
                console.log(dflag)
                
            return(
                <React.Fragment>
                <Listen>
                    <Inhalt/>
                </Listen>
           <Dschutz timeout={890} in={!dflag} unmountOnExit >
                <h3>Auch wir nutzen <br/>Cookies und ...</h3>
                <ul>
                   
                    <li><Link to ="/datenschutz">Weitere Informationen</Link><br/></li>
                    <li><MyButton onClick={props.toggleDflag}>Schon zugestimmt ...</MyButton></li>
                    <li><MyButton onClick={props.toggleDflag}>Ich stimme zu.</MyButton></li>
                </ul>
           </Dschutz>
        </React.Fragment> 
            )
            }
        }
       
        </UserContext.Consumer>
    )
}
export default Daten
