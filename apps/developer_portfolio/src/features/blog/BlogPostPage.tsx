import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostBySlug } from "../../services/contact.service";
import { Post } from "../../models/Post";
import { formatDateToLong } from "../utils/date.utils";
import { useSettings } from "../../contexts/SettingsContext";
import { useTranslation } from "react-i18next";
import { BlogContent, BlogTag, tagConfig } from "@ismael-cordon/blog-shared";
import { trackBlogPostView } from "../../analytics/umami";

export default function BlogPostPage() {
    const { t } = useTranslation();
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { language } = useSettings();

    useEffect(() => {
        if (!slug) return;

        const state = location.state as { fromClick?: boolean } | null;

        if (!state?.fromClick) {
            trackBlogPostView(slug, "direct");
        }
    }, [location.state]);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) {
                setError(true);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(false);
                const fetchedPost = await getPostBySlug(slug, language.code);
                setPost(fetchedPost);
            } catch (error) {
                console.error("Failed to fetch post:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, language]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!post || error) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {t("blog.post_not_found")}
                    </h1>
                    <Link
                        to="/blog"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {t("blog.back_to_blog")}
                    </Link>
                </div>
            </div>
        );
    }

    const tag = tagConfig[post.tag as BlogTag] ?? tagConfig.Android;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-1 text-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-10"
                >
                    {t("blog.back_to_blog")}
                </Link>

                <div className="flex items-center gap-3 mb-6">
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${tag.classes}`}
                    >
                        {post.tag}
                    </span>
                    <span className="text-sm text-slate-400 dark:text-slate-500">
                        {formatDateToLong(post.publishedAt, language.code)}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    {post.description}
                </p>

                <BlogContent content={post.content} />
            </div>
        </div>
    );
}
