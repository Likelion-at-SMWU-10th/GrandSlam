import styled from "styled-components";
import Music from "./Music";
import LP from "./LP";

function App() {
  return (
    <>
      <Wrap>
        <Music></Music>
        <WrapDiv>
          <Move
            direction="down"
            scrolldelay="0"
            loop="infinite"
            scrollamount="2"
            style={{ color: "#ffffff", bgcolor: "#010C1F" }}
          >
            <img src="/img/marquee2.svg" width="60" height="10000"></img>
          </Move>
          <KT_back src="/img/KT_back.png" />
          <LP isPlay={true} image={"./img/DusanLP.svg"}></LP>
          <Doosan_back src="/img/Doosan_back.png" />
          <LP isPlay={true} image={"./img/SamsungLP.svg"}></LP>
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

const Wrap = styled.div`
  position: relative;
`;

const Move = styled.marquee`
  position: absolute;
  width: 53px;
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
