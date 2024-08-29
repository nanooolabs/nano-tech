export const SCHEMA__Nav = [
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Starters",
    url: "/starters",
  },
  {
    title: "About Mosibello",
    url: "/about",
  },
  {
    title: "Resource Library",
    url: "/blog",
  },
  // {
  //   title: "Modern Web",
  //   url: "/category/budgeting",
  // },
  // {
  //   title: "About",
  //   url: "/category/side-hustles",
  // },
  // {
  //   title: "Blog",
  //   url: "/category/career",
  // },
  // {
  //   title: "Investing",
  //   url: "/category/investing",
  // },
  // {
  //   title: "Credit",
  //   url: "/category/credit",
  // },
  // {
  //   title: "Debt",
  //   url: "/category/debt",
  // },
];

export const SCHEMA__SiteData = {
  title: "The Small Budget",
  url: "https://thesmallbudget.com",
};

export const SCHEMA__ContactForm = [
  {
    name: `first_name`,
    label: `First Name`,
    placeholder: `First Name`,
    width: 50,
    type: "text",
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `last_name`,
    label: `Last Name`,
    placeholder: `Last Name`,
    width: 50,
    type: "text",
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `email`,
    label: `Email Address`,
    placeholder: `Email Address`,
    width: 100,
    type: "email",
    required: {
      value: true,
      message: `Must enter a valid email`,
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: `Must enter a valid email`,
    },
  },
  {
    name: `message`,
    label: `Message`,
    placeholder: ``,
    width: 100,
    type: "textarea",
    required: {
      value: true,
      message: `This field is required`,
    },
  },
];
