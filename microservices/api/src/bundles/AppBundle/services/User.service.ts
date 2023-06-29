import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/mongo-bundle";
import { UsersCollection } from "../collections";

@Service()
export class UserService {
  @Inject(() => UsersCollection)
  public collection: UsersCollection;

  constructor(
    protected readonly container: ContainerInstance,
    protected readonly eventManager: EventManager,
  ) {

  }

  public async getUsersWithBooks(userId: ObjectId) {
    console.log(userId)
    return await this.collection.aggregate([
      {
        $lookup:
         {
            from: "books",
            localField: "BooksIds",
            foreignField: "_id",
            as: "Books"
        }
      }
    ]).next();
  }
}
