import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import meat from "./image/meat.svg";
import egg from "./image/eggplant.svg";
import carrot from "./image/carrot.svg";
import burger from "./image/burger.svg";
import taco from "./image/taco.svg";
import sushi from "./image/sushi.svg";
import logo from "./image/logo.svg";
import Header from "../list/mainHead";

// food random list
const randomImage = [meat, egg, carrot, burger, taco, sushi];
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  //justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 45rem;
  margin-top: 70%;

  color: #1e2a48;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(138, 138, 138, 0.25);
  font-family: "IBM Plex Sans KR";
  font-size: 27px;
  font-weight: 700;
  letter-spacing: 2.56px;
  z-index: 0;
`;
const Span = styled.p`
  width: 100%;
  height: 3%;
  color: #717171;
  font-size: 16px;
  font-weight: 400;
`;
const BackImg = styled.img`
  width: 25%;
  height: 25%;
`;

// Loding 하는 동안의 페이지
function LoadingPage(props) {
  const { text, sub } = props;
  const [index, setIndex] = useState(0);

  //const [food, setFood] = useState(foodlist[count]);
  // 음식 list index 1씩 증가
  function upIndex() {
    setIndex(index + 1);
  }
  // useEffect로 업데이트
  useEffect(() => {
    const intervalId = setInterval(() => {
      upIndex();
      //console.log(index);
    }, 100);
    if (index > 3) {
      setIndex(0);
    }
    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, [index]);

  // loading에 음식이 계속 바뀜
  const Food = randomImage[index];

  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <div>
      <Header srcFront={logo} />
      <Wrapper>
        <Container>
          <BackImg src={Food} />
          <Span>{sub || "쩝쩝박사 모여라"}</Span>
          {text || "COM2AT"}
        </Container>
      </Wrapper>
    </div>
  );
}
export default LoadingPage;
