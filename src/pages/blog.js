import React from "react";
import { graphql } from "gatsby";
import { Box, Heading } from "grommet";
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import PostItem from "../components/PostItem";

const Blog = ({
  data: { allMarkdownRemark: { edges } }
}) => {

  return (
    <PageContainer title='Blog'>
      <Heading level={1} size='small'>Some of my thoughts...</Heading>
      {
        edges.length === 0 ? (
          <Box>
            <Heading level={2} size='small'>There aren't any posts to show you</Heading>
          </Box>
        ) : (
          <Box margin='small' gap='small'>
            {edges.map(({ node: { frontmatter }}) => (
              <PostItem frontmatter={frontmatter} />
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