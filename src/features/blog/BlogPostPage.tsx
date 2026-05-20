import { Link, useParams } from "react-router-dom";
import { blogPosts } from "./data/blogPosts";
import { BlogTag } from "./types/BlogPost";

const tagConfig: Record<BlogTag, { classes: string }> = {
    Android: {
        classes:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    iOS: {
        classes:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    Utils: {
        classes:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    },
};

function formatDate(dateStr: string): string {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Post not found
                    </h1>
                    <Link
                        to="/blog"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const tag = tagConfig[post.tag];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-10"
                >
                    ← Back to Blog
                </Link>

                <div className="flex items-center gap-3 mb-6">
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${tag.classes}`}
                    >
                        {post.tag}
                    </span>
                    <span className="text-sm text-slate-400 dark:text-slate-500">
                        {formatDate(post.date)}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {post.description}
                </p>
            </div>
        </div>
    );
}
