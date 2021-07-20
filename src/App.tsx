import React from "react";
import { Admin, fetchUtils, Loading, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Layout from "common/components/Layout";
import CustomRoutes from "./CustomRoutes";

const queryClient = new QueryClient();
const httpClient = (url: string, options = {}) => {
  return fetchUtils.fetchJson(url, { ...options, mode: "cors" });
};
const dataProvider = simpleRestProvider("http://localhost:3000", httpClient);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Admin
          dataProvider={dataProvider}
          layout={Layout}
          customRoutes={CustomRoutes}
        >
          <Resource name="rateplan" />
        </Admin>
      </div>

<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  );
}

export default App;
