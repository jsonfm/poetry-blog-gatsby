import React from "react";
import { Link } from "gatsby";

interface PostCard {
    post: Post;
}

export const PostCard = ({ post }: PostCard) => {
    const truncated = post?.node?.html?.slice(20);
    return (
        <Link to={`/blog${post?.node?.frontmatter?.slug}`}>
            <div>
                <h3>{post?.node?.frontmatter?.title}</h3>
                <p className="text-ellipsis overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: truncated }} />
                </p>
            </div>
        </Link>
    );
};
