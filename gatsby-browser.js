/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import ls from 'local-storage'
import "./src/styles/global.css"

export const onInitialClientRender = () => {
    
    ls.set("DSchutz",false)
  }
