import { SPRITE_URL } from "../../constants/paths";
import { DefaultBlogEditorButton } from "../DefaultBlogEditorButton";
import { PostStatus, type PostStatusType } from "../../models/Post";
import { translations } from "../../translations/Translations";
import { TextEditorButton } from "./TextEditorButton";
import { FormatType } from "@ismael-cordon/blog-shared";

type Translations = typeof translations.es;

interface EditorToolbarProps {
    t: Translations;
    handleFormat: (type: FormatType) => void;
    deleteArticleOpen: () => void;
    scheduleDialogOpen: () => void;
    savePostContent: (publish: boolean) => void;
    hasUnsavedChanges: boolean;
    selectedPostStatus: PostStatusType;
}

export function EditorToolbar({
    t,
    handleFormat,
    deleteArticleOpen,
    scheduleDialogOpen,
    savePostContent,
    hasUnsavedChanges,
    selectedPostStatus,
}: EditorToolbarProps) {
    return (
        <div className="flex w-full items-center pt-2 pb-2 px-4 border-b border-slate-700/60">
            <TextEditorButton
                type="heading1"
                tooltip={t.editor_heading1}
                onFormat={handleFormat}
            />
            <TextEditorButton
                type="heading2"
                tooltip={t.editor_heading2}
                onFormat={handleFormat}
            />
            <TextEditorButton
                type="heading3"
                tooltip={t.editor_heading3}
                onFormat={handleFormat}
            />

            <div className="h-5 mx-1.5 border-l border-slate-700 shrink-0" />

            <TextEditorButton
                type="bold"
                tooltip={t.editor_bold}
                onFormat={handleFormat}
            />
            <TextEditorButton
                type="italic"
                tooltip={t.editor_italic}
                onFormat={handleFormat}
            />

            <div className="h-5 mx-1.5 border-l border-slate-700 shrink-0" />

            <TextEditorButton
                type="list"
                tooltip={t.editor_list}
                onFormat={handleFormat}
            />
            <TextEditorButton
                type="ordered-list"
                tooltip={t.editor_ordered_list}
                onFormat={handleFormat}
            />

            <div className="h-5 mx-1.5 border-l border-slate-700 shrink-0" />

            <TextEditorButton
                type="quote"
                tooltip={t.editor_quote}
                onFormat={handleFormat}
            />
            <TextEditorButton
                type="code"
                tooltip={t.editor_code}
                onFormat={handleFormat}
            />

            <TextEditorButton
                type="divider"
                tooltip={t.editor_divider}
                onFormat={handleFormat}
            />

            <TextEditorButton
                type="link"
                tooltip={t.editor_link}
                onFormat={handleFormat}
            />

            <TextEditorButton
                type="image"
                tooltip={t.editor_image}
                onFormat={handleFormat}
            />

            <div className="flex items-center gap-2 ml-auto">
                <button
                    className="inline-flex items-center cursor-pointer font-medium px-2 py-1 text-slate-500 hover:text-red-400 gap-2 rounded-md text-xs hover:bg-red-500/10 h-8"
                    onClick={deleteArticleOpen}
                >
                    <svg className="w-5 h-5">
                        <use href={`${SPRITE_URL}#bin-icon`} />
                    </svg>
                </button>

                <DefaultBlogEditorButton
                    onClick={scheduleDialogOpen}
                    icon="timer-icon"
                    variant="outline"
                    text={t.schedule}
                    disabled={
                        selectedPostStatus === PostStatus.PUBLISHED ||
                        selectedPostStatus === PostStatus.HIDDEN
                    }
                />

                <DefaultBlogEditorButton
                    onClick={() => savePostContent(false)}
                    icon="save-icon"
                    text={t.save}
                    disabled={!hasUnsavedChanges}
                />

                <DefaultBlogEditorButton
                    onClick={() => savePostContent(true)}
                    icon="publish-icon"
                    variant="success"
                    text={t.publish}
                    disabled={selectedPostStatus === PostStatus.PUBLISHED}
                />
            </div>
        </div>
    );
}
