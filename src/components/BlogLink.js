import React from "react";
import { Link } from "gatsby";
import moment from "moment";

const BlogLink = ({ frontmatter }) => {
  const { path, title, excerpt, date } = frontmatter;
  return (
    <Link to={path}>
      <div
        className="blog-link w-full bg-gray-300 hover:text-blue-900 shadow-xl rounded-lg px-4 py-1 mx-2 my-1"
        style={{
          border: "1px solid black",
        }}
      >
        <div>
          <h3 className="link-to-post text-xl text-gray-900">{title}</h3>
          <p>{excerpt}</p>
          <p className="text-sm">{moment(date).format("MM/DD/YY")}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogLink;
