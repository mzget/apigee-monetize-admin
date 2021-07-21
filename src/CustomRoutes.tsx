import * as React from "react";
import { Route } from "react-router-dom";

import RatePlanPage from "resources/ratePlan/pages/RatePlan";
import RatePlanDetail from "resources/ratePlan/pages/RatePlanDetail";

const CustomRoutes = [
  <Route exact path="/rateplan" component={RatePlanPage} />,
  <Route
    path="/package/:package_id/rateplan/:plan_id"
    component={RatePlanDetail}
  />,
];

export default CustomRoutes;
