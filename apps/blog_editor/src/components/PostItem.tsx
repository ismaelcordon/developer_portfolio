import { SPRITE_URL } from "../constants/paths";
import { PostStatus, type Post, type PostStatusType } from "../models/Post";
import { formatDateToShortString } from "../utils/Dates";
import { useLanguage } from "../contexts/LanguageContext";
import { tagConfig, BlogTag } from "@ismael-cordon/blog-shared";

const statusStyles: Record<PostStatusType, string> = {
    draft: "bg-zinc-500/20 text-zinc-400",
    published: "bg-emerald-500/20 text-emerald-400",
    scheduled: "bg-amber-500/20 text-amber-400",
    hidden: "bg-zinc-700/50 text-zinc-500",
};

interface PostItemProps {
    post: Post;
    isSelected: boolean;
    onClick: () => void;
}

function PostItem({ post, isSelected, onClick }: PostItemProps) {
    const { language } = useLanguage();

    return (
        <button
            className={`flex-col text-left w-full gap-2 p-3 border cursor-pointer group ${
                isSelected
                    ? "border-blue-500/30 bg-blue-600/15 rounded-md"
                    : "border-transparent hover:bg-zinc-800/60 hover:rounded-md"
            }`}
            onClick={onClick}
        >
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                    {post.status === PostStatus.HIDDEN && (
                        <svg className="w-3 h-3 text-zinc-500">
                            <use href={`${SPRITE_URL}#eye-off-icon`} />
                        </svg>
                    )}

                    <p
                        className={`text-sm font-medium ${isSelected ? "text-blue-300" : "text-zinc-300 group-hover:text-white"}`}
                    >
                        {language === "es" ? post.titleEs : post.title}
                    </p>
                </div>

                {post.tag && (
                    <span
                        className={`items-center rounded-md text-[0.65rem] font-medium px-1 h-4 ${tagConfig[post.tag.description as BlogTag]?.classes || "bg-zinc-500/20 text-zinc-400"}`}
                    >
                        <p>{post.tag.description}</p>
                    </span>
                )}
            </div>

            <div className="flex items-start justify-between gap-2 pt-2">
                <span
                    className={`items-center rounded md text-[0.65rem] font-medium px-1 h-4 ${statusStyles[post.status]}`}
                >
                    <p>{post.status}</p>
                </span>

                {post.publishedAt && (
                    <span className="text-xs text-zinc-600 text-[0.65rem]">
                        {formatDateToShortString(post.publishedAt)}
                    </span>
                )}
            </div>

            {post.status === "scheduled" && post.scheduleAt && (
                <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-amber-400">
                        <use href={`${SPRITE_URL}#timer-icon`} />
                    </svg>

                    <span className="text-xs text-amber-400 text-[0.65rem]">
                        {formatDateToShortString(post.scheduleAt)}
                    </span>
                </div>
            )}
        </button>
    );
}

export default PostItem;
