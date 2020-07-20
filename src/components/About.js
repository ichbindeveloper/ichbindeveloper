import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import WebLinks from "./WebLinks";

const About = () => {
  const data = useStaticQuery(graphql`
    query q {
      file(relativePath: { eq: "avatar/avatar.jpg" }) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <div className="about-me-container">
      <div className="about-me-section">
        <Img
          className="avatar-image"
          style={{ width: "150px", borderRadius: "10px" }}
          fluid={data.file.childImageSharp.fluid}
          alt="avatar - king of the hill characters upset about a football game"
        />
        <div
          className="about-me-text"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "3px 5px",
            width: "140px",
            marginTop: "2px"
          }}
        >
          <h2 style={{ margin: "0px 2px", fontFamily: "avenir" }}>
            ichbindev
          </h2>
          <WebLinks />
        </div>
      </div>
    </div>
  );
};

// export const query = graphql`
//   query q {
//     file(relativePath: { eq: "avatar/avatar.jpg" }) {
//       id
//       childImageSharp {
//         fluid {
//           aspectRatio
//           base64
//           sizes
//           src
//           srcSet
//         }
//       }
//     }
//   }
// `;

export default About;