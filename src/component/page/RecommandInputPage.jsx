import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";
import PostBox from "../list/PostBoxItem";
import "rc-slider/assets/index.css";
//ui
import Slider from "../ui/slider_stick";
import TabButton from "../ui/tabButton";
// DB or api 임시방편
import data from "../../data.json";
import Back from "./image/Back.svg";
import BarButton from "../ui/barButton";

// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28%;
`;

// button contents에 감싸는 container
const Container = styled.div`
  width: 88%;
  height: auto;
  max-width: 45rem;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;

// 버튼을 감싸는 부분
const ButtonWrap = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  height: 100%;
`;
const Buttondiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 97%;
  box-sizing: border-box;
  flex-wrap: wrap;
  /* padding-left: 6%; */
`;
const DragDrop = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  flex-direction: column;
  /* align-items: center; */
  font-size: 17px;
  justify-content: space-between;
`;
const Text = styled.p`
  display: flex;
  width: 87%;
  font-size: 13pt;
  font-weight: 700;
  margin-top: 8%;
  margin-bottom: 10px;
`;
const Space = styled.div`
  width: 100%;
  height: 30px;
  max-width: 45rem;
  margin-top: 5%;
`;
const BarButtonStyle = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
`;
// mainpage body에 button 눌렀을 때 해당하는 부분
function RecommandInputPage(props) {
  const {} = props;
  const food_cat = ["구이", "국물", "빵&과자", "찜", "야채", "조림", "무침"];

  const [selectedCat, setSelectedCat] = useState([]);
  const [category, setCategory] = useState(food_cat);
  const [kcal, setKcal] = useState(0);
  const [carb, setCarb] = useState(0);

  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  // 영양성분 Slider 값
  const onChangeKcal = (newValue) => {
    setKcal(newValue);
    console.log(kcal);
  };
  const onChangefat = (newValue) => {
    setFat(newValue);
    console.log(fat);
  };
  const onChangeCarb = (newValue) => {
    setCarb(newValue);
    console.log(carb);
  };
  const onChangeProtein = (newValue) => {
    setProtein(newValue);
    console.log(protein);
  };

  //category
  const toggleCat = (cat) => {
    if (selectedCat.includes(cat)) {
      setSelectedCat(selectedCat.filter((c) => c !== cat));
    } else {
      setSelectedCat([...selectedCat, cat]);
    }
  };

  async function handleSummitClick() {
    // 전송할 데이터를 객체로 만들기
    const data = {
      userId: "0106ymk",
      cookedCategory: selectedCat,
      selectedKcal: `${kcal}`,
      selectedCar: `${carb}`,
      selectedProtein: `${protein}`,
      selectedFat: `${fat}`,
    };
    console.log(data);
    // flask로 프록시
    const Url = "http://172.28.24.85:8080/flask/create"; // 원하는 엔드포인트 URL로 변경하세요
    // 데이터를 Spring으로 전송
    await axios
      .post(Url, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // 데이터 전송 후 원하는 동작 수행
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    // 데이터를 Spring으로 전송
    const Url_spring = "http://172.28.24.85:8080/spring/recommend/new"; // 원하는 엔드포인트 URL로 변경하세요
    await axios
      .post(Url_spring, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // 데이터 전송 후 원하는 동작 수행
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    navigate("/");
  }
  // 페이지 이동
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header
          srcFront={Back}
          btnId={"header_icon_back"}
          onClick={() => navigate(-1)}
        />
        <Wrapper>
          <Container>
            <Text>취향에 맞게 선택해주세요</Text>
            <PostBox
              WrapperHeight="auto"
              contentHeight="auto"
              title="종류"
              id="recommandInputpage_cat"
              content={
                <ButtonWrap>
                  <Buttondiv>
                    {category.map((cat, index) => (
                      <TabButton
                        className={
                          selectedCat.includes(cat)
                            ? "tab_btn_clicked"
                            : "tab_btn"
                        }
                        key={cat}
                        category={cat}
                        title={cat}
                        onClick={() => {
                          toggleCat(cat);
                        }}
                      />
                    ))}
                  </Buttondiv>
                </ButtonWrap>
              }
            />
            <PostBox
              WrapperHeight="auto"
              contentHeight="auto"
              title="영양성분"
              itemId="recommandInputpage_factor"
              content={
                <DragDrop>
                  <Slider
                    min={0}
                    max={1000}
                    onChange={onChangeKcal}
                    fact={"칼로리"}
                    values={kcal}
                  />
                  <Slider
                    min={0}
                    max={100}
                    onChange={onChangeCarb}
                    fact={"탄수화물"}
                    values={carb}
                  />
                  <Slider
                    min={0}
                    max={100}
                    onChange={onChangeProtein}
                    fact={"단백질"}
                    values={protein}
                  />
                  <Slider
                    min={0}
                    max={100}
                    fact={"지방"}
                    onChange={onChangefat}
                    values={fat}
                  />
                </DragDrop>
              }
            />
            <Space />
          </Container>
          <BarButtonStyle>
            <BarButton
              id="chooseFoodCat_Btn"
              onClick={handleSummitClick}
              title={"맞춤 음식 추천받기"}
            />
          </BarButtonStyle>
        </Wrapper>
        <Space />
        <div className="main_nav">
          <Navi />
        </div>
        <Space />
        <Space />
      </div>
      )
    </div>
  );
}
export default RecommandInputPage;
