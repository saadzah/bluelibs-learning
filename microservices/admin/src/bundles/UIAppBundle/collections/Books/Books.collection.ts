import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Book } from "@root/api.types";
import { UsersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Book };

export class BooksCollection extends Collection<Book> {
  getName() {
    return "Books";
  }

  getInputs() {
    return {
      insert: "BookInsertInput!",
      update: "BookUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Book>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Book> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
