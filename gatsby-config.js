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
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
