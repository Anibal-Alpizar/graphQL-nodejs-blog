const { GraphQLString } = require('graphql');
const { User } = require('../models');
const { createJwtToken } = require('../util/auth.js');

const register = {
    type: GraphQLString,
    description: 'Register a new user and return a JWT token',
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    resolve: async (_, args) => {
        const { username, password, email, displayName } = args;
        const user = User({ username, password, email, displayName });
        await user.save();

        const token = createJwtToken({ _id: user._id, username: user.username, email: user.email, displayName: user.displayName });

        return token;
    }
}

module.exports = {
    register
}
