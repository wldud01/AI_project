import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// icon image
import HomeIcon from "./image/HomeIcon.png";
import MyIcon from "./image/MyIcon.png";
import PopularIcon from "./image/PopularIcon.png";
import ShareIcon from "./image/ShareIcon.png";
import IconButton from "../ui/iconButton";

const Nav = styled.div`
  position: fixed;
  width: 86%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5vh;
  border-top: 1px solid #9c9c9c;
  background: #ffffff70;
  border-radius: 10px;
`;
function Navigator(props) {
  const {} = props;

  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <Nav>
      <IconButton
        src={HomeIcon}
        title="home"
        onClick={() => {
          navigate("/");
        }}
      ></IconButton>
      <IconButton
        src={ShareIcon}
        title="share"
        onClick={() => {
          navigate("/share/");
        }}
      ></IconButton>
      <IconButton
        src={PopularIcon}
        title="receipt"
        onClick={() => {
          navigate("/receipt/");
        }}
      ></IconButton>
      <IconButton
        src={MyIcon}
        title="mypage"
        onClick={() => {
          navigate("/");
        }}
      ></IconButton>
    </Nav>
  );
}
export default Navigator;
