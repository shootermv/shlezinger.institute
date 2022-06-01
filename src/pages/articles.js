// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby'
const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <main>
      <ul>
      {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`
// Step 3: Export your component
export default ArticlesPage;