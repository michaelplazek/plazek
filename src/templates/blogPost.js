import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import { Box, Heading, ResponsiveContext, Text } from "grommet";
import { Previous as PreviousIcon } from 'grommet-icons';

const Template = ({
  data,
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const size = useContext(ResponsiveContext);

  return (
    <PageContainer title={frontmatter.title}>
      <Box>
        <Box
          direction='row'
          align='center'
          gap='small'
          margin={{ bottom: 'medium' }}
        >
          <PreviousIcon
            color='black'
            size='small'
          />
          <Text>
            <Link
              to='/blog'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Back
            </Link>
          </Text>
        </Box>
        <Box
          direction={size !== 'small' ? 'row' : 'column'}
          justify='between'
          align={size !== 'small' ? 'center' : 'start'}>
          <Box>
            <Heading margin='none' level={1}>{frontmatter.title}</Heading>
            <Heading margin={{ vertical: 'xsmall' }} level={2} size='small'>{frontmatter.subtitle}</Heading>
          </Box>
          <Box>
            <Text>{frontmatter.date}</Text>
          </Box>
        </Box>
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
        subtitle
      }
    }
  }
`;