import { Layout } from "react-admin";
import { Menu } from "./Menu";

const CustomLayout = (props: any) => <Layout {...props} menu={Menu} />;
export default CustomLayout;
