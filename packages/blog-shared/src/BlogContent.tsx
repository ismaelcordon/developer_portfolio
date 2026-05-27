import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockShiki from "tiptap-extension-code-block-shiki";
import Placeholder from "@tiptap/extension-placeholder";
import ImageResize from "tiptap-extension-resize-image";
import { YoutubeAutoEmbed } from "./extensions/YoutubeAutoEmbed";
import {
    forwardRef,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import { FormatType } from "./types/FormatType";
import "./styles/blog-content.css";

export interface BlogEditorHandle {
    format: (type: FormatType) => void;
    insertLink: (url: string, text: string) => void;
    insertImage: (src: string) => void;
    getHTML: () => string;
}

interface Props {
    content: string;
    editable?: boolean;
    onUpdate?: (html: string) => void;
}

const BlogContent = forwardRef<BlogEditorHandle, Props>(
    ({ content, editable = false, onUpdate }, ref) => {
        const [initialContent] = useState(content);
        const onUpdateRef = useRef(onUpdate);
        onUpdateRef.current = onUpdate;

        const extensions = useMemo(
            () => [
                StarterKit.configure({
                    codeBlock: false,
                }),
                CodeBlockShiki.configure({
                    defaultTheme: "github-dark",
                    HTMLAttributes: {
                        style: "background: none",
                    },
                    defaultLanguage: "kotlin",
                }),
                Placeholder.configure({
                    placeholder: "Empieza a escribir...",
                }),
                YoutubeAutoEmbed,
                ImageResize.configure({
                    inline: true,
                    HTMLAttributes: {
                        class: "rounded-lg max-w-full my-4",
                    },
                }),
            ],
            [],
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
            onUpdate({ editor }) {
                onUpdateRef.current?.(editor.getHTML());
            },
        });

        useImperativeHandle(
            ref,
            () => ({
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

                    const linkClasses = "underline text-red-500";

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
