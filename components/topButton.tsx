import Image from "next/image";
import styled from "styled-components";

const StyledTopButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #524c42;
  font-size: 14px;
  padding: 8px;
  position: fixed;
  right: 40px;
  bottom: 30px;
`;

const TopButton = () => {
  const onMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledTopButton onClick={onMoveTop}>
      <Image
        src="/images/arrow.svg"
        alt="top"
        width="23px"
        height="23px"
      ></Image>
      <div>TOP</div>
    </StyledTopButton>
  );
};

export default TopButton;
