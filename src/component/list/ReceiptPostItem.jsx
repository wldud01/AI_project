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
  width: 86%;
  height: 37%;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
  :hover {
    border-radius: 5%;
    background: #f2f7ff;
  }
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
  font-size: 14px;
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
  color: #a6a6a6;
  font-family: "IBM Plex Sans KR";
  font-size: 11px;
  font-weight: 300;
`;

const StyledImage = styled.img`
  width: 84%;
  height: 66%;
  box-sizing: content-box;
  padding-bottom: 7px;
  border-radius: 10%;
`;

// Receipt container - 음식 인식후 레시피 추천 화면
function PhotoPost(props) {
  const { className, post } = props;
  const navigate = useNavigate();
  // post의 내용들이 있는 곳
  return (
    <Wrapper
      onClick={() => {
        navigate("/");
      }}
    >
      <Container id="FoodReceipt" className={className}>
        <StyledImage src={post.src} alt="Styled Image" />
        <TitleText>{post.title || "title"}</TitleText>
        <TitleSubText>{post.content || "subtext"}</TitleSubText>
      </Container>
    </Wrapper>
  );
}

export default PhotoPost;
