import * as React from "react";
import { graphql } from "gatsby";

const BlogTemplate = ({
    data, // this prop will be injected by the GraphQL query below.
}) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    );
};

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;

export default BlogTemplate;
