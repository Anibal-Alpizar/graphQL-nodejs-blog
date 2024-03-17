const { GraphQLList } = require('graphql')
const { userType } = require('./typedef')
const { User } = require('../models')

const users = {
    type: new GraphQLList(userType),
    description: 'Get all users',
    resolve: () => {
        return User.find()
    }
}

module.exports = {
    users
}