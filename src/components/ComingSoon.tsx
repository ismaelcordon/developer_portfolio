import { SPRITE_URL } from "../constants/paths";

export function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-32 text-center">
            <div className="relative">
                <svg className="w-14 h-14 text-slate-300 dark:text-slate-600">
                    <use href={`${SPRITE_URL}#terminal-icon`} />
                </svg>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Coming Soon
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                    Posts are on their way. Check back soon!
                </p>
            </div>
        </div>
    );
}
