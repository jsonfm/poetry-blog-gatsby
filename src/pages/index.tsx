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
        <>
            <section>
                <div className="container pt-8 pb-4">
                    <h5 className="text-xl text-center mb-4">Teatro mágico</h5>
                </div>
            </section>
            <section>
                <div className="container pb-12">
                    <div className="flex flex-col gap-6 max-w-[450px]">
                        {posts?.map((post, index) => (
                            <>
                                <PostCard key={`post-${index}`} post={post} />
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
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
