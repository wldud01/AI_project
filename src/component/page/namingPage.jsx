import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
import Header from "../list/mainHead";
//ui
import BarButton from "../ui/barButton";
// page
import Loading from "./loadingPage";
// DB or api 임시방편
import logo from "./image/logo.png";
import data from "../../data.json";

/**
 * Main page body부분에 해당
 *  Wrapper header 아래 body 부분을 감싸는 wapper
 *  Container button contents에 감싸는 container
 *  좀 더 수정하고 싶은 부분은 CSS 활용
 */

const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30%;
  //justify-content: center;
`;

const Container = styled.div`
  width: 88%;
  height: 79%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13%;
  background-color: black;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;
const Liogin_title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #1e2a48;
  font-family: "IBM Plex Sans KR";
  font-size: 35pt;
`;
const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #797979;
  background: #fff;
  margin-bottom: 5%;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84%;
  height: 10%;
  color: black;
  font-size: 13pt;
  box-sizing: border-box;
  padding-left: 5%;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 20pt;
  font-weight: 700;
`;
const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3%;
  font-size: 42pt;
`;

function namingPage(props) {
  const { Image } = props;
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  //데이터 불러오면서 걸리는 시간
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  useEffect(() => {
    fetchData().then(() => {
      setLoading(false); // 초기화 작업이 완료되면 로딩 상태를 false로 변경
    });
  }, []);

  // fetchData 함수는 초기화 작업을 수행하고 Promise를 반환하는 함수
  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header src={logo} onClick={() => navigate("/")} />
          <Wrapper>
            <Container>
              <Liogin_title>
                <Span>COMEAT</Span>
              </Liogin_title>
              <Icon>🍳</Icon>

              <Input
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder={"닉네임을 입력해주세요"}
              ></Input>
              <BarButton
                title="카카오 로그인"
                id="login_barButton"
                onClick={() => {
                  text.length < 50
                    ? navigate(":path/kakao/:path")
                    : alert("50자 이내로 입력해주세요");
                }}
              />
            </Container>
          </Wrapper>
        </div>
      )}
    </div>
  );
}
export default namingPage;
