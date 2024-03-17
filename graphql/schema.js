const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { users, user } = require('./queries.js');
const { register, login } = require('./mutations.js');

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        users,
        user
    }
})

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
        register,
        login
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})