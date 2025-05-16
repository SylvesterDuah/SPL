import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"; 
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8011/proxy/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});
