import * as React from "react";
import { DashboardMenuItem, MenuItemLink } from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PeopleIcon from "@material-ui/icons/People";
import LabelIcon from "@material-ui/icons/Label";

export const Menu = () => (
  <div>
    {/* <DashboardMenuItem /> */}
    <MenuItemLink
      to="/rateplan"
      primaryText="RatePlan"
      leftIcon={<BookIcon />}
    />
    {/* <MenuItemLink
      to="/comments"
      primaryText="Comments"
      leftIcon={<ChatBubbleIcon />}
    />
    <MenuItemLink to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
    <MenuItemLink
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    /> */}
  </div>
);
