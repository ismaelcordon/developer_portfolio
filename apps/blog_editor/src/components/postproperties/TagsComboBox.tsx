import { useState, useRef, useEffect } from "react";
import { SPRITE_URL } from "../../constants/paths";
import type { Tag } from "../../models/Tag";

interface TagComboBoxProps {
    tags: Tag[];
    selectedTag: Tag | null;
    onTagChange: (tag: Tag) => void;
}

function TagsComboBox({ tags, selectedTag, onTagChange }: TagComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Tag | null>(selectedTag || null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setSelected(selectedTag || null);
    }, [selectedTag]);

    return (
        <div ref={ref}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-40 flex items-center justify-between rounded-md border border-slate-600 bg-slate-800 focus:border-blue-500 px-3 py-1.5 text-sm text-slate-300 shadow-sm outline-none h-7"
            >
                <span className="text-slate-300">
                    {selected?.description ?? "Selecciona..."}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                >
                    <use href={`${SPRITE_URL}#chevron-down-icon`} />
                </svg>
            </button>

            {open && (
                <ul className="absolute z-10 mt-1 w-40 rounded-md bg-slate-900 border border-slate-600 text-slate-300 py-1">
                    {tags.map((tag) => (
                        <li
                            key={tag.tagId}
                            onClick={() => {
                                onTagChange(tag);
                                setOpen(false);
                            }}
                            className="flex items-center justify-between px-3 py-1.5 text-sm cursor-pointer hover:bg-slate-800"
                        >
                            <span>{tag.description}</span>

                            {selected?.tagId === tag.tagId && (
                                <svg className="w-5 h-5 text-slate-300">
                                    <use href={`${SPRITE_URL}#check-icon`} />
                                </svg>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TagsComboBox;
