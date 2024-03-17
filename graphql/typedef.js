const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const userType = new GraphQLObjectType({
    name: 'UserType',
    description: 'User type definition',
    fields: {
        id: {
            type: GraphQLID
        },
        username: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        displayName: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    }
})

module.exports = {
    userType
}