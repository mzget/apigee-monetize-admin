import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

const PostList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="displayName" />
      <DateField source="name" />
      <TextField source="description" />
      <BooleanField source="published" />
    </Datagrid>
  </List>
);
export default PostList;
