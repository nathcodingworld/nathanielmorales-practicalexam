import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode, useContext } from "react";
import { AdminContext } from "./StateProvider";

interface providerType {
  children: ReactNode;
}

const ServerProvider: React.FC<providerType> = ({ children }) => {
  const token = useContext(AdminContext).admin.token;

  const client = new ApolloClient({
    uri: "localhost:5000/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ServerProvider;
