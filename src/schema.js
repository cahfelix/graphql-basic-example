import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type Knowledge {
        language: String
        frameworks: [String]
    }

    type User {
        id: ID!
        name: String!
        full_name: String
        age: Int
        city: String
        tag: String
        url: String
        knowledge: [Knowledge]
    }

    type Query {
        user(id: Int!): User!
        allUsers: [User!]!
        totalUsers: Int!
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})