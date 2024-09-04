import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    { name: "general", title: "General", default: true },
    { name: "navigation", title: "Navigation" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        collapsable: true,
        collapsed: true,
      },
      group: "general",
    }),
    defineField({
      name: "ogimage",
      title: "Open Graph Image (Site-wide)",
      description:
        "Used for social sharing previews. Set page-specific images in Page documents.",
      type: "image",
      group: "general",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Site settings",
    }),
  },
});
