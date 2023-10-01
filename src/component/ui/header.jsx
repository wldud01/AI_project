import React, { Component } from "react";
import styled from "styled-components";

import Clock from "react-live-clock";
import Calendar from "./Calendar.png";

/**
 * Main header
 *  MainTitleText는 오늘 날짜 text
 *  MainHeader은 div로 header의 큰틀
 *  MainSubText는 날짜 아래 바뀌는 text
 */

const MainTitleText = styled.p`
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 13px;
  margin-bottom: 1px;
`;
const MainHeader = styled.div`
  width: 100%;
  height: auto;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 15px;
  box-sizing: border-box;
  padding-top: 15px;
`;
const MainSubText = styled.p`
  font-size: 17px;
  width: 100%;
  text-align: center;
  /* margin-top: 27px; */
  color: #b5b3b3;
  margin: 0px;
`;
const StyledImage = styled.img`
  width: 16px;
  height: 18px;
  margin-right: 9px;
`;

function Header(props) {
  const { span, className } = props;

  return (
    <MainHeader className={className}>
      <MainTitleText>
        <StyledImage src={Calendar} alt="Styled Image" />
        <Clock format={"ddd, MMM Do, YYYY"} ticking={false} timezone={"Rok"} />
      </MainTitleText>
      <MainSubText>{span || ""}</MainSubText>
    </MainHeader>
  );
}
export default Header;
