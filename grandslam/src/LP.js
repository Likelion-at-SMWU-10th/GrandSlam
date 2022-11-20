import React from "react";
import styled, { css } from "styled-components";

const Club = ({ isPlay, image }) => {
  return (
    <>
      <FlipBox ontouchstart="this.classList.toggle('hover');">
        <Flip>
          <Front>
            <LpFront src={image} alt="front" isPlay={isPlay} />
          </Front>
          <Back>
            <LpBack src="./img/LpBack.svg" alt="back" isPlay={isPlay} />
          </Back>
        </Flip>
      </FlipBox>
    </>
  );
};

const FlipBox = styled.div`
  position: absolute;
  left: 150px;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  &:hover {
    transform: rotateY(0deg);
  }
`;

const Flip = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  text-align: center;
  line-height: 400px;
  transform-style: preserve-3d;
  transition: 0.5s;
  &:hover {
    transform: rotateY(-180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  z-index: 2;
  transform: rotateY(0deg);
  &:hover {
    transform: rotateY(0deg);
  }
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  &:hover {
    transform: rotateY(-180deg);
  }
`;

const LpFront = styled.img`
  width: 550px;
  height: 550px;
  ${(props) =>
    props.isPlay
      ? css``
      : css`
          animation: rotateone 5s infinite linear;
        `}
  @keyframes rotateone {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const LpBack = styled.img`
  width: 550px;
  height: 550px;
  ${(props) =>
    props.isPlay
      ? css``
      : css`
          animation: rotateone 5s infinite linear;
        `}
  @keyframes rotatetwo {
    from {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
`;

export default Club;
