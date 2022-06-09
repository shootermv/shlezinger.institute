import * as React from "react";
import Layout from "../components/layout";

import { Button, Card, Row, Col, Typography } from "antd";
import { Link } from "gatsby";
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const paragraphStyles = {
  marginBottom: 48,
};

// data
const links = [
  {
    text: "Essays",
    url: "/articles",
    description:
      "Collection of articles about Medical & Halachic topics.",
    color: "#1099A8",
  },
  {
    text: "Shop",
    url: "/shop",
    description:
      "Buy our books and magazines.",
    color: "#BC027F",
  },
  {
    text: "About Us",
    url: "/about",
    description:
      "Feel free to send us a questions.",
    color: "#BC027F",
  },
];
const { Title } = Typography;

// markup
const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="Shlezinger Institute" location={location}>
      <main style={pageStyles}>
        <h3 style={paragraphStyles}>
          Academic Rresearches For Medicine And Jewish Law
        </h3>

        <Row gutter={[32, 32]}>
          {links.map((link, idx) => (
            <Col
              xs={24}
              lg={8}
              key={`item-${idx}`}
              style={{ textAlign: "center" }}
            >
              <Card>
                <Title level={2}>{link.text}</Title>
                <p>{link.description}</p>
                <Link to={link.url}><Button type="primary">More</Button></Link>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    </Layout>
  );
};

export default IndexPage;
