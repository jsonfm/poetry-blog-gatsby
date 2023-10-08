import React from "react";
import { graphql } from "gatsby";
import { PostCard } from "../components/blog/PostCard";

interface Query {
    data: {
        allMarkdownRemark: {
            edges: Post[];
        };
    };
}

const Home = ({ data }: Query) => {
    const {
        allMarkdownRemark: { edges: posts },
    } = data;

    return (
        <section>
            <div className="container">
                {posts?.map((post, index) => (
                    <PostCard key={`post-${index}`} post={post} />
                ))}
            </div>
        </section>
    );
};

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(limit: 100) {
            edges {
                node {
                    html
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                    }
                }
            }
        }
    }
`;

export default Home;
