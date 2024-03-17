const { GraphQLString } = require('graphql');
const { User, Post } = require('../models');
const { createJwtToken } = require('../util/auth.js');
const { PostType } = require('./typedef.js');

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

const login = {
    type: GraphQLString,
    description: 'Login and return a JWT token',
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    resolve: async (_, args) => {
        const user = await User.findOne({ email: args.email }).select('+password')
        if (!user || args.password !== user.password) throw new Error('Invalid credentials');

        const token = createJwtToken({ _id: user._id, username: user.username, email: user.email, displayName: user.displayName })

        return token;
    }
}

const createPost = {
    type: PostType,
    description: 'Create a new post',
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    resolve: async (_, args, { verifyUser }) => {
        console.log(verifyUser)
        const post = new Post({ title: args.title, body: args.body, authorID: verifyUser._id });

        return post
    }
}

module.exports = {
    register, login, createPost
}
