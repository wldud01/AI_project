import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import meat from "./image/meat.svg";
import egg from "./image/eggplant.svg";
import carrot from "./image/carrot.svg";
import burger from "./image/burger.svg";
import taco from "./image/taco.svg";
import sushi from "./image/sushi.svg";

// food random list
const randomImage = [meat, egg, carrot, burger, taco, sushi];
const randomText = [
  "탄수화물 하루 권장량은 전체 섭취량의 50%",
  "단백질은 체중 1kg당 1g을 권장해요",
  "지방 하루 섭취 권장량은 15g 이하입니다",
  "하루에 물 권장량은 1.5L에요",
  "식품 속 함류된 물을 1L정도 섭취한다고 해요",
  "한번에 마시는 물이 500mL가 넘으면 신장에 무리가 가요",
];
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
  margin-top: 35%;

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
  height: 7%;
  color: #656565;
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
`;
const BackImg = styled.img`
  width: 20%;
  height: 20%;
`;

// Loding 하는 동안의 페이지
function DataLoading(props) {
  const { text, sub } = props;
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

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

  //text random
  function uptextIndex() {
    setIndex(textIndex + 1);
  }
  // useEffect로 업데이트
  useEffect(() => {
    const intervalId = setInterval(() => {
      uptextIndex();
      //console.log(index);
    }, 1000);
    if (textIndex > 3) {
      setIndex(0);
    }
    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, [textIndex]);

  // loading에 음식이 계속 바뀜
  const Food = randomImage[index];
  const Text = randomImage[textIndex];

  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <div>
      <Wrapper>
        <Container>
          <BackImg src={Food} />
          <Span>{sub || Text}</Span>
        </Container>
      </Wrapper>
    </div>
  );
}
export default DataLoading;
