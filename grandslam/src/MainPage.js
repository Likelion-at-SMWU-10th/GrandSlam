import styled from "styled-components";
import Music1 from "./Music1";
import Music2 from "./Music2";
import Music3 from "./Music3";
import LP from "./LP";
import { useState, useEffect } from 'react';

function App() {
  const [ScrollY, setScrollY] = useState(0);
  const [bts, setBtnStatus] =  useState(0);

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(1);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(0);
    }
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })

  return (
    <>
      <Wrap>
        <PText color={"#FCD789"} btnStatus={!bts}>GRANDSLAM</PText>
        <TopBtn btnStatus = {bts}// 버튼 노출 여부
          onClick={handleTop}  // 버튼 클릭시 함수 호출
          >TOP</TopBtn>
        <WrapDiv>
          <Music1></Music1>
          <Music2></Music2>
          <Music3></Music3> 
          <Move
            direction="down"
            scrolldelay="0"
            loop="infinite"
            scrollamount="2000"
            style={{ color: "#ffffff", bgcolor: "#010C1F" }}
          >
            <img src="/img/marquee2.svg" width="60" height="10000"></img>
          </Move>
          <KT_back src="/img/KT_back.png" />
          
          <Doosan_back src="/img/Doosan_back.png" />
          <Samsung_back src="/img/Samsung_back.png" />
          <LP isPlay={true} image={"./img/LGLP.svg"}></LP>
          <LG_back src="/img/LG_back.png" />
          <LP isPlay={true} image={"./img/KiwoomLP.svg"}></LP>
          <Kiwoom_back src="/img/Kiwoom_back.png" />
          <LP isPlay={true} image={"./img/SSGLP.svg"}></LP>
          <SSG_back src="/img/SSG_back.png" />
          <LP isPlay={true} image={"./img/NCLP.svg"}></LP>
          <NC_back src="/img/NC_back.png" />
          <LP isPlay={true} image={"./img/LotteLP.svg"}></LP>
          <Lotte_back src="/img/Lotte_back.png" />
          <LP isPlay={true} image={"./img/KIALP.svg"}></LP>
          <KIA_back src="/img/KIA_back.png" />
          <LP isPlay={true} image={"./img/HanwhaLP.svg"}></LP>
          <Hanhwa_back src="/img/Hanhwa_back.png" />
        </WrapDiv>
      </Wrap>
    </>
  );
}

const PText = styled.p`
  position: fixed;
  top: 0px;
  left: 10px;

  font-family: 'Mr Dafoe', cursive;
  text-shadow: 5px 5px 3px #31748F;


  font-family: 'Mr Dafoe', cursive;
  text-shadow: 5px 5px 3px #31748F;


  text-align: center;
  width: 100%;
  font-size: 100px;
  color: ${props=> props.color || '#FCD789'};
  opacity: ${props=> props.btnStatus || 0 };
  cursor: pointer;
  transition: opacity 0.3s ease-in;

`

const Btns = styled.button`
  position : fixed;
  bottom: 40px; 
  right: 100px;
  
  z-index: 10; 
  width: 50px; 
  height: 50px;
  opacity: ${props=> props.btnStatus || 0 }
  
  z-index: 10; 
  width: 50px; 
  height: 50px;
  border-radius: 100%;
  border: 0 none;
  background: black;
  color: red;
  border: 2px solid red;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.06em;
  box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: opacity 0.3s ease-in;
`

const TopBtn = styled.button`
  position: fixed; 
  opacity: ${props=> props.btnStatus || 0 };
  bottom: 40px; 
  right: 40px;
  
  z-index: 10; 
  width: 50px; 
  height: 50px;
  border-radius: 100%;
  border: 0 none;
  background: black;
  color: white;
  border: 2px solid white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.06em;
  box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: opacity 0.3s ease-in;
`

const Wrap = styled.div`
  position: relative;
`;

const Move = styled.marquee`
  position: absolute;
  width: 53px;
  height:  100%;
  background: white;
  opacity: 0.8;
`;
const WrapDiv = styled.div`
  background: #ffffff;
  font-size: 0px;
`;
const Intro = styled.img``;

const KT_back = styled.img`
  width: 100%;
`;

const Doosan_back = styled.img`
  width: 100%;
`;

const Samsung_back = styled.img`
  width: 100%;
`;
const LG_back = styled.img`
  width: 100%;
`;
const Kiwoom_back = styled.img`
  width: 100%;
`;
const SSG_back = styled.img`
  width: 100%;
`;
const NC_back = styled.img`
  width: 100%;
`;
const KIA_back = styled.img`
  width: 100%;
`;
const Lotte_back = styled.img`
  width: 100%;
`;
const Hanhwa_back = styled.img`
  width: 100%;
`;

export default App;