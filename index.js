const {ApolloServer} = require('apollo-server');
const {Prisma} = require('./prisma-client/generated/prisma-client');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const {decodedToken} = require('./auth/authenticate');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({
    //store prisma in context to use prisma in resolvers
    prisma: new Prisma({
      secret: process.env.SECRET,
      endpoint: process.env.PRISMA,
    }),
    //necessary to get user token from header
    req,
    decodedToken
  }),
  introspection: true,
  playground: true,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test

if (process.env.NODE_ENV !== 'testing') {
  server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    console.log(`Server ready at ${url}`);
  });
}

// export all the important pieces for integration/e2e tests to use
module.exports = {
  // dataSources,
  // context,
  typeDefs,
  resolvers,
  ApolloServer,
  // LaunchAPI,
  // UserAPI,
  // store,
  server,
};
