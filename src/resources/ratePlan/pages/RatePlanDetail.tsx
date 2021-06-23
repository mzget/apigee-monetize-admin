import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { Loading } from "react-admin";
import { FIND_ONE_RATEPLAN } from "common/query";
import { RatePlan } from "libs/graphql.schema";
import RatePlanDetail from "../components/RatePlanDetail";

export default function RatePlanDetailPage() {
  const { loading, error, data } = useQuery<{ ratePlan: RatePlan }>(
    FIND_ONE_RATEPLAN,
    {
      variables: {
        package_id: "manage-bundle-by-api-7rsc",
        plan_id: "manage-bundle-by-api-7rsc_ratecard_by_api",
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <Fragment>{!data ? <Loading /> : <RatePlanDetail data={data} />}</Fragment>
  );
}
