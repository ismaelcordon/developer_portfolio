import type { APIRoute } from "astro";

// Sitemap generado en el servidor: incluye las rutas estáticas y, dinámicamente,
// cada post del blog en sus dos idiomas (con alternates hreflang y lastmod).
export const prerender = false;

const BASE_URL = import.meta.env.SERVER_BASE_URL;
const API_KEY = import.meta.env.PORTFOLIO_API_KEY;

interface ApiListPost {
    slug: string;
    published_at: string;
}

const xmlEscape = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Bloque <url> con sus alternates es/en/x-default. */
const urlEntry = (
    site: string,
    path: (lang: string) => string,
    loc: string,
    lastmod?: string,
) => {
    const alts = ["es", "en"]
        .map(
            (l) =>
                `    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(site + path(l))}"/>`,
        )
        .join("\n");
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>${lastmod ? `\n    <lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(site + path("es"))}"/>
  </url>`;
};

export const GET: APIRoute = async ({ site }) => {
    const SITE = (site?.href ?? "https://ismaelcordon.com/").replace(/\/$/, "");

    let posts: ApiListPost[] = [];
    try {
        const res = await fetch(`${BASE_URL}/posts?language=es`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            const json = await res.json();
            posts = json.data?.data ?? [];
        }
    } catch (e) {
        console.error("Sitemap: failed to fetch posts:", e);
    }

    const entries: string[] = [
        // Home (one-page).
        `  <url>\n    <loc>${SITE}/</loc>\n  </url>`,
        // Lista del blog (es/en).
        urlEntry(SITE, (l) => `/${l}/blog`, `${SITE}/es/blog`),
        urlEntry(SITE, (l) => `/${l}/blog`, `${SITE}/en/blog`),
    ];

    for (const post of posts) {
        const path = (l: string) => `/${l}/blog/${post.slug}`;
        entries.push(
            urlEntry(
                SITE,
                path,
                `${SITE}/es/blog/${post.slug}`,
                post.published_at,
            ),
            urlEntry(
                SITE,
                path,
                `${SITE}/en/blog/${post.slug}`,
                post.published_at,
            ),
        );
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
