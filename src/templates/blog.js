import React from "react"
import { graphql } from "gatsby"
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import { Box, Heading } from "grommet";

const Template = ({
  data,
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(html);
  return (
    <PageContainer title={frontmatter.title}>
      <Box className="blog-post">
        <Heading level={1}>{frontmatter.title}</Heading>
        <Heading level={2}>{frontmatter.date}</Heading>
        <Box
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Box>
    </PageContainer>
  )
};

export default withApp(Template);

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;