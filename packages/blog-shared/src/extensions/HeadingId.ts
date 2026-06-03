import { Extension } from "@tiptap/core";

/**
 * Adds an `id` attribute to heading nodes so they render
 * `<h1 id="...">` in the DOM. The id value is kept in sync with the
 * heading text by BlogContent (see syncHeadings), which lets the table
 * of contents navigate to a heading via getElementById + scrollIntoView.
 */
export const HeadingId = Extension.create({
    name: "headingId",

    addGlobalAttributes() {
        return [
            {
                types: ["heading"],
                attributes: {
                    id: {
                        default: null,
                        parseHTML: (element) => element.getAttribute("id"),
                        renderHTML: (attributes) => {
                            if (!attributes.id) return {};
                            return { id: attributes.id };
                        },
                    },
                },
            },
        ];
    },
});
