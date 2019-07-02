import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "config",
  "landingPage"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Config")
        .child(
          S.editor()
            .id('config')
            .schemaType("config")
            .documentId("global-config")
        ),
      S.listItem()
        .title("Landing page")
        .child(
          S.editor()
            .id('landingPage')
            .schemaType("landingPage")
            .documentId("landing-page")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
