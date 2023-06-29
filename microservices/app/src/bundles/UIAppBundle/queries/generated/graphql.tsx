import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  EJSON: any;
  JSON: any;
  JSONObject: any;
  ObjectId: any;
  Upload: any;
};

export type Address = {
  __typename?: "Address";
  city: Scalars["String"];
  country: Scalars["String"];
};

export type AddressInput = {
  city: Scalars["String"];
  country: Scalars["String"];
};

export type Book = {
  __typename?: "Book";
  _id?: Maybe<Scalars["ObjectId"]>;
  /** Represents the date when this object was created */
  createdAt: Scalars["Date"];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars["ObjectId"]>;
  name: Scalars["String"];
  /** Represents the last time when the object was updated */
  updatedAt: Scalars["Date"];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars["ObjectId"]>;
};

export type BookInsertInput = {
  name: Scalars["String"];
};

export type BookUpdateInput = {
  name?: Maybe<Scalars["String"]>;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type DocumentUpdateInput = {
  _id: Scalars["ObjectId"];
  modifier: Scalars["EJSON"];
};

export type ForgotPasswordInput = {
  email: Scalars["String"];
};

export type LoginInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  redirectUrl?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  BooksDeleteOne?: Maybe<Scalars["Boolean"]>;
  BooksInsertOne?: Maybe<Book>;
  BooksUpdateOne: Book;
  UsersDeleteOne?: Maybe<Scalars["Boolean"]>;
  UsersInsertOne?: Maybe<User>;
  UsersUpdateOne: User;
  changePassword?: Maybe<Scalars["Boolean"]>;
  forgotPassword?: Maybe<Scalars["Boolean"]>;
  login: LoginResponse;
  logout?: Maybe<Scalars["Boolean"]>;
  register: RegistrationResponse;
  /** This mutation is used to create a new token based on the existing one. Your previous token will no longer be usable. */
  reissueToken: Scalars["String"];
  requestLoginLink: RequestLoginLinkInputResponse;
  resetPassword: ResetPasswordResponse;
  verifyEmail: VerifyEmailResponse;
  verifyMagicCode: VerifyMagicLinkResponse;
};

export type MutationBooksDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationBooksInsertOneArgs = {
  document: BookInsertInput;
};

export type MutationBooksUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: BookUpdateInput;
};

export type MutationUsersDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};

export type MutationUsersUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: UserUpdateInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegistrationInput;
};

export type MutationReissueTokenArgs = {
  token: Scalars["String"];
};

