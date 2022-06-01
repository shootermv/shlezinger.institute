// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby'
const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <main>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
// Step 3: Export your component
export default ArticlesPage;