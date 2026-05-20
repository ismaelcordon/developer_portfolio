export type BlogTag = "Android" | "iOS" | "Utils";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    tag: BlogTag;
    date: string; // ISO format: "YYYY-MM-DD"
};
