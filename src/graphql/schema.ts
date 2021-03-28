import gql from 'graphql-tag'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from '~/graphql/resolvers'

export const typeDefs = gql`
type System {
  region: String!
  constellation: String!
  name: String!
  id: ID!
}

type Query {
  getAllSystems(): [System!]!
  getSystemByName(name: String!): System!
}`

export default makeExecutableSchema({ typeDefs, resolvers })
