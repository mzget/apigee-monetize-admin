import React, { Fragment } from "react";
import { Loading } from "react-admin";
import { useQuery } from "react-query";
import { request } from "graphql-request";
import { FIND_ONE_RATEPLAN } from "common/query";
import { RatePlanType } from "generated/graphql";
import RatePlanDetail from "../components/RatePlanDetail";
import client from "libs/graphqlClient";

function useRatePlan(package_id:string, plan_id: string) {
  return useQuery(
    ["ratePlan", plan_id],
    async () => {
      const {ratePlan} = await client.request(
        FIND_ONE_RATEPLAN, {
          package_id: package_id, 
          plan_id: plan_id
        }
      );

      console.log(ratePlan);
      return ratePlan;
    },
    {
      enabled: !!plan_id,
    }
  );
}

export default function RatePlanDetailPage() {

  const { status, data, error, isFetching } = useRatePlan(
     "manage-bundle-by-api-7rsc",
     "manage-bundle-by-api-7rsc_ratecard_by_api");


  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <Fragment>{!data ? <Loading /> : <RatePlanDetail data={data} />}</Fragment>
  );
}
