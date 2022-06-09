import * as React from "react";
import Layout from "../components/layout";

import { Button, Card, Row, Col, Typography } from 'antd'
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
    text: "Collection Of Articles",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Shop",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "About Us",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  }
]
const { Title } = Typography;

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Shlezinger Institute">
      <main style={pageStyles}>
       
        <h3 style={paragraphStyles}>
         Academic Rresearches For Medicine And Jewish Law
        </h3>

        <Row gutter={[32, 32]}>
          
             {links.map((link, idx) => <Col xs={24} lg={8} key={`item-${idx}`} style={{textAlign: 'center'}}>
                <Title level={2}>{link.text}</Title>  
             </Col>)}
           
        </Row>
      </main>
    </Layout>
  );
};

export default IndexPage;
