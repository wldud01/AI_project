import React, { useState } from "react";
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
`;
const None = styled.div`
  display: flex;
  width: 11%;
`;

function IconButton(props) {
  const { title, onClick, btnid, src, className, button } = props;

  return (
    <StyledIconButton className={className} onClick={onClick} id={btnid}>
      {src !== "" ? <StyledImage src={src} alt="Styled Image" /> : <None />}
      {title || ""}
    </StyledIconButton>
  );
}
export default IconButton;
