const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const UserType = new GraphQLObjectType({
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

const PostType = new GraphQLObjectType({
    name: 'PostType',
    description: 'Post type definition',
    fields: {
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        },
        authorID: {
            type: GraphQLID
        },
    }
})

module.exports = {
    UserType, PostType
}