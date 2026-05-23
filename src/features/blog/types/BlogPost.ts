export type BlogTag = "Android" | "iOS" | "AI";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    tag: string;
    publishedAt: string; // ISO format: "YYYY-MM-DD"
};
