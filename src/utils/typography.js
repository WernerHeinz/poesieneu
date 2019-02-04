import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideStyles = () => ({
  'h2,h3,h4':{
     textAlign:'left',

    },

    'p':{
        fontSize:'1rem',
        color:'#333333',
    },
    'a.gatsby-resp-image-link':{
        boxshadow:'none',
        textDecoration: 'none',
    },
    'a':{
      textDecoration:'none',
      color:'#333333',
    },
    'a:hover': {
        color:'#5984A5',
    },
    '@media(max-width:550px)':{

      'html':{
        fontSize:'1rem',
        
      },
      'h1': {
        fontSize:'1.2rem',
        margin:'20px 0 10px 0',
      },
      'h2': {
        fontSize:'1.17rem',
        margin:'20px 0 10px 0',
      },
      'h3': {
        fontSize:'1.1rem',
        margin:'15px 0 10px 0',
      }

    },
    '@media(min-width:551px)':{
          'html':{
            fontSize:'16px',
             color:'red',

          },
          'h1': {
            fontSize:'1.2rem',
            margin:'30px 0 15px 0',
            
          },
          'h2': {
            fontSize:'1.1rem',
            margin:'15px 0 10px 0',
            padding:'0',
            
          },
          'h3': {
            fontSize:'rem',
            margin:'15px 0 10px 0',
            padding:'0',
          }

   }
})


oceanBeachTheme.overrideThemeStyles = ({ rhythm, scale }, options) => {
    return {
       'body':{
        overflow:'no-scroll',
        
      },
      'h1': {
        textAlign:'center',
        paddingLeft:0,
        paddingRight:0,
        marginLeft:0,
        marginRight:0,
        display:'block',
        color:'#333333',

      },
      'a':{
        color: 'black',
        boxShadow: 'none',
      },
      'a.gatsby-resp-image-link': {
        boxShadow: 'none',
        color: 'black',
        textDecoration:'none'
      },
     'html': {
      fontFamily:'Roboto',
      color:'#333333',
     },
     'li':{
      fontFamily:'Roboto',
       color:'#333333',
       listStyle:'none',
       padding:0,
      margin:0,
     },
     'h2': {
      ...scale(8/9),
        fontFamily:`Roboto`,
      fontWeight:600,
      letterSpacing:'.04rem',
      fontSize: `1.15rem`,
      textAlign:'left',
     },
     'h3': {
      ...scale(1/5),
       fontFamily:`Roboto`,
       fontWeight:600,
       letterSpacing:'.03rem',
       fontSize: `1.05rem`,
       textAlign:'left',
     },
     'h4': {
      ...scale(1/5),
      fontFamily:`Roboto`,
      fontWeight:600,
      fontSize: `1rem`,
      textAlign:'left',


    },
    'p': {
       fontSize:'.999rem !important',
       lineHeight:'1.5',

     },
     'span': {
      fontSize:'1.05rem !important',
      lineHeight:'1.5',

    },
     
    '@media(max-width:550px)':{
      'html':{
        fontSize: '15px'
      }
    }

  }
  }



const typography = new Typography(oceanBeachTheme)
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
  }

  export const rhythm = typography.rhythm
  export const scale = typography.scale

export default typography
