import { defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "customer",
      title: "Customer",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
});
