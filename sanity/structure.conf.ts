import type { StructureResolver } from "sanity/structure";
import { Aperture, Briefcase, House } from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("hero")
        .title("Hero")
        .id("hero-section")
        .icon(House),
      S.documentTypeListItem("services")
        .title("Services")
        .id("services-section")
        .icon(Aperture),
      S.documentTypeListItem("work")
        .title("Work")
        .id("work-section")
        .icon(Briefcase),
      S.divider(),
      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     listItem.getId() !== "hero-section" &&
      //     listItem.getId() !== "services-section" &&
      //     listItem.getId() !== "work-section"
      // ),
    ]);
};
