import React from "react";
import Layout from "../components/Layout";

const Blog = (props) => {
  return <div>
    <Layout data={props.data} description={"Blog posts"} />
  </div>;
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default Blog;
