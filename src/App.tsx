import React, { useEffect, useState } from "react";
import { Admin, fetchUtils, Loading, Resource } from "react-admin";
import { ApolloProvider } from "@apollo/client";
import simpleRestProvider from "ra-data-simple-rest";
import "./App.css";
import graphClient from "libs/graphqlClient";

import Layout from "common/components/Layout";
import CustomRoutes from "./CustomRoutes";

const httpClient = (url: string, options = {}) => {
  return fetchUtils.fetchJson(url, { ...options, mode: "cors" });
};
const dataProvider = simpleRestProvider("http://localhost:3000", httpClient);

function App() {
  return (
    <ApolloProvider client={graphClient}>
      <div className="App">
        <Admin
          dataProvider={dataProvider}
          layout={Layout}
          customRoutes={CustomRoutes}
        >
          <Resource name="rateplan" />
        </Admin>
      </div>
    </ApolloProvider>
  );
}

export default App;
