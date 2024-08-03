import { Groups } from "@/sanity/utils/Constants";
import { isUniqueAcrossAllDocuments } from "@/sanity/utils/Helpers";
import { defineField, defineType, defineArrayMember } from "sanity";

export const Page = {
  name: "page",
  title: "Pages",
  type: "document",
  groups: Groups,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.warning("Page title is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.warning("Meta title is required"),
    },
    {
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      rows: 2,
      group: "seo",
      validation: (rule) => rule.warning("Meta description is required"),
    },
    {
      name: "seo_no_index",
      title: "Do not index this page",
      description:
        "If checked, this content won't be indexed by search engines.",
      type: "boolean",
      group: "seo",
      initialValue: () => false,
    },
    {
      name: "featured_image",
      title: "Featured Image",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    defineField({
      name: "page_builder",
      title: "Page Builder",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          name: "HeroVariant01",
          type: "HeroVariant01",
        }),
        defineArrayMember({
          name: "HeroVariant02",
          type: "HeroVariant02",
        }),
        defineArrayMember({
          name: "FeatureVariant01",
          type: "FeatureVariant01",
        }),
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "hero",
              title: "Hero",
              of: ["HeroVariant01", "HeroVariant02"],
            },
            {
              name: "feature",
              title: "Feature",
              of: ["FeatureVariant01"],
            },
          ],
        },
      },
    }),
  ],
};

export default Page;
