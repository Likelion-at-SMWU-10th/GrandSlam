import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import LP from "./LP";
import styled from "styled-components";
// import Lyrics from "./Lyrics";

const Music3 = () => {
  const [isPlay, isSetPlay] = useState(true);
  const [text, setText] = useState("");
  const myRef = useRef();
  const toggle = () => {
    isSetPlay(!isPlay);
    if (isPlay) {
      myRef.current.play();
      myRef.current.volume = 0.2;
      myRef.current.loop = true;
      const interval = setInterval(showLyrics, 1000);
      if (!isPlay) {
        clearInterval(interval);
      }
    } else {
      myRef.current.pause();
    }
  };

  const song = {
    lyrics:
      "3.6 | 오~~~오오오\n" +
      "8.0 | 최!\n" +
      "9.0 | 강!\n" +
      "10.0 | 삼!\n" +
      "11.0 | 성!\n" +
      "12 | 오~~~오오오\n" +
      "16 | 최!\n" +
      "17 | 강!\n" +
      "18 | 삼!\n" +
      "19 | 성!\n" +
      "20| 승리를 위해 달려가자 워어어어\n" +
      "24.5 | 삼성 라이온즈 화이팅\n" +
      "27.5 | 승리를 위해 달려가자 워어어어\n" +
      "33 | 삼성 라이온즈 화이팅\n" +
      "37 | 오~~~오오오\n" +
      "41 | 최!\n" +
      "42 | 강!\n" +
      "43 | 삼!\n" +
      "44 | 성!\n" +
      "45 | 오~~~오오오\n" +
      "49 | 최!\n" +
      "50 | 강!\n" +
      "51 | 삼!\n" +
      "52 | 성!\n" +
      "52.8 | 승리를 위해 달려가자 워어어어\n" +
      "57 | 삼성 라이온즈 화이팅\n" +
      "61 | 승리를 위해 달려가자 워어어어\n" +
      "65 | 삼성 라이온즈 화이팅\n",
  };

  const lines = song.lyrics.trim().split("\n");
  const data = [];
  lines.map(function (line) {
    const [time, lyric] = line.split("|");
    data.push({
      time: time,
      lyric: lyric,
    });
  });

  const showLyrics = () => {
    data.forEach((item) => {
      if (myRef.current.currentTime >= item.time) {
        setText(item.lyric);
      }
    });
  };

  return (
    <>
      <Wrap>
        <LP isPlay={isPlay} image={"./img/SamsungLP.svg"}></LP>
        <AudioWrap>
          <audio ref={myRef} src="./song/SSsong.mp3" />
          {isPlay ? (
            <PlayBtn className="footer-button" onClick={toggle}>
              <FaPlay className="icon" />
            </PlayBtn>
          ) : (
            <PlayBtn className="footer-button" onClick={toggle}>
              <FaPause className="icon" />
            </PlayBtn>
          )}
        </AudioWrap>
        <Lyrics>{text}</Lyrics>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: absolute;
  top: 5500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const AudioWrap = styled.div`
  position: absolute;
  top: 150px;
  left: 700px;
`;

const PlayBtn = styled.button`
  border-style: none;
  background: none;
  & svg {
    margin-top: 3px;
    color: whitesmoke;
  }
`;

const Lyrics = styled.div`
  width: 50rem;
  position: absolute;
  top: 135px;
  left: 55rem;
  font-family: "Black Han Sans", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  color: whitesmoke;
`;

export default Music3;
