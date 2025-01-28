import { projectId } from "@/lib/constants";

const clientConfig = {
  projectId: projectId,
  dataset: "production",
  useCdn: false,
  apiVersion: '2023-08-01's,
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
};

export default clientConfig;
