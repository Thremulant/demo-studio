import { defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "target",
      title: "Target",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "icon",
      title: "Icon",
      type: "lucide-icon",
    },
  ],
});
