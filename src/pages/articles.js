// Step 2: Define your component
import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { Space } from "antd";
const ArticlesPage = ({ data, location }) => {
  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const query = event.target.value;

    const posts = data.allMdx.nodes || [];

    const filteredData = posts.filter((post) => {
      const { title } = post.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setState({
      query,
      filteredData,
    });
  };

  const allPosts = data.allMdx.nodes;
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;
  return (
    <Layout pageTitle="Articles" location={location}>
      <main>
        <Space direction="vertical">
        <input
          type="search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
        {posts.map((node) => (
          <article key={node.id}>
            <h2>
              {" "}
              <Link to={`/article/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <div>
              {node.frontmatter.author} {node.frontmatter.date}
            </div>
          </article>
        ))}</Space>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(article)/" } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          author
        }
        id
        slug
      }
    }
  }
`;
// Step 3: Export your component
export default ArticlesPage;
