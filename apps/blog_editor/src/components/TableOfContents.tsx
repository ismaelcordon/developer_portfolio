import type { TocHeading } from "@ismael-cordon/blog-shared";

interface TableOfContentsProps {
    headings: TocHeading[];
}

const INDENT: Record<number, string> = {
    1: "pl-3",
    2: "pl-6",
    3: "pl-9",
};

export function TableOfContents({ headings }: TableOfContentsProps) {
    if (headings.length === 0) {
        return (
            <p className="px-4 py-3 text-s text-slate-600 italic">
                No hay encabezados todavía.
            </p>
        );
    }

    return (
        <nav className="flex-1 min-h-0 overflow-y-auto custom-scrollbar gap-0.5 p-3">
            {headings.map((heading, index) => (
                <a
                    key={`${heading.id}-${index}`}
                    href={`#${heading.id}`}
                    className={`
                        ${INDENT[heading.level]}
                        block text-s py-1 px-2 rounded
                        text-slate-400 hover:text-slate-100 hover:bg-slate-800
                        transition-colors truncate
                        ${heading.level === 1 ? "font-semibold text-slate-300" : ""}
                    `}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(heading.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                >
                    {heading.text}
                </a>
            ))}
        </nav>
    );
}
