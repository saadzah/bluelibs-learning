import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { BooksService } from "../../../services/Books.service";

export default {
  Query: {
    findBookById: [
      X.ToService(BooksService, "getBooksById", (_, ctx) => [ctx.userId]),
    ],
  },
} as IResolverMap;
