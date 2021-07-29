module.exports = {
  siteMetadata: {
    siteUrl: "https://www.xsmirx.com",
    autor: "Ivan Smirnov",
    title: "Ivan Smirnov",
    description: "Frontend Developer",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: { extensions: [`.mdx`, `.md`] },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-99GX4ZJYXZ",
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
