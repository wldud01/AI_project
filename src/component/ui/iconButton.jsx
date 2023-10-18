import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * icon이 있는 Button
 *  StyledIconButton 아이콘 버튼
 */
const StyledIconButton = styled.div`
  width: 50px;
  height: 34px;
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
  const { title, onClick, id, src, className } = props;

  return (
    <StyledIconButton className={className} onClick={onClick} id={id}>
      <StyledImage src={src} alt="Styled Image" />
      {title || ""}
    </StyledIconButton>
  );
}
export default IconButton;
