import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// icon image
import Home from "./image/Home.svg";
import Mypage from "./image/MyIcon.svg";
import Share from "./image/PopularIcon.svg";
import Receipt from "./image/ShareIcon.svg";
import IconButton from "../ui/iconButton";

const Nav = styled.div`
  position: fixed;
  width: 92%;
  height: 70px;
  display: contents;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5vh;
  border-top: 1px solid #9c9c9c;
  background: #ffffff26;
  border-radius: 10px;
`;
function Navigator(props) {
  const {} = props;
  const button_name = ["Kcal", "home", "photo"];
  const [button, setButton] = useState(button_name);
  const [selectedBtn, setSelectedBtn] = useState([]);
  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!

  const handdletSrc = (Btn) => {
    if (Btn === "home") return Home;
    else if (Btn === "Kcal") return Share;
    else if (Btn === "photo") return Receipt;
    else if (Btn === "mypage") return Mypage;
  };

  return (
    <Nav>
      {button.map((b, index) => {
        return (
          <IconButton
            className={selectedBtn.includes(b) ? "Nav_btn_clicked" : "Nav_btn"}
            key={b}
            onClick={() => {
              navigate("/" + b);
              setSelectedBtn((selectedBtn) => [b]);
            }}
            src={handdletSrc(b)}
            title={b}
          />
        );
      })}
    </Nav>
  );
}
export default Navigator;
