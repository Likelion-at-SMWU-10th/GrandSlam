import styled, {css, keyframes} from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [srcStr, setSrcStr] = useState("/glandslam_final.mp4");
  const [chColor, setchColor] = useState("#FFFFFF");

  const [isButtonShow, setButtonShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if(window.pageYOffset <= 2) {
      document.getElementById("videoplay").currentTime = 0; //black
      setchColor("#FFFFFF");
      setButtonShow(false);
    }
    else {
      window.scrollTo(0, 3);
      document.getElementById("videoplay").currentTime = 32; //color
      setchColor("#FCD789");
      setButtonShow(true);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    navigate("/clubpage");
  }

    return (
        <WrapView>
            <RAvideo id="videoplay" key={srcStr} muted autoPlay loop>
                <source src={srcStr} type="video/mp4"></source>
            </RAvideo>
            <DText>
                <PText color={chColor}>GRANDSLAM</PText>
            </DText>
            {!isButtonShow && <RImg src="/img/down_arrow_white.png"></RImg>}
            {isButtonShow && <RBtn onClick={handleClick}>GO TO CLUB</RBtn>}
        </WrapView>
    );
};

const motion = keyframes`
	0% {margin-top: 0px;}
	100% {margin-top: 10px;}
`

const RImg = styled.img`
  width: 200px;
  height:  200px;
  top: 70%;
  left: 45%;
  position: absolute;
  filter: drop-shadow(5px 5px 5px #000);
  animation: ${motion} 0.8s linear 0s infinite alternate; margin-top: 0;
`

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
  top:60%;
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
    top:57%;
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
  height: 101vh;
  overflow: hidden;
  position: absolute;

  overflow: hidden;
  margin: 0px auto;
  padding: 0px;
`
const DText = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%,-50%);
`


export default Home;