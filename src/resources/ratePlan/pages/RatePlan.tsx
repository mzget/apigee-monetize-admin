import {} from "generated/graphql";
import { Fragment } from "react";
import { Loading } from "react-admin";
import { useQuery } from "react-query";

import { RATEPLAN_QUERY } from "common/query";
import { RatePlanType } from "generated/graphql";
import RatePlanTable from "../components/RatePlanTable";
import client from "libs/graphqlClient";

function useRatePlans() {
  return useQuery("ratePlans", async () => {
    const { ratePlans } = await client.request(RATEPLAN_QUERY, {
      page: 1,
      size: 10,
    });

    return ratePlans;
  });
}

const RatePlanPage = (props: any) => {
  const { status, data, error, isFetching } = useRatePlans();

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      {!data ? <Loading /> : <RatePlanTable rows={data.data} />}
    </Fragment>
  );
};
export default RatePlanPage;
