import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import {Listen} from '../components/Format'
import Daten from '../components/Daten'
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

      return 0;
  }





  render(){

    let dflag = ls.get("DSchutz")
   

       return dflag ? (
       <Layout>
       <Listen>
        

     <ul>
         <li><Link to="/heine">Heine kehrt zurück. <br/></Link></li>
         <li><Link to="/termine">Tickets und Termine</Link></li>
         <li><Link to="/aktuell">Aktuelles</Link></li>
         <li><Link to="/programm">Programm 2019</Link> </li>
         <li><Link to="/stimmen">Stimmen und Kommentare zum Festival</Link></li>
         <li><Link to="/links">Sponsoren-Unterstützer-Partner</Link></li>
         <li><Link to="/unterkunft-pauschalen">Unterkunft-Pauschalen</Link></li>
         <li><Link to="/archiv">Filme und Foto-Dokumentation</Link></li>
         <li><Link to="/praml">Who is Who im Festival?</Link></li>
         <li><Link to="/presse">Presse</Link></li>
         <li><Link to="/kontakt">Kontakt</Link></li>
         <li><Link to="/datenschutz">Datenschutz</Link></li>
         <li><Link to="/impressum">Impressum</Link></li>
     </ul>
    
     </Listen>
     </Layout>
       )
      : (
            <React.Fragment>


         <Daten toggleDflag={this.toggleDflag}/>

      </React.Fragment>
)

}
}

export default Menu
