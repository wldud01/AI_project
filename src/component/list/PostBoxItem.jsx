import React from "react";
import styled from "styled-components";

const Title = styled.p`
  color: #000;
  font-family: IBM Plex Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
  /* padding-left: 2%; */
  color: #545454;
  font-family: IBM Plex Sans KR;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  height: 44%;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 98%;
  height: 17%;
  box-sizing: border-box;
  padding-left: 6%;
  flex-direction: column;
`;

function PostBox(props) {
  const { title, content } = props;

  return (
    <Wrapper>
      <Title>{title || "제목을 입력해주세요"}</Title>
      <Content>{content || "내용을 입력해주세요"}</Content>
    </Wrapper>
  );
}

export default PostBox;
