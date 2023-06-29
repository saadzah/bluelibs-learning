import { app, collection, field, relation, shortcuts, faker } from "../utils";
import { Users } from "./Users";

export const Books = collection({
  id: "Books",
  representedBy: "name",
  behaviors: {
    softdeletable: true,
  },
  ui: {
    create: false,
    delete: false,
    edit: false
  },
  mock: {
    count: 10,
  },
  fields: [
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "name",
      type: field.types.STRING,
    }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
  ],
});
