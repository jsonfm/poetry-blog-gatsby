import React from "react";
import { graphql } from "gatsby";
import { PostCard } from "../components/blog/PostCard";
import { Header } from "../layout/default/Header";

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
            <Header/>
            <section className="pb-12">
                <div className="container">
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
