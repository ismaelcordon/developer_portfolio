import "../../i18n";
import { SettingsProvider } from "../../contexts/SettingsContext";
import BlogPage from "./BlogPage";
import { Post } from "../../models/Post";

interface BlogPageIslandProps {
    lang: "es" | "en";
    initialPosts?: Post[];
}

/**
 * Island raíz para la ruta /[lang]/blog.
 * Aporta el SettingsProvider (tema dark/light) e inicializa i18n para que
 * BlogPage y sus hijos funcionen como componente autónomo fuera del SPA.
 */
export default function BlogPageIsland({
    lang,
    initialPosts,
}: BlogPageIslandProps) {
    return (
        <SettingsProvider initialLanguage={lang}>
            <BlogPage lang={lang} initialPosts={initialPosts} />
        </SettingsProvider>
    );
}
