export const scopedCss = {
  name: "scoped_css",
  title: "Scoped CSS",
  type: "code",
  options: {
    language: "scss",
    languageAlternatives: [{ title: "SCSS", value: "scss" }],
  },
  group: "style",
};

export const generateHeadingTagField = (name, title) => {
  return {
    name,
    title,
    type: "string",
    group: "content",
    options: {
      list: [
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "P", value: "p" },
        { title: "Span", value: "span" },
      ],
    },
  };
};

export const generateHeadingSizeField = (name, title) => {
  return {
    name,
    title,
    type: "string",
    group: "content",
    options: {
      list: [
        { title: "D1", value: "d1" },
        { title: "D2", value: "d2" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
      ],
    },
  };
};
