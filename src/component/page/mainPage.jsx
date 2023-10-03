import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
//ui
import Loading from "./loadingPage";
// DB or api 임시방편
import data from "../../data.json";

/**
 * Main page body부분에 해당
 *  Wrapper header 아래 body 부분을 감싸는 wapper
 *  Container button contents에 감싸는 container
 *  좀 더 수정하고 싶은 부분은 CSS 활용
 */

const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 45rem;
  margin-top: 5%;
  :hover {
    background: #f4f8fe;
  }
`;

function MainPage(props) {
  const { Image } = props;
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
          <Wrapper>
            <Container id="contentBoxContainer_1">
              <ContentBox
                text="CoCook 시작하기"
                subtext="How to use this app?"
                content="내가 찍은 음식 사진 또는 만들고 싶은 음식 사진을 넣어주세요. 재료부터 만드는 방법까지 추천해드리겠습니다."
                btnName="음식 사진 고르기"
                btnid="ctn_1_btn"
                onClick={() => {
                  navigate("/main/input");
                }}
              />
            </Container>
            <Container id="contentBoxContainer_2">
              <ContentBox
                text="음식 사진 같이 보기"
                subtext="Share your photo!"
                content="내가 찍은 음식 사진을 공유해주세요. 좋은 레시피가 있다면 함께 공유해도 좋아요!"
                btnName="사진 올리기"
                btnid="ctn_2_btn"
                onClick={() => {
                  navigate("/share/input");
                }}
              />
            </Container>
          </Wrapper>

          <div className="main_nav">
            <Navi />
          </div>
        </div>
      )}
    </div>
  );
}
export default MainPage;
