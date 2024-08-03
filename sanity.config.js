import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Mosibello Studio",
  projectId: "nqj5p7gd",
  dataset: "production",
  basePath: "/studio",
  apiVersion: "2024-07-31",
  useCdn: false,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
