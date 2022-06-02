// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
const ShopPage = ({data}) => {
  return (
    <Layout pageTitle="Shop">
      <main>
        <p>
          Hi there! I'm Shop Page
        </p>
        <StaticImage
           alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
           src="../images/shop/01.jpeg"
        />
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <div>{node.frontmatter.author} {node.frontmatter.title}</div>
          </article>
        ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(shop-item)/"  }}) {
      nodes {
        frontmatter {
          title
          author
        }
        id
        slug
      }
    }
  }
`
export default ShopPage;