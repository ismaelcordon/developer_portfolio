import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockShiki from "tiptap-extension-code-block-shiki";
import Placeholder from "@tiptap/extension-placeholder";
import ImageResize from "tiptap-extension-resize-image";
import { YoutubeAutoEmbed } from "./extensions/YoutubeAutoEmbed";
import { HeadingId } from "./extensions/HeadingId";
import {
    forwardRef,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import type { Editor } from "@tiptap/react";
import { FormatType } from "./types/FormatType";
import { slugify } from "./utils/slugify";
import "./styles/blog-content.css";

export interface BlogEditorHandle {
    format: (type: FormatType) => void;
    formatCode: (language: string) => void;
    insertLink: (url: string, text: string) => void;
    insertImage: (src: string) => void;
    getHTML: () => string;
}

export interface TocHeading {
    level: 1 | 2 | 3;
    text: string;
    id: string;
}

interface Props {
    content: string;
    editable?: boolean;
    theme?: "light" | "dark";
    onUpdate?: (html: string) => void;
    onHeadingsChange?: (headings: TocHeading[]) => void;
}

const syncHeadings = (
    editor: Editor,
    onHeadingsChange?: (headings: TocHeading[]) => void,
) => {
    const { state, view } = editor;
    const { tr } = state;
    const headings: TocHeading[] = [];
    let modified = false;

    state.doc.descendants((node, pos) => {
        if (node.type.name === "heading" && [1, 2, 3].includes(node.attrs.level)) {
            const id = slugify(node.textContent);
            if (node.attrs.id !== id) {
                tr.setNodeMarkup(pos, undefined, { ...node.attrs, id });
                modified = true;
            }
            headings.push({ level: node.attrs.level, text: node.textContent, id });
        }
    });

    if (modified) view.dispatch(tr);
    onHeadingsChange?.(headings);
};

const BlogContent = forwardRef<BlogEditorHandle, Props>(
    ({ theme, content, editable = false, onUpdate, onHeadingsChange }, ref) => {
        const [initialContent] = useState(content);
        const onUpdateRef = useRef(onUpdate);
        onUpdateRef.current = onUpdate;
        const onHeadingsChangeRef = useRef(onHeadingsChange);
        onHeadingsChangeRef.current = onHeadingsChange;

        const extensions = useMemo(
            () => [
                StarterKit.configure({
                    codeBlock: false,
                }),
                CodeBlockShiki.configure({
                    defaultTheme: theme === "dark" ? "github-dark" : "github-light",
                    HTMLAttributes: {
                        style: "background: none",
                    },
                    defaultLanguage: "kotlin",
                }),
                Placeholder.configure({
                    placeholder: "Empieza a escribir...",
                }),
                YoutubeAutoEmbed,
                HeadingId,
                ImageResize.configure({
                    inline: true,
                    HTMLAttributes: {
                        class: "rounded-lg max-w-full my-4",
                    },
                }),
            ],
            [theme],
        );

        const editorProps = useMemo(
            () => ({
                attributes: {
                    class: "tiptap-editor focus:outline-none",
                },
            }),
            [],
        );

        const editor = useEditor({
            content: initialContent,
            editable,
            editorProps,
            extensions,
            onCreate({ editor }) {
                syncHeadings(editor, onHeadingsChangeRef.current);
            },
            onUpdate({ editor }) {
                onUpdateRef.current?.(editor.getHTML());
                syncHeadings(editor, onHeadingsChangeRef.current);
            },
        });

        useImperativeHandle(
            ref,
            () => ({
                formatCode: (language) => {
                    editor
                        .chain()
                        .focus()
                        .toggleCodeBlock({ language: language })
                        .run();
                },
                format: (type) => {
                    if (!editor) return;

                    if (type === "heading1") {
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run();
                    }

                    if (type === "heading2") {
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run();
                    }

                    if (type === "heading3") {
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 3 })
                            .run();
                    }

                    if (type === "quote") {
                        editor.chain().focus().toggleBlockquote().run();
                    }

                    if (type === "inline-code") {
                        editor.chain().focus().toggleCode().run();
                    }

                    if (type === "code") {
                        editor
                            .chain()
                            .focus()
                            .toggleCodeBlock({ language: "kotlin" })
                            .run();
                    }

                    if (type === "bold") {
                        editor.chain().focus().toggleBold().run();
                    }

                    if (type === "italic") {
                        editor.chain().focus().toggleItalic().run();
                    }

                    if (type === "divider") {
                        editor.chain().focus().setHorizontalRule().run();
                    }

                    if (type === "list") {
                        editor.chain().focus().toggleBulletList().run();
                    }

                    if (type === "ordered-list") {
                        editor.chain().focus().toggleOrderedList().run();
                    }
                },
                insertLink: (url, text) => {
                    if (!editor) return;

                    const linkClasses = "underline text-blue-500";

                    if (text && editor.state.selection.empty) {
                        editor
                            .chain()
                            .focus()
                            .insertContent(
                                `<a href="${url}" class="${linkClasses}">${text}</a>`,
                            )
                            .run();
                    } else {
                        editor
                            .chain()
                            .focus()
                            .setLink({ href: url, class: linkClasses })
                            .run();
                    }
                },
                insertImage: (src) => {
                    if (!editor) return;

                    editor.chain().focus().setImage({ src }).run();
                },
                getHTML: () => editor?.getHTML() ?? "",
            }),
            [editor],
        );

        return (
            <EditorContent
                editor={editor}
                className="blog-content text-lg leading-relaxed"
            />
        );
    },
);

export { BlogContent };
