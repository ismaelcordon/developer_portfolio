import { SPRITE_URL } from "../../constants/paths";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const VISIBLE_PAGES = 5;

const baseButton =
    "min-w-10 h-10 px-3 inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 cursor-pointer";
const activeStyles = "bg-blue-600 text-white";
const inactiveStyles =
    "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
const disabledStyles =
    "opacity-40 cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800";

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const numberedPages = Array.from(
        { length: Math.min(VISIBLE_PAGES, totalPages) },
        (_, i) => i + 1,
    );
    const showOverflow = totalPages > VISIBLE_PAGES + 1;

    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;

    return (
        <nav
            className="flex items-center justify-center gap-2 mt-12"
            aria-label="Pagination"
        >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isFirst}
                className={`${baseButton} ${inactiveStyles} ${
                    isFirst ? disabledStyles : ""
                }`}
                aria-label="Previous page"
            >
                <svg className="w-4 h-4">
                    <use href={`${SPRITE_URL}#chevron-left-icon`} />
                </svg>
            </button>

            {numberedPages.map((page) => {
                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`${baseButton} ${
                            isActive ? activeStyles : inactiveStyles
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {page}
                    </button>
                );
            })}

            {showOverflow && (
                <>
                    <span
                        className="px-1 text-slate-400 dark:text-slate-500 select-none"
                        aria-hidden="true"
                    >
                        ...
                    </span>
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className={`${baseButton} ${
                            currentPage === totalPages
                                ? activeStyles
                                : inactiveStyles
                        }`}
                        aria-label={`Go to page ${totalPages}`}
                        aria-current={
                            currentPage === totalPages ? "page" : undefined
                        }
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isLast}
                className={`${baseButton} ${inactiveStyles} ${
                    isLast ? disabledStyles : ""
                }`}
                aria-label="Next page"
            >
                <svg className="w-4 h-4">
                    <use href={`${SPRITE_URL}#chevron-right-icon`} />
                </svg>
            </button>
        </nav>
    );
}
