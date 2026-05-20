import { Link } from "react-router-dom";
import { BlogPost, BlogTag } from "./types/BlogPost";
import { SPRITE_URL } from "../../constants/paths";

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

export default function BlogPostCard({ post }: { post: BlogPost }) {
    const tag = tagConfig[post.tag];

    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group flex flex-col gap-3 bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2"
        >
            <div className="flex items-center">
                <span
                    className={`px-3 py-2 text-xs font-semibold rounded-full ${tag.classes}`}
                >
                    {post.tag}
                </span>
                <span className="flex items-center px-4 gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <svg className="w-4 h-4 shrink-0">
                        <use href={`${SPRITE_URL}#calendar-icon`} />
                    </svg>
                    <span className="leading-none">{formatDate(post.date)}</span>
                </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.description}
            </p>
        </Link>
    );
}
