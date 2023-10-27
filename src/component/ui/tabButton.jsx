import React from "react";
import styled from "styled-components";
// 버튼 껍데기 ㄴ만들기
const StyledButton = styled.div`
  padding: 1px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  margin-bottom: 3.5%;
  border-radius: 18px;
  background: #fff;
  font-family: IBM Plex Sans KR;
  font-size: 13px;
  font-weight: 700;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function tabButton(props) {
  const { title, onClick, btnid, className } = props;

  // 단어길이에 맞춰서 길이
  const buttonWidth = title
    ? `${Math.min(Math.max(title.length * 15, 48), 150)}px`
    : "48px";

  return (
    <StyledButton
      className={className}
      onClick={onClick}
      id={btnid}
      style={{ width: buttonWidth }}
    >
      {title || "button"}
    </StyledButton>
  );
}
export default tabButton;
