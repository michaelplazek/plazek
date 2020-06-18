import React, { useState, useContext } from "react";
import { graphql, navigate } from "gatsby";
import { Box, Heading, ResponsiveContext, Text } from "grommet";
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
const Blog = ({
  data: { allMarkdownRemark: { edges } }
}) => {

  const [hovered, setHovered] = useState(false);
  const size = useContext(ResponsiveContext);

  return (
    <PageContainer title='Blog'>
      <Heading size='small'>Some of my thoughts...</Heading>
      {
        edges.length === 0 ? (
          <Box>
            <Heading level={2} size='small'>There aren't any posts to show you</Heading>
          </Box>
        ) : (
          <Box margin='small' gap='small'>
            {edges.map(({ node: { frontmatter }}) => (
              <Box
                pad='medium'
                background='light-1'
                round='small'
                elevation={hovered ? 'medium' : 'none'}
                key={frontmatter.title}
                onMouseOver={() => setHovered(true)}
                onFocus={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                onBlur={() => setHovered(false)}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(frontmatter.slug)}
              >
                <Box
                  fill='horizontal'
                  direction={size !== 'small' ? 'row' : 'column'}
                  justify='between'
                  align={size !== 'small' ? 'center' : 'start'}
                >
                  <Heading alignSlef='stretch' margin='none' level={2} size='small'>{frontmatter.title}</Heading>
                  <Text size='small'>{frontmatter.date}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        )
      }
    </PageContainer>
  )
};

export default withApp(Blog);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;