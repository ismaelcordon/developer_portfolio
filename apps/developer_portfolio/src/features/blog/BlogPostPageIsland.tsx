import "../../i18n";
import { SettingsProvider } from "../../contexts/SettingsContext";
import BlogPostPage from "./BlogPostPage";
import { Post } from "../../models/Post";

interface BlogPostPageIslandProps {
    post: Post;
    lang: "es" | "en";
}

/**
 * Island raíz para la ruta /[lang]/blog/[slug].
 * El post llega ya resuelto desde el servidor (SSR), así que aquí solo
 * aportamos el SettingsProvider e inicializamos i18n.
 */
export default function BlogPostPageIsland({
    post,
    lang,
}: BlogPostPageIslandProps) {
    return (
        <SettingsProvider initialLanguage={lang}>
            <BlogPostPage post={post} lang={lang} />
        </SettingsProvider>
    );
}
