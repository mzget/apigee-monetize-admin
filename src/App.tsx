import React, { useEffect, useState } from "react";
import { Admin, Loading, Resource } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql-simple";

import "./App.css";
import graphClient from "libs/graphqlClient";
import PostList from "resources/post/PostList";

function App() {
  const [dataProvider, setDataProvider] = useState<any>(undefined);
  useEffect(() => {
    buildGraphQLProvider({ client: graphClient }).then((dataProvider: any) =>
      setDataProvider(dataProvider)
    );
  }, []);

  return (
    <div className="App">
      {!dataProvider ? (
        <Loading
          loadingPrimary="app.page.loading"
          loadingSecondary="app.message.loading"
        />
      ) : (
        <Admin dataProvider={dataProvider}>
          <Resource name="RatePlan" list={PostList} />
        </Admin>
      )}
    </div>
  );
}

export default App;
