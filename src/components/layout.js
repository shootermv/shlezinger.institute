import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  main,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import { Menu } from "antd";
import { StaticImage } from "gatsby-plugin-image";
const Layout = ({ pageTitle, children, location }) => {
  return (
    <div className={container}>
      <nav style={{ marginBottom: "20px" }}>
        <Menu
          mode="horizontal"
          selectedKeys={[location?.pathname?.replace("/", "") || "home"]}
        >
          <StaticImage
            src="../images/logo.png"
            alt="A dinosaur"
            placeholder="blurred"
            width={50}
            height={50}
          />
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="articles">
            <Link to="/articles">Articles</Link>
          </Menu.Item>
          <Menu.Item key="shop">
            <Link to="/shop">Shop</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </nav>
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
