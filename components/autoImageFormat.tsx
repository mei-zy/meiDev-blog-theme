import Image, { ImageProps } from "next/image";
import styled from "styled-components";

const StyledAutoImageFormat = styled.div`
  width: 100%;
  height: 100%;

  & > span {
    position: unset !important;

    & .autoimage {
      position: relative !important;
      object-fit: cover !important;
      min-width: 0px !important;
      min-height: 0px !important;
      width: 100% !important;
      height: 100% !important;
    }
  }
`;
const AutoImageFormat = ({ ...imageInfo }: ImageProps) => {
  return (
    <StyledAutoImageFormat>
      <Image layout="fill" className="autoimage" {...imageInfo} />
    </StyledAutoImageFormat>
  );
};

export default AutoImageFormat;
