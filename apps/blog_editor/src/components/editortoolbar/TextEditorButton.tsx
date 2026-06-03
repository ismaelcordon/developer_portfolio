import { SPRITE_URL } from "../../constants/paths";

interface TextEditorButtonProps {
    type:
    | "inline-code"
    | "code"
    | "quote"
    | "list"
    | "bold"
    | "heading1"
    | "heading2"
    | "heading3"
    | "italic"
    | "divider"
    | "ordered-list"
    | "link"
    | "image";
    tooltip: string;
    onFormat: (
        type:
            | "inline-code"
            | "code"
            | "quote"
            | "list"
            | "bold"
            | "heading1"
            | "heading2"
            | "heading3"
            | "italic"
            | "divider"
            | "ordered-list"
            | "link"
            | "image",
    ) => void;
}

export function TextEditorButton({ type, tooltip, onFormat }: TextEditorButtonProps) {
    return (
        <div className="relative group">
            <button
                type="button"
                onMouseDown={(e) => {
                    e.preventDefault();
                    onFormat(type);
                }}
                className="cursor-pointer p-2 rounded-md transition-colors text-slate-500 hover:text-slate-200 hover:bg-slate-700/50"
            >
                <svg className="w-4 h-4">
                    <use href={`${SPRITE_URL}#${type}-icon`} />
                </svg>
            </button>

            <span
                className="absolute w-max whitespace-nowrap top-full mt-1 left-1/2 -translate-x-1/2
                   rounded-md bg-blue-500 text-white text-xs px-2 py-1
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-150
                   pointer-events-none shadow-md group-hover:delay-200 text-center"
            >
                {tooltip}
            </span>
        </div>
    );
}
