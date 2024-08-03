import { defineField, defineType } from "sanity";

const category = "hero";

export const HeroVariant01 = defineType({
  name: "HeroVariant01",
  title: "Hero Variant 01",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  fields: [
    defineField({
      name: "scoped_css",
      title: "Scoped CSS",
      type: "text",
      rows: 4,
      group: "style",
      initialValue: `padding: 64px 0;`,
    }),
    defineField({
      name: "block_category",
      title: "Block Category",
      type: "string",
      initialValue: category,
      group: "content",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "enable_blobs",
      title: "Enable Blobs",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "align_left",
      title: "Align Left",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Powerful Section Heading to Insure Readability",
      group: "content",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      initialValue: `consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "button_title",
      title: "Button Title",
      type: "string",
      initialValue: "Learn More",
      group: "content",
    }),
    defineField({
      name: "button_destination",
      title: "Button Destination",
      type: "string",
      group: "content",
    }),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Hero Variant 01",
      };
    },
  },
});

export const HeroVariant02 = defineType({
  name: "HeroVariant02",
  title: "Hero Variant 02",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  fields: [
    defineField({
      name: "block_category",
      title: "Block Category",
      type: "string",
      initialValue: category,
      group: "content",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "scoped_css",
      title: "Scoped CSS",
      type: "text",
      rows: 4,
      group: "style",
      initialValue: `padding: 64px 0;`,
    }),
    defineField({
      name: "enable_blobs",
      title: "Enable Blobs",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "align_items_center",
      title: "Align Items Center",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "Section Label",
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Powerful Section Heading to Insure Readability",
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      initialValue: `consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "button_title",
      title: "Button Title",
      type: "string",
      initialValue: "Learn More",
      group: "content",
    }),
    defineField({
      name: "button_destination",
      title: "Button Destination",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;
      console.log(selection);
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Hero Variant 02",
      };
    },
  },
});
