import { Groups } from "@/sanity/utils/constants";
import { isUniqueAcrossAllDocuments } from "@/sanity/utils/helpers";
import { defineField, defineArrayMember } from "sanity";
import { createDocumentArray } from "@/sanity/utils/helpers";
import pageBuilderBlocks from "../blocks";

export const Post = {
  name: "post",
  title: "Post",
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
      name: "publishDate",
      type: "date",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "",
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
    // defineField({
    //   name: "page_builder",
    //   title: "Page Builder",
    //   type: "array",
    //   group: "content",
    //   of: createDocumentArray(pageBuilderBlocks),
    //   options: {
    //     insertMenu: {
    //       groups: [
    //         {
    //           name: "hero",
    //           title: "Hero",
    //           of: pageBuilderBlocks
    //             .filter((elem) => elem._menuCategory === "hero")
    //             ?.map((elem) => elem.name),
    //         },
    //         {
    //           name: "feature",
    //           title: "Feature",
    //           of: pageBuilderBlocks
    //             .filter((elem) => elem._menuCategory === "feature")
    //             ?.map((elem) => elem.name),
    //         },
    //         {
    //           name: "content",
    //           title: "Content",
    //           of: pageBuilderBlocks
    //             .filter((elem) => elem._menuCategory === "content")
    //             ?.map((elem) => elem.name),
    //         },
    //         {
    //           name: "faq",
    //           title: "FAQs",
    //           of: pageBuilderBlocks
    //             .filter((elem) => elem._menuCategory === "faq")
    //             ?.map((elem) => elem.name),
    //         },
    //       ],
    //     },
    //   },
    // }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      featured_image: "featured_image",
    },
    prepare(selection) {
      const { title, slug, featured_image } = selection;
      return {
        title,
        subtitle: slug && (slug === "index" ? "/" : `/${slug}`),
        media: featured_image,
      };
    },
  },
};

export default Post;
