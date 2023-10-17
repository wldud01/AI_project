import React from "react";
import styled from "styled-components";
// 버튼 껍데기 ㄴ만들기
const StyledButton = styled.div`
  padding: 1px;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 10px;
  margin-left: 15px;
`;
function Button(props) {
  const { title, onClick, btnid } = props;

  return (
    <StyledButton onClick={onClick} id={btnid}>
      {title || "button"}
    </StyledButton>
  );
}
export default Button;
