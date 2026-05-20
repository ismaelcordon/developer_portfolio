import { useState } from "react";
import { blogPosts } from "./data/blogPosts";
import BlogPostCard from "./BlogPostCard";
import { BlogTag } from "./types/BlogPost";
import { SPRITE_URL } from "../../constants/paths";
import { ComingSoon } from "../../components/ComingSoon";
import { Trans, useTranslation } from "react-i18next";

type Filter = "All" | BlogTag;

const filters: Filter[] = ["All", "Android", "iOS", "Utils"];

const isBlogDone = true;

export default function BlogPage() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<Filter>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const isSearchActive = searchQuery.trim().length >= 3;

    const filtered = blogPosts.filter((p) => {
        const matchesTag = activeFilter === "All" || p.tag === activeFilter;
        const matchesSearch =
            !isSearchActive ||
            p.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-4 pb-24">
                <div className="py-20 text-start">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mx-auto">
                        Blog
                    </h1>

                    <p className="pt-6 whitespace-pre-line text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        <Trans
                            i18nKey="blog.intro"
                            components={{
                                1: (
                                    <span className="text-blue-600 dark:text-blue-400 font-bold" />
                                ),
                            }}
                            parent="span"
                        ></Trans>
                    </p>
                </div>

                {!isBlogDone ? (
                    <ComingSoon />
                ) : (
                    <>
                        {/* Search bar */}
                        <div className="flex justify-center mb-8">
                            <div className="group relative w-full">
                                <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors duration-200 group-focus-within:text-blue-500">
                                    <use href={`${SPRITE_URL}#search-icon`} />
                                </svg>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    placeholder="Search posts... (min. 3 characters)"
                                    className="w-full pl-10 pr-10 py-2.5 rounded-full text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-slate-300 dark:hover:border-slate-600"
                                />
                                {searchQuery.length > 0 && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 cursor-pointer"
                                        aria-label="Clear search"
                                    >
                                        <svg className="w-3 h-3">
                                            <use
                                                href={`${SPRITE_URL}#close-icon`}
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Tag filters */}
                        <div className="flex flex-wrap w-full gap-2 mb-12">
                            {filters.map((filter) => {
                                const count =
                                    filter === "All"
                                        ? blogPosts.length
                                        : blogPosts.filter(
                                              (p) => p.tag === filter,
                                          ).length;

                                return (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                            activeFilter === filter
                                                ? "bg-blue-600 text-white"
                                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                        }`}
                                    >
                                        <span>{filter}</span>
                                        <span
                                            className={`ml-2 text-xs ${activeFilter === filter ? "text-white" : "text-slate-500 dark:text-slate-400"}`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {filtered.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map((post) => (
                                    <BlogPostCard key={post.slug} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-3 py-20 text-center">
                                <svg className="w-10 h-10 text-slate-300 dark:text-slate-600">
                                    <use href={`${SPRITE_URL}#search-icon`} />
                                </svg>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    No posts found for{" "}
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                                        "{searchQuery}"
                                    </span>
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveFilter("All");
                                    }}
                                    className="mt-1 text-xs text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2 transition-colors duration-150 cursor-pointer"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
