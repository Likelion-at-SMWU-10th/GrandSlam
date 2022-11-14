import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import styled, {css} from 'styled-components';

function App() {
  const [srcStr, setSrcStr] = useState("/glandslam_black.mp4");
  const [chStr, setchStr] = useState("guess what");
  const [chColor, setchColor] = useState("#FFFFFF");

  function handleClick(e) {
    e.preventDefault();
    setSrcStr("/glandslam.mp4");
    setchStr("GO TO CLUB");
    setchColor("#FCD789");
  }

  return (
    <>
      <WrapView>
          <RAvideo key={srcStr} muted autoPlay loop>
              <source src={srcStr} type="video/mp4"></source>
          </RAvideo>
          <DText>
            <PText color={chColor}>GRANDSLAM</PText>
          </DText>
          <RBtn onClick={handleClick}>{chStr}</RBtn>
      </WrapView>
    </>
  );
}

const PText = styled.p`
  font-family: 'Mr Dafoe', cursive;
  text-shadow: 5px 5px 3px #31748F;

  text-align: center;
  width: 100%;
  font-size: 140px;
  color: ${props=> props.color || '#FCD789'};
`

const RBtn = styled.button`
  position: absolute;
  top:70%;
  left: 40%;

  font-family: 'Grenze', serif;
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0.3em;
  color: #000000;
  border-radius: 0;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: #ffffff;
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.525rem;
  border: none;
  border: 1px solid rgba(223,190,106,0.3);

  opacity: 0.8;

  &:hover {
    top:68%;
    color: #000000;
    border: 2px solid #31748F;
    background-position: 99% 50%;
  }
`
const RAvideo = styled.video`
  width: 100vw;
  z-index: -1;
  position: absolute;
  opacity: 0.9;
`
const WrapView = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;

  overflow: hidden;
  margin: 0px auto;
  padding: 0px;
`
const DText = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const SubText = styled.p`
  font-family: 'Mr Dafoe', cursive;

  text-align: center;
  width: 100%;
  font-size: 20px;
  color: #ffffff;
`

export default App;

/*
      <img
                  className="keywordicon"
                  src="/img/bg1.svg"
                  alt="Third slide"
                />
*/