import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
  fetchOptions: {
    mode: "cors",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  connectToDevTools: true,
});

export default client;
