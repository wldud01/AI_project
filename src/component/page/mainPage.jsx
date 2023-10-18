import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
import Header from "../list/mainHead";
//ui
import Loading from "./loadingPage";
// DB or api 임시방편
import data from "../../data.json";
import logo from "./image/logo.svg";

/**
 * Main page body부분에 해당
 *  Wrapper header 아래 body 부분을 감싸는 wapper
 *  Container button contents에 감싸는 container
 *  좀 더 수정하고 싶은 부분은 CSS 활용
 */

const Wrapper = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28%;
  //justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 30%;
  max-width: 45rem;
  margin-top: 4%;
  align-items: center;
  :hover {
    background: #f4f8fe;
  }
`;
const FileSelectBtn = styled.input`
  display: flex;
  width: 30%;
  position: relative;
  color: white;
`;
const Space = styled.div`
  width: 100%;
  height: 85px;
  max-width: 45rem;
  margin-top: 5%;
`;

function MainPage(props) {
  const {} = props;
  const [loading, setLoading] = useState(true);

  //데이터 불러오면서 걸리는 시간
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  useEffect(() => {
    fetchData().then(() => {
      setLoading(false); // 초기화 작업이 완료되면 로딩 상태를 false로 변경
    });
  }, []);

  // fetchData 함수는 초기화 작업을 수행하고 Promise를 반환하는 함수
  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header srcFront={logo} onClick={() => navigate("/")} />
          <Wrapper>
            <Container id="contentBoxContainer_1">
              <ContentBox
                text="🍴오늘 뭐먹지?"
                subtext="How to use this app?"
                content="음식을 취향에 맞게 추천해드립니다. "
                btnName="추천 받아보기"
                btnid="ctn_1_btn"
                onClick={() => {
                  navigate("/recommandInput");
                }}
              />
            </Container>
            <Container id="contentBoxContainer_1">
              <ContentBox
                text="오늘 먹은 음식의 영양소는?"
                subtext="오늘 먹은 칼로리가 몇이더라.."
                content=" "
                btnName="사진 고르기"
                btnid="ctn_1_btn"
                onClick={() => {
                  <FileSelectBtn />;
                }}
              />
            </Container>
            <Container id="contentBoxContainer_2">
              <ContentBox
                text="숨은 맛집을 공유해주세요!"
                subtext="여러분의 숨은 맛집은?"
                content=" "
                btnName="공유하기"
                btnid="ctn_2_btn"
                onClick={() => {
                  navigate("/share");
                }}
              />
            </Container>
          </Wrapper>
          <Space />
          <div className="main_nav">
            <Navi />
          </div>
        </div>
      )}
    </div>
  );
}
export default MainPage;
