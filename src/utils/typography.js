import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'


oceanBeachTheme.baseFontSize = '17px';
oceanBeachTheme.baseLineHeight= 1.58;
oceanBeachTheme.googleFonts= [{
    name: 'Roboto Slab',
    styles: ['400']
  }, {
    name: 'Roboto',
    styles: ['200','400', '500', '600']
  }];
  oceanBeachTheme.headerFontFamily= ['Roboto Slab', 'sans-serif'];
  oceanBeachTheme.bodyFontFamily= ['Roboto', 'serif'];
  
oceanBeachTheme.overrideStyles = () => ({
  
    'a.gatsby-resp-image-link':{
        boxshadow:'none',
        textDecoration: 'none',
    },
    'a':{
      textDecoration:'none',
     color:'#000',
    },
    'a:hover': {
        color:'#5984A5',
    },
    'h1,h2,h3,h4': {
      'fontfamily': "'Roboto', sans-serif",
      'fontWeight':'500',
      
    }
   
})

const typography = new Typography(oceanBeachTheme)
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
  }

  export const rhythm = typography.rhythm
  export const scale = typography.scale

export default typography
