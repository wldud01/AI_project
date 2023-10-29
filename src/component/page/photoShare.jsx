import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";
import Loading from "./dataLoading";
import axios from "axios";
import FoodApiItem from "../list/foodApiItem";
//ui
import Button from "../ui/button";
//page
import FoodInfo from "./foodInfo";

import Back from "./image/Back.svg";

/**
 * photo Share page
 *  사용자들이 잘 찍었다고 생각하는 사진들을 공유하는 공간
 *  저기 중에 하나 누르면 배민 링크나, 지도 링크, 위치 url로 넣어서 공유가능
 *
 */

// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
`;
const BestContentWrapper = styled.div`
  border-radius: 1px;
  width: 100%;
  height: 37%;
  display: flex;

  align-items: center;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 35%) 32%,
    rgb(238 243 247 / 44%) 48.19%,
    rgba(150, 205, 255, 0.29) 100%
  );
  position: relative;
  box-sizing: border-box;
  padding-top: 36%;
  display: flex;
  justify-content: center;
`;

// button contents에 감싸는 container
const Container = styled.div`
  width: 100%;
  height: inherit;
  max-width: 45rem;
`;
const Input = styled.input`
  background: #fff;
  /* margin-bottom: 5%; */
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58%;
  color: black;
  font-size: 11pt;
  box-sizing: border-box;
  padding-left: 2%;
  border: 0px;
  border-bottom: 1px solid #8080803d;
  cursor: pointer;
  height: 46px;
  border-radius: 13px;
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1%;
  margin-top: 4%;
`;
const Buttons = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  justify-content: space-evenly;
`;
const Text = styled.span`
  display: flex;
  font-size: 16px;
  width: 76%;
  height: auto;
  justify-content: end;
  align-items: center;
  color: #4369ad;
  font-weight: 700;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 2.5%;
  margin-bottom: 1.5%;
`;
const Bottom = styled.div`
  width: 100%;
  height: 4.5rem;
`;

// Define a cache key for localStorage
const CACHE_KEY = "foodApi";
// mainpage body에 해당하는 부분
function photoShare(props) {
  const {} = props;
  const [data, setData] = useState([]);
  //tab button
  const [loading, setLoading] = useState(true); // State to track loading
  const [selectedCat, setSelectedCat] = useState(null);
  const [text, setText] = useState("");

  const onSearch = () => {
    if (text !== "") {
      axios
        .get(
          "http://openapi.foodsafetykorea.go.kr/api/3780bc83186a4d7ebdb3/I2790/json/1/10/DESC_KOR=" +
            `${text}`
        )
        .then((response) => {
          const jsonData = response.data;
          if (
            jsonData &&
            jsonData.I2790 &&
            jsonData.I2790.row &&
            jsonData.I2790.row.length > 0
          ) {
            // 너무 빈약한 데이터 걸러내기
            const filterjson = response.data.I2790.row;
            const filteredData = filterjson.filter((item) => {
              return (
                item.NUTR_CONT1 !== "" &&
                item.NUTR_CONT2 !== "" &&
                item.NUTR_CONT4 !== ""
              );
            });
            // API 응답이 유효한 데이터를 포함하고 있을 때
            setData(filteredData);
            setLoading(false);
            // 가져온 데이터를 localStorage에 캐싱
            localStorage.setItem(CACHE_KEY, JSON.stringify(filteredData));
          } else {
            // API 응답에 데이터가 없을 때 에러 처리
            handleApiError();
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // 에러가 발생한 경우 이전에 캐시한 데이터를 사용
          handleApiError();
        });
    }
  };
  //localStorage.removeItem("foodApi");
  // API 에러 처리 및 캐시된 데이터를 사용하는 함수
  const handleApiError = () => {
    alert("적절한 데이터가 없네요😭");
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setData(parsedData);
      setLoading(false);
    } else {
      // 캐시된 데이터도 없는 경우에 대한 처리 (예: 사용자에게 에러 메시지 표시)
      console.error("No cached data available.");
    }
  };
  useEffect(() => {
    // Try to retrieve cached data from localStorage
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      // If cached data exists, use it
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      // If no cached data, fetch data from your API
      axios
        .get(
          "http://openapi.foodsafetykorea.go.kr/api/3780bc83186a4d7ebdb3/I2790/json/1/40"
        )
        .then((response) => {
          const jsonData = response.data.I2790.row;
          // 너무 빈약한 데이터 걸러내기
          const filteredData = jsonData.filter((item) => {
            return (
              item.NUTR_CONT1 !== "" &&
              item.NUTR_CONT2 !== "" &&
              item.NUTR_CONT3 !== "" &&
              item.NUTR_CONT4 !== ""
            );
          });

          setData(filteredData);
          setLoading(false);

          // Cache the data in localStorage
          localStorage.setItem(CACHE_KEY, JSON.stringify(filteredData));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);
  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <div>
      <Header
        srcFront={Back}
        btnId={"header_icon_back"}
        onClick={() => navigate(-1)}
      />
      <Wrapper>
        {selectedCat ? (
          <FoodInfo post={selectedCat} onClick={() => setSelectedCat(null)} />
        ) : (
          <Container>
            <BestContentWrapper>
              <Input
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder={"음식을 입력해주세요"}
              />
              <Button title="검색" onClick={onSearch} btnid="Search_Btn" />
            </BestContentWrapper>
            <ButtonWrap>
              <Buttons></Buttons>
            </ButtonWrap>
            {loading ? (
              // Display a loading indicator while data is being fetched
              <Loading />
            ) : (
              // Display the data when it's loaded
              <div id="PhotoContainer">
                {data.map((post, index) => {
                  return (
                    <FoodApiItem
                      key={post.FOOD_CD}
                      post={post}
                      onClick={() => setSelectedCat(post)}
                    ></FoodApiItem>
                  );
                })}
                <Bottom />
              </div>
            )}
          </Container>
        )}
        <Container />
      </Wrapper>
      <div className="main_nav">
        <Navi />
      </div>
    </div>
  );
}
export default photoShare;
