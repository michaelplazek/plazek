import React, { useState } from "react";
import { graphql, navigate } from "gatsby";
import { Box, Heading, Text } from "grommet";
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
const Blog = ({
  data: { allMarkdownRemark: { edges } }
}) => {

  const [hovered, setHovered] = useState(false);

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
                <Box direction='row' justify='between' align='center'>
                  <Heading margin='none' level={2} size='small'>{frontmatter.title}</Heading>
                  <Text size='small'>{frontmatter.date}</Text>
                </Box>
                <Box>
                  <Text>{frontmatter.subtitle}</Text>
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
            subtitle
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;