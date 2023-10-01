import React from "react";
import styled from "styled-components";

/**
 * icon이 있는 Button
 *  StyledIconButton 아이콘 버튼
 */
const StyledIconButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #9c9c9c;
`;
const StyledImage = styled.img`
  width: 23px;
  height: 25px;
  cursor: pointer;
  &:focus {
    border-radius: 26%;
    box-shadow: -2px -2px 17px 1px #689dff;
  }
`;

function IconButton(props) {
  const { title, onClick, ionBtnid, src } = props;

  return (
    <StyledIconButton onClick={onClick} id={ionBtnid}>
      <StyledImage src={src} alt="Styled Image" />
      {title || "button"}
    </StyledIconButton>
  );
}
export default IconButton;
