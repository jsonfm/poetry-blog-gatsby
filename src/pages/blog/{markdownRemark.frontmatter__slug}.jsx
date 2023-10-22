import * as React from "react";
import { Link, graphql } from "gatsby";
import { Icon } from "@iconify/react";
import { Header } from "../../layout/default/Header";
import { SEO } from "../../components/SEO";


const BlogTemplate = ({
    data, // this prop will be injected by the GraphQL query below.
}) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <>
            <Header/>
            <section className="">
                <div className="container text-justify flex flex-col">
                    <h4 className="text-xl mb-5 font-semibold">{frontmatter?.title}</h4>
                    {/* <div>{frontmatter?.date}</div> */}
                    <div className="pb-16" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </section>
        </>
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


export const Head = () => {
    return (
        <SEO />
    )
  }
