const { GraphQLString } = require('graphql');
const { User } = require('../models');

const register = {
    type: GraphQLString,
    description: 'Register a new user',
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    resolve: async (_, args) => {
        const { username, password, email, displayName } = args;
        const newUser = User({ username, password, email, displayName });
        const user = await newUser.save();
        console.log(user);
        return 'Register a new user';
    }
}

module.exports = {
    register
}
