import { ApolloServer } from 'apollo-server';
import { schema as typeDefs } from './schema/index.js';
import { resolvers } from './schema/resolvers.js';
import { MovieAPI } from './api/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
  dataSources: () => ({
    movieAPI: new MovieAPI(),
  }),
});

server.listen(process.env.PORT || 5000).then(({ url, port }) => {
  console.log(`🚀  Server ready at ${url} and port ${port}`);
});
