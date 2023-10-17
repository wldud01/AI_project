import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";
import PostBox from "../list/PostBoxItem";
import PostBoxList from "../list/PostBoxList";
//ui
import Slider from "../ui/slider_stick";
// DB or api 임시방편
import data from "../../data.json";
import Back from "./image/Back.png";
import BarButton from "../ui/barButton";
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28%;
`;

// button contents에 감싸는 container
const Container = styled.div`
  width: 88%;
  height: auto;
  max-width: 45rem;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;

// 버튼을 감싸는 부분
const ButtonWrap = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  height: 100%;
`;
const DragDrop = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  flex-direction: column;
  /* align-items: center; */
  font-size: 17px;
  justify-content: space-between;
`;
const Text = styled.p`
  display: flex;
  width: 87%;
  font-size: 13pt;
  font-weight: 700;
  margin-top: 8%;
  margin-bottom: 10px;
`;
const Space = styled.div`
  width: 100%;
  height: 30px;
  max-width: 45rem;
  margin-top: 5%;
`;
const BarButtonStyle = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
`;

// mainpage body에 button 눌렀을 때 해당하는 부분
function RecommandInputPage(props) {
  const {} = props;
  const [text, setText] = useState("");
  const [describe, setDescribe] = useState("");

  const [factor, setFactor] = useState([
    "칼로리",
    "탄수화물",
    "단백질",
    "지방",
  ]);

  const food_cat = ["구이", "국물", "빵&과자", "찜", "야채", "조림", "무침"];
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header src={Back} onClick={() => navigate(-1)} />
        <Wrapper>
          <Container>
            <Text>취향에 맞게 선택해주세요</Text>
            <PostBox
              WrapperHeight="auto"
              contentHeight="auto"
              title="종류"
              id="recommandInputpage_cat"
              content={
                <ButtonWrap>
                  <PostBoxList list={food_cat} />
                </ButtonWrap>
              }
            />
            <PostBox
              WrapperHeight="auto"
              contentHeight="auto"
              title="영양성분"
              itemId="recommandInputpage_factor"
              content={
                <DragDrop>
                  {factor.map((f, index) => (
                    <Slider key={index} min={0} max={100} rate={f} />
                  ))}
                </DragDrop>
              }
            />
            <Space />
          </Container>
          <BarButtonStyle>
            <BarButton id="chooseFoodCat_Btn" title={"맞춤 음식 추천받기"} />
          </BarButtonStyle>
        </Wrapper>
        <Space />
        <div className="main_nav">
          <Navi />
        </div>
        <Space />
        <Space />
      </div>
      )
    </div>
  );
}
export default RecommandInputPage;
