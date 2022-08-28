import React from "react";
import { StyledMarkdown } from "./markdownStyled";

const Markdown = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>;
};

export default Markdown;
