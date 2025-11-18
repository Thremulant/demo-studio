import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { button } from "./button";
import { work } from "./work";
import { services } from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, button, services, work],
};
