// Step 2: Define your component
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'
const ShopPage = () => {
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
      </main>
    </Layout>
  );
};
// Step 3: Export your component
export default ShopPage;