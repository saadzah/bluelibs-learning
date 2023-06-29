import { gql } from "@apollo/client";

export const FRAMEWORK_QUERY = gql`
  query UserGet{
    UsersFind {
      _id
      fullName,
      roles,
      Books {
        name
      }
    }
  }
`;
