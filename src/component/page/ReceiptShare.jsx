import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/ReceiptList";
import Navi from "../list/nav";
import data from "../../data.json";
import Header from "../list/mainHead";
import TabBtn from "../ui/tabButton";
import Back from "./image/Back.png";
/**
 * photo Share page
 *  사용자들이 잘 찍었다고 생각하는 사진들을 공유하는 공간
 *  저기 중에 하나 누르면 배민 링크나, 지도 링크, 위치 url로 넣어서 공유가능
 *
 */
const BestContentWrapper = styled.div`
  border-radius: 1px;
  width: 100%;
  height: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 35%) 32%,
    rgb(238 243 247 / 44%) 48.19%,
    rgba(150, 205, 255, 0.29) 100%
  );
  filter: blur(1px);
  position: relative;
`;
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: inherit;
  max-width: 45rem;
`;
const TabBtns = styled.div`
  width: 100%;
  height: 13%;
  max-width: 45rem;
  /* margin-top: 5%; */
  display: flex;
  align-items: center;
`;

// mainpage body에 해당하는 부분
function photoShare(props) {
  const {} = props;

  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <div>
      <Header src={Back} onClick={() => navigate(-1)} />
      <Wrapper>
        <Container>
          <BestContentWrapper>
            <Container />
          </BestContentWrapper>
          <TabBtns>
            <TabBtn />
          </TabBtns>
          <ContentBox post={data} />
        </Container>
        <Container />
      </Wrapper>
      <div class="main_nav">
        <Navi />
      </div>
    </div>
  );
}
export default photoShare;
