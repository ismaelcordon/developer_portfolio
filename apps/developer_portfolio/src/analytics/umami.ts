export type ResumeLocation = "home" | "experience";
export type OutboundTarget = "github" | "linkedin";
export type BlogViewTrigger = "click" | "direct";

function track(event: string, data?: Record<string, unknown>) {
    if (
        typeof window != "undefined" &&
        typeof window.umami?.track == "function"
    ) {
        window.umami.track(event, data);
    }
}

export function trackResumeDownloadClick(location: ResumeLocation) {
    track("download_resume_click", { location });
}

export function trackOutboundClick(outboundTarget: OutboundTarget) {
    track("outbound_click", { outboundTarget });
}

export function trackLanguageChange(languageCode: string) {
    track("language_change", { languageCode });
}

export function trackThemeChange(theme: string) {
    track("theme_change", { theme });
}

export function trackProjectSourCodeClick(project: string) {
    track("project_source_code_click", {
        project,
    });
}

export function trackSendContactClick() {
    track("send_contact_click");
}

export function trackBlogPostView(slug: string, trigger: BlogViewTrigger) {
    track("blog_post_view", { slug, trigger });
}
