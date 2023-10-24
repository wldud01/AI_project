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
import Slider from "rc-slider";
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
  justify-content: start;
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
  const [value, setValue] = useState(0);
  const [factor, setFactor] = useState([
    "칼로리",
    "탄수화물",
    "단백질",
    "지방",
  ]);
  const food_cat = ["구이", "국물", "빵&과자", "찜", "야채", "조림", "무침"];

  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedfactor, setSelectedFactor] = useState([]);
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

  //categorhy
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
    // Spring Boot 서버의 엔드포인트 URL 설정
    const Url = "http://localhost:8000/api/recommend/new"; // 원하는 엔드포인트 URL로 변경하세요
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
                  <div style={{ marginBottom: "5%" }}>
                    <span>
                      {"칼로리" + " "}

                      <small>{kcal + " " + "kcal"}</small>
                    </span>
                    <Slider
                      min={0}
                      max={1000}
                      onChange={onChangeKcal}
                      value={kcal}
                    />
                  </div>
                  <div style={{ marginBottom: "5%" }}>
                    <span>
                      {"탄수화물" + " "}

                      <small>{carb + " " + "%"}</small>
                    </span>
                    <Slider
                      min={0}
                      max={100}
                      onChange={onChangeCarb}
                      value={carb}
                    />
                  </div>
                  <div style={{ marginBottom: "5%" }}>
                    <span>
                      {"단백질" + " "}

                      <small>{protein + " " + "%"}</small>
                    </span>
                    <Slider
                      min={0}
                      max={100}
                      onChange={onChangeProtein}
                      value={protein}
                    />
                  </div>
                  <div style={{ marginBottom: "5%" }}>
                    <span>
                      {"지방" + " "}

                      <small>{fat + " " + "%"}</small>
                    </span>
                    <Slider
                      min={0}
                      max={100}
                      onChange={onChangefat}
                      value={fat}
                    />
                  </div>
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
