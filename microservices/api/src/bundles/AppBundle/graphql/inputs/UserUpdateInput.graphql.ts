export default /* GraphQL */ `
  input UserUpdateInput {
    BooksIds: [ObjectId]
    isEnabled: Boolean
    profile: UserProfileInput
    roles: [UserRole]
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
