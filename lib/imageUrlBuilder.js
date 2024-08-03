import imageUrlBuilder from "@sanity/image-url";
import ClientConfig from "@/sanity/config/ClientConfig";

const builder = imageUrlBuilder(ClientConfig);

const urlFor = (source) => {
  return builder.image(source);
};

export default urlFor;
