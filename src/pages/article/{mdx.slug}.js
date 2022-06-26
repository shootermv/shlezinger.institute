import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Article = ({ data }) => {
  return (
    <Layout pageTitle={`${data.mdx.frontmatter.title}`} hasBreadCrumbs>
      <header style={{ display: 'flex' }}>{data.mdx.frontmatter.author} {data.mdx.frontmatter.date}</header>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      body
    }
  }
`;
export default Article;
