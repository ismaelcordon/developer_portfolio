import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // URL canónica del sitio. Se usa para resolver URLs absolutas (og:image,
    // canonical) y para generar el sitemap.
    site: "https://ismaelcordon.com",
    // Output por defecto (estático): la home se pre-genera y solo las rutas
    // con `export const prerender = false` (el blog) se renderizan on-demand.
    // El adapter de Node es necesario para esas rutas SSR en producción.
    adapter: node({ mode: "standalone" }),
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
