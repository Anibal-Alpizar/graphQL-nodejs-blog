const { GraphQLString } = require('graphql')

const hello = {
    type: GraphQLString,
    description: 'Returns hello world',
    resolve: () => 'Hello, world!'
}

module.exports = {
    hello
}
