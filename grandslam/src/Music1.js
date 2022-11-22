import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import LP from "./LP";
import styled from "styled-components";
// import Lyrics from "./Lyrics";

const Music1 = () => {
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
      "1.5 | 워어어어 워어\n" +
      "4.9 | 우린 하나된 kt wiz\n" +
      "8.5 | 워어어어 워어\n" +
      "12 | 우리는 kt wiz\n" +
      "15.8 | 워어어어 워어\n" +
      "19 | 우린 하나된 kt wiz\n" +
      "23 | 워어어어 워어\n" +
      "26.8 | 우리는 kt wiz",
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
        <LP isPlay={isPlay} image={"./img/KTLP.svg"}  id="simple-list-item-1"></LP>
        <AudioWrap>
          <audio ref={myRef} src="./song/KTsong.mp3" />
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
  top: 780px;
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

export default Music1;
