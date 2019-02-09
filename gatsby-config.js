module.exports = {
  siteMetadata: {
    title: `An den Ufern der Poesie`,
    description: `Theater- und Kulturfestival am romantischen Mittelrhein`,
    keywords: `Weltkulturerbe,Mittelrhein,Romantik,Bacharach,Poesie,Kultur,Musik,Bacharach,Willy Praml,Theaterfestspiele,Heine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      
      resolve: `gatsby-plugin-styled-components`,
      options: {
        
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: ["gatsby-remark-copy-linked-files"],
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'An den Ufern der Poesie',
        short_name: 'festival',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', 
      },
    },
    
    'gatsby-plugin-offline',
    
  ],
}
