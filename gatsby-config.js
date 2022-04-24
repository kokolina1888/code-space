const rss = require('./utils/rss-options')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Udemy Blog`,
    description: `The best resource to learn coding online`,
    siteUrl: process.env.BASE_URL,
    body: {
      content: 'Just some SEO content '
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-feed`,
      options: rss.options
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-react-helmet'
  ]
}; 