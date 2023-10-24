import React, { useState } from "react";
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
  justify-content: start;
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

function ContentBox(props) {
  const { className, btnid, onClick, contentName } = props;
  // mypage map으로 돌릴 부분

  const [content, setContent] = useState(contentName);
  const [selectedContent, setselectedContent] = useState("");
  const onClickedCat = (cat) => {
    setselectedContent([cat]);
  };
  return (
    <Wrapper>
      <Container className={className}>
        {content.map((cat, index) => (
          <Button
            btnid={btnid}
            key={cat}
            title={cat}
            content={cat}
            onClick={() => {
              onClickedCat(cat);
            }}
          />
        ))}
      </Container>
    </Wrapper>
  );
}
export default ContentBox;
