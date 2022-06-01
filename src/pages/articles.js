// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from 'gatsby'
const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <main>
      <ul>
      {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2> <Link to={`/article/${node.slug}`}>{node.frontmatter.title}</Link></h2>
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
        slug
      }
    }
  }
`
// Step 3: Export your component
export default ArticlesPage;