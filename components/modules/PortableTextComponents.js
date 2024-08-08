import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const PortableTextComponents = {
  types: {
    code: ({ value }) => {
      return <>{value && value.code && parse(stegaClean(value.code))}</>;
    },
  },
};

export default PortableTextComponents;
