import { useState, useRef, useEffect } from "react";
import { SPRITE_URL } from "../../constants/paths";

const LANGUAGES = [
    { value: "kotlin", label: "Kotlin" },
    { value: "swift", label: "Swift" },
    { value: "bash", label: "Bash" },
];

interface CodeLanguageButtonProps {
    tooltip: string;
    onFormat: (language: string) => void;
}

export function CodeLanguageButton({ tooltip, onFormat }: CodeLanguageButtonProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative group" ref={ref}>
            <button
                type="button"
                onMouseDown={(e) => {
                    e.preventDefault();
                    setOpen((prev) => !prev);
                }}
                className="cursor-pointer p-2 rounded-md transition-colors text-slate-500 hover:text-slate-200 hover:bg-slate-700/50"
            >
                <svg className="w-4 h-4">
                    <use href={`${SPRITE_URL}#code-icon`} />
                </svg>
            </button>

            {!open && (
                <span className="absolute w-max whitespace-nowrap top-full mt-1 left-1/2 -translate-x-1/2 rounded-md bg-blue-500 text-white text-xs px-2 py-1
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-md group-hover:delay-200 text-center"
                >
                    {tooltip}
                </span>
            )}

            {open && (
                <div className="absolute top-full mt-1 left-0 z-50 bg-slate-800 border border-slate-700 rounded-md shadow-xl
                    min-w-[140px] py-1 overflow-hidden"
                >
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.value}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                onFormat(lang.value);
                                setOpen(false);
                            }}
                            className="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}