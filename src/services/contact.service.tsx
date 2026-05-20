import { ApiClient } from "../lib/ApiClient";
import { ENDPOINTS } from "../lib/endpoints";
import { Post } from "../models/Post";

export interface ApiPost {
    title: string;
    description: string;
    content: string;
    reading_time: number;
    slug: string;
    tag: string;
    published_at: string;
}

export interface ApiTag {
    tag_id: number;
    description: string;
}

interface ApiResponse<T> {
    message: string;
    data: T;
}

interface PaginatedResponse<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        total_pages: number;
        has_next_page: boolean;
        has_prev_page: boolean;
    };
}

export type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

export type ContactResponse = {
    ok: boolean;
};

export async function sendContact(payload: ContactPayload) {
    const res = await ApiClient.post<ContactResponse>("/contact", payload);
    return res.data;
}

export interface GetPostsResult {
    posts: Post[];
    total: number;
}

const mapApiPostToPost = (apiPost: ApiPost): Post => {
    console.log(`Mapping post: ...${apiPost}`);
    return {
        title: apiPost.title,
        description: apiPost.description,
        content: apiPost.content,
        tag: apiPost.tag,
        readingTime: apiPost.reading_time,
        slug: apiPost.slug,
        publishedAt: apiPost.published_at,
    };
};

export const getPosts = async (): Promise<GetPostsResult> => {
    const response = await ApiClient.get<ApiResponse<PaginatedResponse<ApiPost>>>(
        ENDPOINTS.POSTS,
    );
    return {
        posts: response.data.data.data.map(mapApiPostToPost),
        total: response.data.data.meta.total,
    };
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const response = await ApiClient.get<ApiResponse<ApiPost>>(
        ENDPOINTS.POST_BY_SLUG(slug),
    );
    return mapApiPostToPost(response.data.data);
};
