import * as React from "react";
import { graphql } from "gatsby";

const BlogTemplate = ({
    data, // this prop will be injected by the GraphQL query below.
}) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <section className="py-16">
            <div className="container text-justify flex flex-col">
                <h4 className="text-xl text-center mb-8 font-semibold">{frontmatter?.title}</h4>
                {/* <div>{frontmatter?.date}</div> */}
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </section>
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
