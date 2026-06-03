import apiClient from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import type { Post } from "../models/Post";
import type { Tag } from "../models/Tag";

/**
 * Shape of a post as returned by the API.
 * Differs from the local Post model in field names and tag structure.
 */
export interface ApiPost {
    post_id: number;
    title: string;
    title_es: string;
    description: string;
    description_es: string;
    content: string;
    content_es: string;
    reading_time: number;
    status: string;
    scheduled_at: string | null;
    published_at: string | null;
    created_at: string;
    updated_at: string;
    tag: ApiTag;
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

interface SchedulePostPayload {
    scheduled_at: string;
}

export interface UpdatePostPayload {
    title: string;
    title_es: string;
    description: string;
    description_es: string;
    content: string;
    content_es: string;
    reading_time: number;
    tag_id: number;
}

/**
 * Maps an API post to the local Post model used by UI components.
 */
const mapApiPostToPost = (apiPost: ApiPost): Post => ({
    id: apiPost.post_id,
    title: apiPost.title,
    titleEs: apiPost.title_es,
    description: apiPost.description,
    descriptionEs: apiPost.description_es,
    content: apiPost.content,
    contentEs: apiPost.content_es,
    status: apiPost.status.toLowerCase() as Post["status"],
    tag: {
        tagId: apiPost.tag?.tag_id,
        description: apiPost.tag?.description,
    },
    readingTime: apiPost.reading_time,
    scheduleAt: apiPost.scheduled_at ? new Date(apiPost.scheduled_at) : null,
    publishedAt: apiPost.published_at ? new Date(apiPost.published_at) : null,
    updatedAt: new Date(apiPost.updated_at),
    createdAt: new Date(apiPost.created_at),
});

const mapApiTagToTag = (apiTag: ApiTag): Tag => ({
    tagId: apiTag.tag_id,
    description: apiTag.description,
});

export interface GetPostsResult {
    posts: Post[];
    total: number;
}

export const getPosts = async (): Promise<GetPostsResult> => {
    const response = await apiClient.get<
        ApiResponse<PaginatedResponse<ApiPost>>
    >(ENDPOINTS.POSTS);

    return {
        posts: response.data.data.data.map(mapApiPostToPost),
        total: response.data.data.meta.total,
    };
};

export const createPost = async (): Promise<Post> => {
    const response = await apiClient.post<ApiResponse<ApiPost>>(
        ENDPOINTS.POSTS,
    );
    return mapApiPostToPost(response.data.data);
};

export const deletePost = async (id: number): Promise<void> => {
    await apiClient.delete(ENDPOINTS.POST_BY_ID(id));
};

export const publishPost = async (id: number): Promise<void> => {
    await apiClient.patch<ApiResponse<null>>(ENDPOINTS.PUBLISH_POST(id));
};

export const schedulePost = async (
    id: number,
    payload: SchedulePostPayload,
): Promise<void> => {
    await apiClient.patch<ApiResponse<null>>(
        ENDPOINTS.SCHEDULE_POST(id),
        payload,
    );
};

export const updatePost = async (
    id: number,
    payload: UpdatePostPayload,
    publish: boolean,
): Promise<{ message: string }> => {
    const response = await apiClient.put<ApiResponse<null>>(
        ENDPOINTS.UPDATE_POST(id, publish),
        payload,
    );
    return { message: response.data.message };
};

export const getAllTags = async (): Promise<Tag[]> => {
    const response = await apiClient.get<ApiResponse<ApiTag[]>>(ENDPOINTS.TAGS);

    return response.data.data.map(mapApiTagToTag);
};

export const updatePostVisibility = async (
    id: number,
): Promise<{ message: string }> => {
    const response = await apiClient.patch<ApiResponse<null>>(
        ENDPOINTS.CHANGE_VISIBILITY(id),
    );

    return { message: response.data.message };
};
