import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import schemaTypes from "@/sanity/schemaTypes";
import clientConfig from "./sanity/config/clientConfig";
import { baseUrl } from "./lib/constants";
import { locations } from "./sanity/utils/presentation";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "default",
  title: "Mosibello Studio",
  basePath: "/studio",
  ...clientConfig,
  plugins: [
    structureTool(),
    presentationTool({
      name: "editor",
      title: "Editor",
      previewUrl: {
        draftMode: {
          enable: `${baseUrl}/api/draft`,
        },
      },
      resolve: { locations },
    }),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});
