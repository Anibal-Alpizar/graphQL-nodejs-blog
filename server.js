const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const connectDB = require('./db');
const { authenticate } = require('./middlewares/auth.js');

connectDB();
const app = express();

app.use(authenticate);

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
})