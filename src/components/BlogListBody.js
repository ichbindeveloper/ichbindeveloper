import React from "react";
import BlogLink from "./BlogLink";

const BlogListBody = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div className="blog-link-container" style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          fontFamily: "avenir",
        }}
      >
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <BlogLink
                path={frontmatter.path}
                title={frontmatter.title}
                date={frontmatter.date}
                excerpt={frontmatter.excerpt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogListBody;
