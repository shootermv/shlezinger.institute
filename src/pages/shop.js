// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Card, Button, Row, Col } from "antd";
const { Meta } = Card;
const ShopPage = ({ data, location }) => {
  //
  return (
    <Layout pageTitle="Buy our books!"  location={location}>
      <Row gutter={[32, 32]}>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.image);
          return (
            <Col xs={24} lg={8} key={node.id}>
              <Card key={node.id} hoverable style={{ minHeight: "380px" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <GatsbyImage alt={node.frontmatter.title} image={image} />
                </div>
                <Meta
                  style={{ marginBottom: "20px" }}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                />
                <div>
                  <b>{node.frontmatter.author}</b>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {node.frontmatter.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "ILS",
                  })}
                  <Button type="primary">Add To Cart</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
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
