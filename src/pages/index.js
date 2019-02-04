import React from 'react'
import Layout from '../components/layout'
import { FaHome } from 'react-icons/fa';
import {Link} from 'gatsby'
import UserContext from '../components/UserContext'
import {Listen,Liste,Liste2} from '../components/Format'
import Daten from '../components/Daten'
//import { navigate } from '@reach/router';
import ls from 'local-storage'

class Menu extends React.Component{
  state={
      dflag:false,
  }
  
  UNSAFE_componentWillMount(){
      let wert = ls.get('DSchutz')
      if(wert) this.setState({dflag:true})
  }
  toggleDflag = (e) => {
      e.preventDefault()
      ls.set('DSchutz',true)
      this.setState({dflag:true})
      this.setState({vorwort:!this.state.dflag})
      return 0;
  } 
  /* vorwort = () => {
    this.setState({vorwort:false})
    navigate('/vorbereitungen')

  } */
  render(){
      let dflag=this.state.dflag
     
      let loc=null;
       if(this.props && this.props.location){
         loc=this.props.location
       }
       
       return(
        <UserContext.Provider
            value={{
             dflag:dflag
             }}>  
        <Layout location={loc}>
        {dflag ?
        (<Listen>
        <Liste>
        
        <ul>
             
        <li><Link to="/"><FaHome fontSize="2rem" /></Link></li>
            <li><Link to="/vorbereitungen">Heine kehrt zurück. <br/></Link></li>
            <li><Link to="/programm">Programm</Link></li>
            <li><Link to="/aktuell">Aktuelles</Link></li>       
            <li><Link to="/archiv">Filme und Foto-Dokumentation</Link></li>
            <li><Link to="/presse">Presse</Link></li>
            <li><Link to="/einblicke">Aus den Programmen</Link></li>
            <li><Link to="/stimmen">Kommentare zum Festival</Link></li>
            <li><Link to="/konzerte">Unsere Konzerte</Link></li>
            <li><Link to="/praml">Who is Who im Festival?</Link></li>
            <li><Link to="/termine">Termine</Link></li>
         </ul>
        </Liste>
        
        <Liste2>
        <ul>
            <li><Link to="/links">Links</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
        </ul>
        </Liste2>
        
        </Listen>)
        :
       (
         <React.Fragment>
            
            <Daten toggleDflag={this.toggleDflag}/>
         </React.Fragment>  
        
        

       )
        
           
     
       
        }
        
        </Layout>
        </UserContext.Provider>
             )
            }
} 
    
export default Menu
