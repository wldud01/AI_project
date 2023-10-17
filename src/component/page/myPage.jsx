import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/ContentBox";
import Navi from "../list/nav";
import Header from "../list/mainHead";
//ui
import Loading from "./loadingPage";
// DB or api 임시방편
import data from "../../data.json";
import logo from "./image/logo.png";

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
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: #f4f8fe;
  }
`;
const Text = styled.span`
  position: absolute;
  font-family: "IBM Plex Sans KR";
  font-size: 18px;
  font-weight: 700;
  color: green;
`;
const Space = styled.div`
  width: 100%;
  height: 85px;
  max-width: 45rem;
  margin-top: 5%;
`;

function myPage(props) {
  const { Image } = props;
  const [loading, setLoading] = useState(true);

  //데이터 불러오면서 걸리는 시간
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
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
          <Header src={logo} onClick={() => navigate("/")} />
          <Wrapper>
            <Container id="mypage_contentBox_1">
              <ContentBox contentName={["로그인"]} btnid="mypage_nickname" />
              <Text>🌱 냠냠 새싹</Text>
            </Container>
            <Container id="mypage_contentBox_2">
              <ContentBox
                contentName={["내가 올린 컨텐츠", "설정", "고객센터"]}
                btnid="mypage_content"
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
export default myPage;
