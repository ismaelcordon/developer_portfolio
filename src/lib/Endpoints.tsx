export const ENDPOINTS = {
    POSTS: "/posts",
    POST_BY_SLUG: (slug: string) => `/posts/slug/${slug}`,
} as const;