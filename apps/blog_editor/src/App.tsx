import { useState, useRef, useEffect } from "react";
import { SPRITE_URL } from "./constants/paths";
import { EditorToolbar } from "./components/editortoolbar/EditorToolbar";
import { WordCounter } from "./components/WordCounter";
import { countWords } from "./utils/WordCounter";
import useDialog from "./hooks/useDialog";
import DeletePostDialog from "./components/dialogs/DeletePostDialog";
import LinkDialog from "./components/dialogs/LinkDialog";
import type { Post } from "./models/Post";
import { PostStatus } from "./models/Post";
import PostItem from "./components/PostItem";
import { usePosts } from "./hooks/usePosts";
import {
    updatePost,
    createPost,
    schedulePost,
    deletePost,
    updatePostVisibility,
} from "./services/posts.service";
import { useTags } from "./hooks/useTags";
import SchedulePostDialog from "./components/dialogs/SchedulePostDialog";
import { formatDateWithTime } from "./utils/Dates";
import { DefaultBlogEditorButton } from "./components/DefaultBlogEditorButton";
import { LanguageSelector } from "./components/LanguageSelector";
import { useLanguage } from "./contexts/LanguageContext";
import { LoadingComponent } from "./components/status/LoadingComponent";
import { NoPostComponent } from "./components/status/NoPostsComponent";
import { ServerFeedbackToast } from "./components/ServerFeedbackToast";
import { DatesInfo } from "./components/datesinfo/DatesInfo";
import { ReadingTime } from "./components/postproperties/ReadingTime";
import TagsComboBox from "./components/postproperties/TagsComboBox";
import HidePost from "./components/postproperties/HidePost";
import {
    BlogContent,
    BlogEditorHandle,
    FormatType
} from "@ismael-cordon/blog-shared";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const blogEditorRef = useRef<BlogEditorHandle>(null);

    const deleteArticle = useDialog();
    const linkDialog = useDialog();
    const scheduleDialog = useDialog();

    const {
        posts,
        total,
        loading: postsLoading,
        error: postsError,
        refetch,
    } = usePosts();
    const { tags, loading: tagsLoading, error: tagsError } = useTags();

    const isLoading = postsLoading || tagsLoading;
    const error = postsError || tagsError;

    const [isHiding, setIsHiding] = useState(false);

    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);
    const [wordCount, setWordCount] = useState(0);

    const { language, t } = useLanguage();

    const updateWordCountAndReadingTime = (content: string) => {
        if (content) {
            const newWordCount = countWords(content);
            setWordCount(newWordCount);

            const newReadingTime = Math.max(1, Math.ceil(newWordCount / 200));
            setSelectedPost((prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    readingTime: newReadingTime,
                };
            });
        } else {
            setWordCount(0);
        }
    };

    useEffect(() => {
        if (!postsLoading) {
            setSelectedPost((currentSelected) => {
                if (posts.length === 0) return null;

                const serverPost = currentSelected
                    ? posts.find((p) => p.id === currentSelected.id)
                    : null;

                if (!currentSelected || !serverPost) {
                    return posts[0];
                }

                return {
                    ...currentSelected,
                    status: serverPost.status,
                    scheduleAt: serverPost.scheduleAt,
                    publishedAt: serverPost.publishedAt,
                    updatedAt: serverPost.updatedAt,
                };
            });
        }
    }, [posts, postsLoading]);

    const handlePostClick = (post: Post) => {
        console.log("Post seleccionado:", post);

        setSelectedPost(post);
    };

    const savePostContent = async (publish: boolean) => {
        if (!selectedPost || !blogEditorRef.current) return;

        const html = blogEditorRef.current.getHTML();

        const payload = {
            title: selectedPost.title || "",
            title_es: selectedPost.titleEs || "",
            description: selectedPost.description || "",
            description_es: selectedPost.descriptionEs || "",
            content:
                language === "es"
                    ? selectedPost.content || ""
                    : html || selectedPost.content || "",
            content_es:
                language === "es"
                    ? html || selectedPost.contentEs || ""
                    : selectedPost.contentEs || "",
            reading_time: selectedPost.readingTime,
            tag_id: selectedPost.tag.tagId,
        };

        try {
            const response = await updatePost(
                selectedPost.id,
                payload,
                publish,
            );
            refetch();
            setToast({ message: response.message, type: "success" });
        } catch (error: any) {
            const message =
                error.response?.data?.message || "Error al guardar los cambios";
            setToast({ message, type: "error" });
        }
    };

    const handleCreatePost = async () => {
        try {
            const newPost = await createPost();

            setSelectedPost(newPost);
            refetch();
            setToast({ message: "Artículo creado con éxito", type: "success" });
        } catch (error: any) {
            const message =
                error.response?.data?.message || "Error al crear el artículo";
            setToast({ message, type: "error" });
        }
    };

    const handleDelete = async (postId: number) => {
        try {
            await deletePost(postId);

            refetch();
            setToast({
                message: "Artículo eliminado con éxito",
                type: "success",
            });
        } catch (error: any) {
            const message =
                error.response?.data?.message ||
                "Error al eliminar el artículo";
            setToast({ message, type: "error" });
        }
    };

    const handleSchedulePost = async (date: string, time: string) => {
        if (!selectedPost) return;

        try {
            const scheduled_at = new Date(`${date}T${time}`).toISOString();

            await schedulePost(selectedPost.id, {
                scheduled_at,
            });
            refetch();
            setToast({
                message: "Artículo programado con éxito",
                type: "success",
            });
        } catch (error: any) {
            const message =
                error.response?.data?.message ||
                "Error al programar el artículo";
            setToast({ message, type: "error" });
        }
    };

    const handlePostVisibility = async () => {
        try {
            setIsHiding(true);

            await updatePostVisibility(selectedPost?.id!);

            setSelectedPost((prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    status:
                        prev.status === PostStatus.PUBLISHED
                            ? PostStatus.HIDDEN
                            : PostStatus.PUBLISHED,
                };
            });

            setIsHiding(false);
            refetch();
            setToast({
                message: "Visibilidad del artículo actualizada con éxito",
                type: "success",
            });
        } catch (error: any) {
            const message =
                error.response?.data?.message ||
                "Error al actualizar la visibilidad del artículo";
            setToast({ message, type: "error" });
            setIsHiding(false);
        }
    };

    const currentContent =
        language === "es" ? selectedPost?.contentEs : selectedPost?.content;

    useEffect(() => {
        console.log(`Use effect when selectedPost or lanaguage has changed`)
        if (!selectedPost) {
            setWordCount(0);
            return;
        }

        const contentToCount =
            language === "es" ? selectedPost.contentEs : selectedPost.content;
        updateWordCountAndReadingTime(contentToCount || "");
    }, [selectedPost?.id, language]);


    const handleFormat = (type: FormatType) => {
        if (type === "link") {
            linkDialog.open();
            return;
        }
        if (type === "image") {
            fileInputRef.current?.click();
            return;
        }
        blogEditorRef.current?.format(type);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && blogEditorRef.current) {
            const reader = new FileReader();
            reader.onload = () => {
                blogEditorRef.current?.insertImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        if (e.target) {
            e.target.value = "";
        }
    };

    const handleInsertLink = (url: string, text: string) => {
        blogEditorRef.current?.insertLink(url, text);
    };

    if (isLoading) {
        return <LoadingComponent t={t} />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!selectedPost) {
        return (
            <NoPostComponent t={t} onCreateFirstEntryClick={handleCreatePost} />
        );
    }

    let hasUnsavedChanges = false;
    const serverPost = selectedPost
        ? posts.find((p) => p.id === selectedPost.id)
        : null;

    if (serverPost && selectedPost) {
        const currentHtml = blogEditorRef.current
            ? blogEditorRef.current.getHTML()
            : "";
        const currentContent =
            language === "es"
                ? selectedPost.content || ""
                : currentHtml || selectedPost.content || "";
        const currentContentEs =
            language === "es"
                ? currentHtml || selectedPost.contentEs || ""
                : selectedPost.contentEs || "";

        const normalize = (val: string | null | undefined) => {
            if (!val || val === "<p></p>") return "";
            return val;
        };

        hasUnsavedChanges =
            normalize(selectedPost.title) !== normalize(serverPost.title) ||
            normalize(selectedPost.titleEs) !== normalize(serverPost.titleEs) ||
            normalize(selectedPost.description) !==
            normalize(serverPost.description) ||
            normalize(selectedPost.descriptionEs) !==
            normalize(serverPost.descriptionEs) ||
            selectedPost.tag?.tagId !== serverPost.tag?.tagId ||
            normalize(currentContent) !== normalize(serverPost.content) ||
            normalize(currentContentEs) !== normalize(serverPost.contentEs);
    }

    return (
        <div className="flex h-screen">
            <aside
                className={`flex flex-col bg-slate-950 ${sidebarOpen ? "w-80" : "w-0 overflow-hidden"}`}
            >
                {/* Logo */}
                <div className="p-4">
                    <h1 className="text-lg font-semibold text-white">
                        Blog Editor
                    </h1>
                    <p className="pt-2 text-sm text-zinc-500 mb-4">
                        {total} entradas
                    </p>

                    <DefaultBlogEditorButton
                        onClick={handleCreatePost}
                        icon="plus-icon"
                        text={t.new_article}
                        className="w-full"
                    />
                </div>

                <div className="px-4 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="mb-4">
                        <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                            {t.drafts}
                        </h3>

                        {posts
                            .filter(
                                (posts) => posts.status === PostStatus.DRAFT,
                            )
                            .map((post) => (
                                <PostItem
                                    key={post.id}
                                    post={post}
                                    isSelected={selectedPost.id === post.id}
                                    onClick={() => handlePostClick(post)}
                                />
                            ))}
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                            {t.all_entries}
                        </h3>

                        {posts
                            .filter(
                                (posts) => posts.status !== PostStatus.DRAFT,
                            )
                            .map((post) => (
                                <PostItem
                                    key={post.id}
                                    post={post}
                                    isSelected={selectedPost.id === post.id}
                                    onClick={() => handlePostClick(post)}
                                />
                            ))}
                    </div>
                </div>
            </aside>

            <main className="flex flex-col flex-1 min-w-0 bg-slate-900">
                <div className="px-4 py-4 flex items-center border-b border-slate-700/60">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="cursor-pointer p-2 rounded-md transition-colors text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                        title="Toggle sidebar"
                    >
                        <svg className="w-8 h-8">
                            <use href={`${SPRITE_URL}#hamburger-icon`} />
                        </svg>
                    </button>

                    <input
                        id="title_id"
                        type="text"
                        value={
                            language === "es"
                                ? selectedPost.titleEs || ""
                                : selectedPost.title || ""
                        }
                        onChange={(e) => {
                            if (language === "es") {
                                setSelectedPost({
                                    ...selectedPost,
                                    titleEs: e.target.value,
                                });
                            } else {
                                setSelectedPost({
                                    ...selectedPost,
                                    title: e.target.value,
                                });
                            }
                        }}
                        placeholder="Título del artículo"
                        className="flex-1 min-w-0 text-4xl font-bold text-slate-100 bg-transparent border-none outline-none ms-4 placeholder:text-slate-600 leading-tight"
                    />

                    <LanguageSelector />
                </div>

                <div className="py-2 px-4 border-b border-slate-700/60">
                    <input
                        id="description_id"
                        type="text"
                        value={
                            language === "es"
                                ? selectedPost.descriptionEs || ""
                                : selectedPost.description || ""
                        }
                        onChange={(e) => {
                            if (language === "es") {
                                setSelectedPost({
                                    ...selectedPost,
                                    descriptionEs: e.target.value,
                                });
                            } else {
                                setSelectedPost({
                                    ...selectedPost,
                                    description: e.target.value,
                                });
                            }
                        }}
                        placeholder="Descripción corta ..."
                        className="w-full text-sm font-medium text-slate-400 bg-transparent border-none outline-none"
                    />
                </div>

                <EditorToolbar
                    t={t}
                    handleFormat={handleFormat}
                    deleteArticleOpen={deleteArticle.open}
                    scheduleDialogOpen={scheduleDialog.open}
                    savePostContent={savePostContent}
                    hasUnsavedChanges={hasUnsavedChanges}
                    selectedPostStatus={selectedPost.status}
                />

                <DatesInfo
                    t={t}
                    language={language}
                    createdAt={selectedPost.createdAt}
                    updatedAt={selectedPost.updatedAt}
                />

                <div className="flex w-full items-center pt-3 pb-3 px-4 border-b border-slate-700/60 gap-4 text-slate-500">
                    <ReadingTime
                        selectedPost={selectedPost}
                        setSelectedPost={setSelectedPost}
                        t={t}
                    />

                    <div className="flex gap-2 items-center text-slate-500">
                        <svg className="w-4 h-4">
                            <use href={`${SPRITE_URL}#tag-icon`} />
                        </svg>

                        <p className="font-medium text-xs">Tag</p>

                        <TagsComboBox
                            tags={tags}
                            selectedTag={selectedPost.tag}
                            onTagChange={(tag) =>
                                setSelectedPost({ ...selectedPost, tag })
                            }
                        />
                    </div>

                    {(selectedPost.status === PostStatus.PUBLISHED ||
                        selectedPost.status === PostStatus.SCHEDULED ||
                        selectedPost.status === PostStatus.HIDDEN) && (
                            <div className="flex items-center gap-1.5">
                                <svg
                                    className={`${selectedPost.status === PostStatus.PUBLISHED || selectedPost.status === PostStatus.HIDDEN ? `text-emerald-500` : `text-amber-500`} w-4 h-4`}
                                >
                                    <use
                                        href={`${SPRITE_URL}#${selectedPost.status == PostStatus.PUBLISHED ? "calendar-event" : "calendar"}-icon`}
                                    />
                                </svg>

                                <label
                                    className={`${selectedPost.status === PostStatus.PUBLISHED || selectedPost.status === PostStatus.HIDDEN ? `text-emerald-500` : `text-amber-500`} text-xs font-medium`}
                                >
                                    {selectedPost.status === PostStatus.PUBLISHED ||
                                        selectedPost.status === PostStatus.HIDDEN
                                        ? t.published_on
                                        : t.scheduled_on}
                                    {(selectedPost.status ===
                                        PostStatus.PUBLISHED ||
                                        selectedPost.status === PostStatus.HIDDEN
                                        ? selectedPost.publishedAt != null
                                        : selectedPost.scheduleAt != null) &&
                                        formatDateWithTime(
                                            selectedPost.status ===
                                                PostStatus.PUBLISHED ||
                                                selectedPost.status ===
                                                PostStatus.HIDDEN
                                                ? selectedPost.publishedAt!
                                                : selectedPost.scheduleAt!,
                                            language,
                                        )}
                                </label>
                            </div>
                        )}

                    {(selectedPost.status === PostStatus.PUBLISHED ||
                        selectedPost.status === PostStatus.HIDDEN) && (
                            <HidePost
                                t={t}
                                isHidden={selectedPost.status === PostStatus.HIDDEN}
                                isLoading={isHiding}
                                onClick={handlePostVisibility}
                            />
                        )}
                </div>

                <div className="w-full mx-auto py-10 px-6 md:px-12 overflow-y-auto flex-1 custom-scrollbar">
                    <BlogContent
                        key={`${selectedPost.id}-${language}`}
                        ref={blogEditorRef}
                        content={currentContent || ""}
                        editable={true}
                        onUpdate={(html) => {
                            setSelectedPost((prev) => {
                                if (!prev) return prev;
                                return language === "es"
                                    ? { ...prev, contentEs: html }
                                    : { ...prev, content: html };
                            });
                            updateWordCountAndReadingTime(html);
                        }}
                    />
                </div>

                <WordCounter wordCount={wordCount} />
            </main>

            <DeletePostDialog
                dialogRef={deleteArticle.ref}
                onConfirm={() => handleDelete(selectedPost?.id)}
                title={t.delete_post}
                description={t.delete_post_warning}
            />

            <LinkDialog
                dialogRef={linkDialog.ref}
                onConfirm={handleInsertLink}
            />

            <SchedulePostDialog
                dialogRef={scheduleDialog.ref}
                onConfirm={handleSchedulePost}
            />

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
            />

            {toast && (
                <ServerFeedbackToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}

export default App;
