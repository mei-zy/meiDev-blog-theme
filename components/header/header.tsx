import { useState } from "react";
import HeaderView from "./headerView";

const Header = () => {
  const [mobileIsOpenModal, setMobileIsOpenModal] = useState(false);

  const onClickModal = () => {
    setMobileIsOpenModal(!mobileIsOpenModal);
  };

  const props = {
    mobileIsOpenModal,
    onClickModal,
  };

  return <HeaderView {...props} />;
};

export default Header;
