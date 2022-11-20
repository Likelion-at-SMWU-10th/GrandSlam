import styled from 'styled-components';

function App() {
  return (
    <WrapDiv>
            <Move direction='up' style={{color: '#ffffff', bgcolor:'#010C1F'}}>
                <img src="/img/grandslam.png" width="50" height="814.88"></img>
            </Move>
      <KT_back src="/img/KT_back.png"/>
      <Doosan_back src="/img/Doosan_back.png"/>
      <Samsung_back src="/img/Samsung_back.png"/>
      <LG_back src="/img/LG_back.png"/>
      <Kiwoom_back src="/img/Kiwoom_back.png"/>
      <SSG_back src="/img/SSG_back.png"/>
      <NC_back src="/img/NC_back.png"/>
      <Lotte_back src="/img/Lotte_back.png"/>
      <KIA_back src="/img/KIA_back.png"/>
      <Hanhwa_back src="/img/Hanhwa_back.png"/>
      
    </WrapDiv>
  );
}

const Move = styled.marquee`
    position: absolute;
    scrolldelay:5;
    width:53px;
    loop:infinite;
`
const WrapDiv = styled.div`
  background: #ffffff;
  font-size: 0px;
`
const Intro = styled.img`

`

const KT_back = styled.img`
  width:100%;

`

const Doosan_back = styled.img`
  width:100%;

`

const Samsung_back = styled.img`
  width:100%;

`
const LG_back = styled.img`
  width:100%;

`
const Kiwoom_back = styled.img`
  width:100%;

`
const SSG_back = styled.img`
  width:100%;

`
const NC_back = styled.img`
  width:100%;

`
const KIA_back = styled.img`
  width:100%;

`
const Lotte_back = styled.img`
  width:100%;

`
const Hanhwa_back = styled.img`
  width:100%;

`



export default App;
