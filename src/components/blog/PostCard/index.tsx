import React from "react";
import { Link } from "gatsby";
import { truncate, cleanText } from "../../../utils/strings";

interface PostCard {
    post: Post;
}

export const PostCard = ({ post }: PostCard) => {
    const truncated = cleanText(truncate(post?.node?.html, 80));
    return (
        <Link to={`/blog${post?.node?.frontmatter?.slug}`}>
            <div>
                <h3 className="font-bold">{post?.node?.frontmatter?.title}</h3>
                <div className="text-gray-300 text-ellipsis overflow-hidden h-10 md:h-12 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: truncated }} />
                </div>
            </div>
        </Link>
    );
};
