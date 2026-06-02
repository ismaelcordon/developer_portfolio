import { useEffect } from "react";
import { Post } from "../../models/Post";
import { formatDateToLong } from "../utils/date.utils";
import { useTranslation } from "react-i18next";
import { BlogContent, BlogTag, tagConfig } from "@ismael-cordon/blog-shared";
import { trackBlogPostView } from "../../analytics/umami";
import { FROM_CLICK_STORAGE_KEY } from "./tracking";
import { useSettings } from "../../contexts/SettingsContext";

interface BlogPostPageProps {
    post: Post;
    lang: "es" | "en";
}

export default function BlogPostPage({ post, lang }: BlogPostPageProps) {
    const { t } = useTranslation();
    const { theme } = useSettings();

    useEffect(() => {
        // El post se renderiza desde el servidor; aquí solo registramos la
        // vista. Si veníamos de un click en la lista, ya se contó como "click",
        // así que no la duplicamos como "direct".
        let fromClick = false;
        try {
            fromClick =
                sessionStorage.getItem(FROM_CLICK_STORAGE_KEY) === post.slug;
            if (fromClick) {
                sessionStorage.removeItem(FROM_CLICK_STORAGE_KEY);
            }
        } catch {
            /* sessionStorage no disponible */
        }

        if (!fromClick) {
            trackBlogPostView(post.slug, "direct");
        }
    }, [post.slug]);

    const tag = tagConfig[post.tag as BlogTag] ?? tagConfig.Android;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <a
                    href={`/${lang}/blog`}
                    className="inline-flex items-center gap-1 text-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-10"
                >
                    {t("blog.back_to_blog")}
                </a>

                <div className="flex items-center gap-3 mb-6">
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${tag.classes}`}
                    >
                        {post.tag}
                    </span>
                    <span className="text-sm text-slate-400 dark:text-slate-500">
                        {formatDateToLong(post.publishedAt, lang)}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    {post.description}
                </p>

                <BlogContent key={theme} theme={theme} content={post.content} />
            </div>
        </div>
    );
}
