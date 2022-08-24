import React from "react";
import { StyledFooter } from "./footerStyled";

const FooterView = () => {
  return (
    <StyledFooter>
      <div>
        <span className="weight-bold">ⓒ mei</span>
        <span>, developed by Next.js in 2022</span>
      </div>
    </StyledFooter>
  );
};

export default FooterView;
