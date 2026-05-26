import { BlogTag } from "../types/BlogTag";

export const tagConfig: Record<BlogTag, { classes: string }> = {
    Android: {
        classes:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    iOS: {
        classes:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    AI: {
        classes:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    },
    "Dev life": {
        classes:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
    Community: {
        classes:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
};
