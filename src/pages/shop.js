// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Card } from "antd";
const { Meta } = Card;
const ShopPage = ({ data }) => {
  //
  return (
    <Layout pageTitle="Buy our books!">
      <main>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.image);
          return (
            <Card key={node.id} hoverable style={{ width: 250 }}>
              <div style={{textAlign: 'center', marginBottom: '20px'}}><GatsbyImage alt={node.frontmatter.title} image={image} /></div>
              <Meta
                style={{ marginBottom: '20px'}}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
              />
              <div><b>{node.frontmatter.author}</b></div>
              <div>{node.frontmatter.price}</div>
            </Card>
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
          description
          price
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
