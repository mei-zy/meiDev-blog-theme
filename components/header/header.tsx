import { useState } from "react";
import { ThemePropsI } from "types";
import HeaderView from "./headerView";

const Header = ({ theme, setTheme }: ThemePropsI) => {
  const [mobileIsOpenModal, setMobileIsOpenModal] = useState(false);

  const onClickModal = () => {
    setMobileIsOpenModal(!mobileIsOpenModal);
  };

  const props = {
    theme,
    mobileIsOpenModal,
    setTheme,
    onClickModal,
  };

  return <HeaderView {...props} />;
};

export default Header;
