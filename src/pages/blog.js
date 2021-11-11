import React, { useState } from "react";
import { graphql } from "gatsby";
import { Box, Heading } from "grommet";
import compose from "lodash/fp/compose";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import PostItem from "../components/PostItem";
import SearchBar from "../components/SearchBar";

const getTags = tags => tags.split(", ");
const isStringMatch = (searchText, value) =>
  value.toUpperCase().includes(searchText.toUpperCase());
const isTagMatch = (searchText, tags) => {
  let flag = false;
  tags.forEach(item => {
    if (isStringMatch(searchText, item)) {
      flag = true;
    }
  });
  return flag;
};
const isTextMatch = (searchText, item) =>
  isStringMatch(searchText, item.title) || isStringMatch(searchText, item.date);
const filterPosts = (edges, searchText) =>
  compose(
    filter(
      item => isTextMatch(searchText, item) || isTagMatch(searchText, item.tags)
    ),
    map(({ node: { frontmatter } }) => ({
      ...frontmatter,
      tags: getTags(frontmatter.tags),
    }))
  )(edges);

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [searchText, setSearchText] = useState("");
  const posts = filterPosts(edges, searchText);

  return (
    <PageContainer title="Blog">
      <Heading level={1} size="small">
        Some of my thoughts...
      </Heading>
      <Box margin={{ left: "medium", bottom: "small" }} width="large">
        <SearchBar
          onChange={e => {
            const {
              target: { value },
            } = e;
            setSearchText(value);
          }}
          placeholder="Search by title, tag, or date..."
        />
      </Box>
      {edges.length === 0 ? (
        <Box>
          <Heading level={2} size="small">
            There aren't any posts to show you
          </Heading>
        </Box>
      ) : (
        <Box margin="small" gap="small">
          {posts.map(item => (
            <PostItem key={item.title} item={item} />
          ))}
        </Box>
      )}
    </PageContainer>
  );
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
            tags
            slug
          }
        }
      }
    }
  }
`;
