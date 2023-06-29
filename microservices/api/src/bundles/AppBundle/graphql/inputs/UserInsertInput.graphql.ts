export default /* GraphQL */ `
  input UserInsertInput {
    BooksIds: [ObjectId]!
    isEnabled: Boolean!
    profile: UserProfileInput!
    roles: [UserRole]!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
