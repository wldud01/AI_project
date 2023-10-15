import React from "react";
import styed from "styled-components";
// 버튼 껍데기 ㄴ만들기
const StyledButton = styed.div`
    padding: 1px;
    border-radius: 15px;
    background: #06F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 89%;
    height: 10%;
    color: white;
    font-size: 15pt;
    cursor:pointer;
`;

function BarButton(props) {
  const { title, onClick, id } = props;

  return (
    <StyledButton onClick={onClick} id={id}>
      {title || "button"}
    </StyledButton>
  );
}
export default BarButton;
