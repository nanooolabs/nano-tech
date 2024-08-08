import parse from "html-react-parser";

const PortableTextComponents = {
  types: {
    code: ({ value }) => {
      return <>{value && value.code && parse(value.code)}</>;
    },
  },
};

export default PortableTextComponents;
