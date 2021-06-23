import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Loading } from "react-admin";

import { RATEPLAN_QUERY } from "common/query";
import { RatePlan } from "libs/graphql.schema";
import RatePlanTable from "../components/RatePlanTable";

const RatePlanPage = (props: any) => {
  const { loading, error, data } =
    useQuery<{ ratePlans: RatePlan[] }>(RATEPLAN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      {!data ? <Loading /> : <RatePlanTable rows={data.ratePlans} />}
    </Fragment>
  );
};
export default RatePlanPage;
