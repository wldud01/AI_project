import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.p`
  color: #000;
  font-family: IBM Plex Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
  margin-bottom: 2%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #545454;
  font-family: IBM Plex Sans KR;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  height: 44%;
  width: 93%;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  width: 98%;
  height: auto;
  box-sizing: border-box;
  padding-left: 6%;
  flex-direction: column;
  margin-top: 5%;
`;

function PostBox(props) {
  const { title, content, itemId, contentHeight, WrapperHeight } = props;

  return (
    <Wrapper
      style={WrapperHeight ? { height: `${WrapperHeight}` } : { height: `17%` }}
      id={itemId}
    >
      <Title>{title || "제목을 입력해주세요"}</Title>
      <Content
        style={
          contentHeight ? { height: `${contentHeight}` } : { height: `44%` }
        }
      >
        {content || "내용을 입력해주세요"}
      </Content>
    </Wrapper>
  );
}

export default PostBox;
