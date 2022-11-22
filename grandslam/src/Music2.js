import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import LP from "./LP";
import styled from "styled-components";
// import Lyrics from "./Lyrics";

const Music2 = () => {
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
      "3.5 | 최!강!두!산!\n" +
      "9.6 | 최!강!두!산!\n" +
      "11.0 | 워어어어 워어어어어어\n" +
      "17.8 | 두산의 승리를 위하여~\n" +
      "23.5 | 오늘도 힘차게 외쳐라~\n" +
      "28.9 | 나가자 싸우자 우리의 베어스\n" +
      "34.8 | 두산의 승리를 위하여~\n" +
      "40.0 | 두산의 승리를 위하여~\n" +
      "45.0 | 오늘도 힘차게 외쳐라~\n" +
      "50.8 | 나가자 싸우자 우리의 베어스\n" +
      "56.5 | 두산의 승리를 위하여~\n",
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
        <LP isPlay={isPlay} image={"./img/DusanLP.svg"}></LP>
        <AudioWrap>
          <audio ref={myRef} src="./song/DSsong.mp3" />
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
  top: 2800px;
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

export default Music2;
