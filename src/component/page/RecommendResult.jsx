import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";

//ui
import Back from "./image/back.svg";
import BarButton from "../ui/barButton";
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28%;
  justify-content: center;
`;

// button contents에 감싸는 container
const Container = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  width: 88%;
  height: auto;
  max-width: 45rem;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;

const Space = styled.div`
  width: 100%;
  height: 85px;
  max-width: 45rem;
  margin-top: 5%;
`;

const BarButtonStyle = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
`;
const Result = styled.div`
  font-size: 20pt;
`;
const ResultTitle = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 3%;
  font-size: larger;
`;

// mainpage body에 button 눌렀을 때 해당하는 부분
function RecommendResult(props) {
  const {} = props;
  /**예측 결과 */
  const navigate = useNavigate();
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  console.log(responseData);

  return (
    <div>
      <div>
        <Header
          srcFront={Back}
          btnId={"header_icon_back"}
          onClick={() => navigate(-1)}
        />
        <Wrapper>
          <ResultTitle>
            식약처 데이터로만 학습했기 때문에 아직 많이 모호할 수 있어요!😭
          </ResultTitle>
          <Container>
            <Result>{responseData}</Result>
          </Container>
          <BarButtonStyle>
            <BarButton
              id="chooseFoodCat_Btn"
              title={"돌아가기"}
              onClick={() => navigate("/home")}
            />
          </BarButtonStyle>
        </Wrapper>
        <Space />
        <div className="main_nav">
          <Navi />
        </div>
        <Space />
      </div>
    </div>
  );
}
export default RecommendResult;
