import { HeaderNavI } from "types";
import NavView from "./navView";

const Nav = (props: HeaderNavI) => {
  return <NavView {...props} />;
};

export default Nav;
