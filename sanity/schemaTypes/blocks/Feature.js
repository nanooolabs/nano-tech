import { defineField, defineType, defineArrayMember } from "sanity";

const category = "feature";

export const FeatureVariant01 = defineType({
  name: "FeatureVariant01",
  title: "Feature Variant 01",
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
      name: "align_items_center",
      title: "Align Items Center",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "invert_order",
      title: "Invert Order",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "text",
      initialValue: "Section Label",
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      initialValue: "Powerful Section Heading to Insure Readability",
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
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
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Feature Variant 01",
      };
    },
  },
});

export const FeatureVariant02 = defineType({
  name: "FeatureVariant02",
  title: "Feature Variant 02",
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
      name: "justify_content",
      title: "Justify Content",
      type: "string",
      initialValue: "start",
      group: "content",
      options: {
        list: [
          { title: "Start", value: "start" },
          { title: "Center", value: "center" },
        ],
      },
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            }),
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              initialValue: "Card Heading",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              initialValue:
                "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
              rows: 2,
            }),
            defineField({
              name: "button_title",
              title: "Button Title",
              type: "string",
              initialValue: "Learn More",
            }),
            defineField({
              name: "button_destination",
              title: "Button Destination",
              type: "string",
            }),
          ],
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
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Feature Variant 02",
      };
    },
  },
});
