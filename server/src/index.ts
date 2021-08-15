import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PersonResolver } from "./resolvers/person.resolver";
import { buildSchema } from "type-graphql";
import Container from "typedi";

async function main() {
  const schema = await buildSchema({
    resolvers: [PersonResolver],
    container: Container,
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

main();
