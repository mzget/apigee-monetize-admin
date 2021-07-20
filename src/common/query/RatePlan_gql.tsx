import {  gql } from "graphql-request";

export const RATEPLAN_QUERY = gql`
  query ratePlans($page: Int!, $size: Int!){
    ratePlans(page: $page, size: $size) {
      data {
        id
        name
        displayName
        startDate
        type
        isPrivate
        published
        ratePlanDetails {
          id
        }
        monetizationPackage {
          id
        }
      }
      total
    }
  }
`;

export const FIND_ONE_RATEPLAN = gql`
  query FIND_ONE_RATEPLAN($package_id: String!, $plan_id: String!) {
    ratePlan(package_id: $package_id, plan_id: $plan_id) {
      id
      name
      startDate
      type
      currency {
        id
      }
      monetizationPackage {
        id
      }
      published
      ratePlanDetails {
        id
        paymentDueDays
        ratingParameter
        type
        meteringType
        ratePlanRates {
          id
          rate
          startUnit
          type
        }
        freemiumUnit
        freemiumDuration
        freemiumDurationType
        duration
        durationType
      }
    }
  }
`;
