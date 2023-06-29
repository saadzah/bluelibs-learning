import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/mongo-bundle";
import { pipeline } from "stream";
import { BooksCollection } from "../collections";

@Service()
export class BooksService {
  @Inject(() => BooksCollection)
  public collection: BooksCollection;

  constructor() {
  }

  public getBooksById(_id: ObjectId) {
    return this.collection.queryOne({
      $: { filters: { _id } },
      ...this.getBookRequestBody(),
    });
  }

  public getBookRequestBody() {
    return {
      _id: 1,
      name: 1,
    };
  }
}
