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
                {/* <span className="text-xs">{post?.node?.frontmatter?.date}</span> */}
                <h3 className="font-bold">{post?.node?.frontmatter?.title}</h3>

                <div className="text-ellipsis overflow-hidden h-12 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: truncated }} />
                </div>
                {/* <p className="font-semibold text-sm">Leer más {`>>`}</p> */}
            </div>
        </Link>
    );
};
