import React from "react";
import styled from "styled-components";
// 버튼 껍데기 ㄴ만들기
const StyledButton = styled.div`
  padding: 1px;
  width: 21%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6f7071;
  background: #634444;
  cursor: pointer;
  font-size: 15px;
  border-radius: 18px;
  border: 1px solid #acacac;
  background: #fff;
  &:hover {
    color: #689dff;
    border: 1px solid #689dff;
  }
`;

function tabButton(props) {
  const { title, onClick, btnid } = props;

  return (
    <StyledButton onClick={onClick} id={btnid}>
      {title || "button"}
    </StyledButton>
  );
}
export default tabButton;