export type MutationRequestLoginLinkArgs = {
  input: RequestLoginLinkInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MutationVerifyMagicCodeArgs = {
  input: VerifyMagicLinkInput;
};

export type Query = {
  __typename?: "Query";
  BooksCount: Scalars["Int"];
  BooksFind: Array<Maybe<Book>>;
  BooksFindOne?: Maybe<Book>;
  UsersCount: Scalars["Int"];
  UsersFind: Array<Maybe<User>>;
  UsersFindOne?: Maybe<User>;
  findBookById: Book;
  framework?: Maybe<Scalars["String"]>;
  getUsersWithBooks: Scalars["JSON"];
  me: User;
};

export type QueryBooksCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryBooksFindArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryBooksFindOneArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryUsersCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryUsersFindArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryUsersFindOneArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryInput = {
  filters?: Maybe<Scalars["EJSON"]>;
  options?: Maybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  limit?: Maybe<Scalars["Int"]>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: Maybe<Scalars["EJSON"]>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["JSON"]>;
};

export type RegistrationInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type RegistrationResponse = {
  __typename?: "RegistrationResponse";
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars["String"]>;
};

export type RequestLoginLinkInput = {
  type?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

export type RequestLoginLinkInputResponse = {
  __typename?: "RequestLoginLinkInputResponse";
  confirmationFormat?: Maybe<Scalars["String"]>;
  magicCodeSent: Scalars["Boolean"];
  method?: Maybe<Scalars["String"]>;
  userId: Scalars["String"];
};

export type ResetPasswordInput = {
  newPassword: Scalars["String"];
  token: Scalars["String"];
  username: Scalars["String"];
};

export type ResetPasswordResponse = {
  __typename?: "ResetPasswordResponse";
  token: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  BooksSubscription?: Maybe<SubscriptionEvent>;
  BooksSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};

export type SubscriptionBooksSubscriptionArgs = {
  body?: Maybe<Scalars["EJSON"]>;
};

export type SubscriptionBooksSubscriptionCountArgs = {
  filters?: Maybe<Scalars["EJSON"]>;
};

export type SubscriptionUsersSubscriptionArgs = {
  body?: Maybe<Scalars["EJSON"]>;
};

export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: Maybe<Scalars["EJSON"]>;
};

export type SubscriptionCountEvent = {
  __typename?: "SubscriptionCountEvent";
  count?: Maybe<Scalars["Int"]>;
};

export type SubscriptionEvent = {
  __typename?: "SubscriptionEvent";
  document?: Maybe<Scalars["EJSON"]>;
  event: SubscriptionEventType;
};

export enum SubscriptionEventType {
  Added = "added",
  Changed = "changed",
  Ready = "ready",
  Removed = "removed",
}

export type User = {
  __typename?: "User";
  Books: Array<Maybe<Book>>;
  BooksIds: Array<Maybe<Scalars["ObjectId"]>>;
  _id?: Maybe<Scalars["ObjectId"]>;
  /** Represents the date when this object was created */
  createdAt: Scalars["Date"];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars["ObjectId"]>;
  email: Scalars["String"];
  fullName: Scalars["String"];
  isEnabled: Scalars["Boolean"];
  profile: UserProfile;
  roles: Array<Maybe<UserRole>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars["Date"];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars["ObjectId"]>;
};

export type UserInsertInput = {
  BooksIds: Array<Maybe<Scalars["ObjectId"]>>;
  isEnabled: Scalars["Boolean"];
  profile: UserProfileInput;
  roles: Array<Maybe<UserRole>>;
};

export type UserProfile = {
  __typename?: "UserProfile";
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type UserProfileInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export enum UserRole {
  Admin = "ADMIN",
  Worker = "WORKER",
}

export type UserUpdateInput = {
  BooksIds?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  profile?: Maybe<UserProfileInput>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type VerifyEmailInput = {
  token: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
};

export type VerifyEmailResponse = {
  __typename?: "VerifyEmailResponse";
  token: Scalars["String"];
};

export type VerifyMagicLinkInput = {
  magicCode: Scalars["String"];
  userId: Scalars["String"];
};

export type VerifyMagicLinkResponse = {
  __typename?: "VerifyMagicLinkResponse";
  redirectUrl?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type UserGetQueryVariables = Exact<{ [key: string]: never }>;

export type UserGetQuery = { __typename?: "Query" } & {
  UsersFind: Array<
    Maybe<
      { __typename?: "User" } & Pick<User, "_id" | "fullName" | "roles"> & {
          Books: Array<Maybe<{ __typename?: "Book" } & Pick<Book, "name">>>;
        }
    >
  >;
};

export const UserGetDocument = gql`
  query UserGet {
    UsersFind {
      _id
      fullName
      roles
      Books {
        name
      }
    }
  }
`;

/**
 * __useUserGetQuery__
 *
 * To run a query within a React component, call `useUserGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGetQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGetQuery(
  baseOptions?: Apollo.QueryHookOptions<UserGetQuery, UserGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserGetQuery, UserGetQueryVariables>(
    UserGetDocument,
    options
  );
}
export function useUserGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserGetQuery, UserGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserGetQuery, UserGetQueryVariables>(
    UserGetDocument,
    options
  );
}
export type UserGetQueryHookResult = ReturnType<typeof useUserGetQuery>;
export type UserGetLazyQueryHookResult = ReturnType<typeof useUserGetLazyQuery>;
export type UserGetQueryResult = Apollo.QueryResult<
  UserGetQuery,
  UserGetQueryVariables
>;
