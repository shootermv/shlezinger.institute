// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
const ShopPage = ({ data }) => {
  //
  return (
    <Layout pageTitle="Shop">
      <main>
        <p>Hi there! I'm Shop Page</p>
        {/*<GatsbyImage
           alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
           image={image}
        />*/}
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.image);
          return (
            <article key={node.id}>
              <GatsbyImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                image={image}
              />
              <div>
                {node.frontmatter.author} {node.frontmatter.title}
              </div>
            </article>
          );
        })}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(shop-items)/" } }) {
      nodes {
        frontmatter {
          title
          author
          image {
            childImageSharp {
              gatsbyImageData(height: 120)
            }
          }
        }
        id
        slug
      }
    }
  }
`;
export default ShopPage;
