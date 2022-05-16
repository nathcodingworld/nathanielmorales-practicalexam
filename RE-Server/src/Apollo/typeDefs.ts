import { gql } from "apollo-server";

const typeDefs = gql`
  type auth {
    token: String!
  }

  type msg {
    message: String!
  }

  type listing {
    id: String
    housename: String
    title: String
    type: String
    location: String
    description: String
    url: String
    ref: String
    bed: Int
    bath: Int
    park: Int
    garden: Int
    price: Int
    date: Int
    pricetag: String
  }

  type Query {
    getlisting(type: String, title: String, location: String, pricetag: String): [listing]
    getonelisting(id: String): listing
  }

  type Mutation {
    login(admin: String!, password: String!): auth!
    addlisting(
      housename: String
      title: String
      type: String
      location: String
      description: String
      url: String
      ref: String
      bed: Int
      bath: Int
      park: Int
      garden: Int
      price: Int
      date: Int
    ): msg!
    updatelisting(id: String!, housename: String, title: String, type: String, location: String, description: String, bed: Int, bath: Int, park: Int, garden: Int, price: Int, date: Int): msg!
    deletelisting(id: String): msg!
  }
`;

export default typeDefs;
