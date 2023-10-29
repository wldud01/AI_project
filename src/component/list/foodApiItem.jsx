import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//ui

/**
 * Mainpage에서 네모 박스 container
 *  Wrapper 그 가장 큰 박스
 *  Container Wrapper안에 div로 사용할 용도
 *  TitleText 박스 큰 제목
 *  TitleWrap 큰 제목과 소제목을 감싸는 div
 *  StyledImage 이미지 화면
 */
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6%;
  width: 40%;
  height: 32%;
  border-radius: 18px;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: auto;
`;
const TitleText = styled.p`
  color: #000;
  font-family: "IBM Plex Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  /* box-sizing: border-box; */
  /* padding-left: 12px; */
  margin-top: 3px;
  margin-bottom: 3px;
`;
const TitleSubText = styled.span`
  /* box-sizing: border-box; */
  /* padding-left: 14px; */
  color: #252525;
  font-family: "IBM Plex Sans KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StyledImage = styled.img`
  width: 84%;
  height: 66%;
  box-sizing: content-box;
  padding-bottom: 7px;
  border-radius: 10%;
`;

// Receipt container - 음식 인식후 레시피 추천 화면
function FoodApiItem(props) {
  const { className, post, onClick } = props;
  const navigate = useNavigate();
  // post의 내용들이 있는 곳
  return (
    <Wrapper onClick={onClick}>
      <Container id="FoodReceipt" className={className}>
        <TitleText>{post.DESC_KOR || "title"}</TitleText>
        <TitleSubText>{post.NUTR_CONT1 + "Kcal" || ""}</TitleSubText>
        <small style={{ color: "gray" }}>{post.MAKER_NAME || ""}</small>
      </Container>
    </Wrapper>
  );
}

export default FoodApiItem;
