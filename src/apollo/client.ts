import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const link = new HttpLink({
    uri: "http://localhost:8011/proxy/graphql",
    fetch,
  });
  
