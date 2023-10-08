interface PostAttributes {
    title: string;
    slug: string;
    date: string;
}
interface Post {
    node: {
        frontmatter: PostAttributes;
        html: string;
    };
}
