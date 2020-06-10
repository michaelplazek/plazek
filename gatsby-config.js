module.exports = {
  siteMetadata: {
    title: `Michael Plazek`,
    description: `The portfolio of Michael Plazek`,
    author: `@michaelplazek`,
    links: [
      {
        path: '/work',
        label: 'Work',
      },
      {
        path: '/about',
        label: 'About',
      },
      {
        path: '/resume',
        label: 'Resume',
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
};
