module.exports = {
  siteMetadata: {
    siteUrl: `https://weather-drunk.pjflanagan.me`,
    title: `The Drunk Weather Channel`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          `Noto Sans JP\:300,500,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Drunk Weather Channel`,
        short_name: `Drunk Weather Channel`,
        start_url: `/`,
        background_color: `#024e98`,
        theme_color: `#024e98`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
};
