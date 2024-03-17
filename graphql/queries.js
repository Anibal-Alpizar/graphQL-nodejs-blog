const { GraphQLList, GraphQLID } = require('graphql')
const { UserType } = require('./typedef')
const { User } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Get all users',
    resolve: () => {
        return User.find()
    }
}

const user = {
    type: UserType,
    description: 'Get a user by id',
    args: {
        id: { type: GraphQLID },
    },
    resolve: (_, args) => {
        return User.findById(args.id)

    }
}

module.exports = {
    users,
    user
}