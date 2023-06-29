import * as X from "@bluelibs/x-bundle";
import { IGraphQLContext, IResolverMap } from "@bluelibs/graphql-bundle";

import { UserService } from "../../../services/User.service";

export default {
  Query: {
    getUsersWithBooks: [
      X.CheckLoggedIn(),

      async (_: any, _2: any, ctx: IGraphQLContext, ast: any) => {
        console.log(ctx.userId);
      },
      
      X.ToService(UserService, "getUsersWithBooks", (_, ctx) => { 
        console.log("Andknjknkj", ctx.userId)
        return [ctx.userId]
      }),
    ],
  },
} as IResolverMap;
