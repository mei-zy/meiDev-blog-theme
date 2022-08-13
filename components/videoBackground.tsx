import styled from "styled-components";

const StyledVideoBackground = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  video {
    z-index: -1;
    width: 100vw;
  }

  @media screen and (max-aspect-ratio: 1219/685) {
    video {
      width: auto;
      height: 100vh;
    }
  }
`;

const VideoBackground = () => {
  return (
    <StyledVideoBackground>
      <video muted autoPlay loop>
        <source src="/movies/intro.mp4" />
      </video>
    </StyledVideoBackground>
  );
};
export default VideoBackground;
