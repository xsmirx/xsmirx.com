import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const ContactButtons = () => {
  const data = useStaticQuery(graphql`
    {
      mdx(slug: { eq: "Contacts" }) {
        frontmatter {
          github
          twitter
          linkedIn
          telegram
          email
        }
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default ContactButtons;
