import React from "react";
import styled from "styled-components";
//ui
import Button from "../ui/button";

/**
 * Mainpage에서 네모 박스 container
 *  Wrapper 그 가장 큰 박스
 *  Container Wrapper안에 div로 사용할 용도
 *  TitleText 박스 큰 제목
 *  TitleWrap 큰 제목과 소제목을 감싸는 div
 *  content 설명 글
 */
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 83%;
  height: 97%;
  border-radius: 18px;
  background: #fff;
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
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  box-sizing: border-box;
  padding-left: 12px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
const TitleSubText = styled.span`
  box-sizing: border-box;
  padding-left: 14px;
  color: #a6a6a6;
  font-family: "IBM Plex Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Content = styled.p`
  color: #545454;
  font-family: "IBM Plex Sans KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box;
  padding: 9px;
  margin: 0px;
  padding-left: 20px;
  padding-right: 18px;
`;

function PostListItem(props) {
  const { text, subtext, content, className, btnName, btnid, onClick } = props;
  // post의 내용들이 있는 곳
  return (
    <Wrapper>
      <Container id="textContainer" className={className}>
        <TitleText>{text || "default"}</TitleText>
        <TitleSubText>{subtext || ""}</TitleSubText>
      </Container>
      <Container id="contentContainer" className={className}>
        <Content>{content || "default"}</Content>
      </Container>
      <Container id="btnContainer" className={className}>
        <Button btnid={btnid} title={btnName} onClick={onClick} />
      </Container>
    </Wrapper>
  );
}
export default PostListItem;
