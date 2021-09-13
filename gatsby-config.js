module.exports = {
  siteMetadata: {
    siteUrl: `https://weather-drunk.pjflanagan.me`,
    title: `Weather Drunk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          `Noto Sans JP\:300,500,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
