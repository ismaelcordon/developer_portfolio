import { Tag } from "./Tag";


export const PostStatus = {
    DRAFT: "draft",
    PUBLISHED: "published",
    SCHEDULED: "scheduled",
    HIDDEN: "hidden",
} as const;

export type PostStatusType = (typeof PostStatus)[keyof typeof PostStatus];

export interface Post {
    title: string;
    description: string;
    content: string;
    tag: string;
    readingTime: number;
    publishedAt: string;
    slug: string;
}