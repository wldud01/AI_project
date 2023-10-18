import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import Calendar from "./Calendar_.svg";

//ui
import IconBtn from "../ui/iconButton";

/**
 * Main header
 *  MainTitleText는 오늘 날짜 text
 *  MainHeader은 div로 header의 큰틀
 *  MainSubText는 날짜 아래 바뀌는 text
 */

const MainTitleText = styled.div`
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 13px;
  margin-bottom: 1px;
`;
const ScheduleHead = styled.div`
  display: flex;
  width: 52%;
  justify-content: center;
`;
const MainHeader = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 3px;
  box-sizing: border-box;
  padding-top: 15px;
  background: #ffffffc2;
  z-index: 1;
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
  const navigate = useNavigate();
  const { srcFront, srcBack, span, Class, btnId, title, onClick } = props;

  return (
    <MainHeader>
      <MainTitleText className={Class}>
        <IconBtn
          src={srcFront || ""}
          btnId={btnId}
          title={title}
          onClick={onClick}
        />

        <ScheduleHead>
          <StyledImage src={Calendar} alt="Styled Image" />
          <Clock
            format={"ddd, MMM Do, YYYY"}
            ticking={false}
            timezone={"Rok"}
          />
        </ScheduleHead>

        <IconBtn
          src={srcBack || ""}
          btnId={btnId}
          title={title}
          onClick={onClick}
        />
      </MainTitleText>
      <MainSubText>{span || ""}</MainSubText>
    </MainHeader>
  );
}
export default Header;
