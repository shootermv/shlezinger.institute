module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shop-items`,
        path: `${__dirname}/shop-items/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
