import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/ReceiptList";
import Navi from "../list/nav";
//ui
import TabButton from "../ui/tabButton";
// import data from "../../data.json";
import Header from "../list/mainHead";
import Back from "./image/Back.svg";
import PostBoxList from "../list/PostBoxList";
import axios from "axios";

/**
 * photo Share page
 *  사용자들이 잘 찍었다고 생각하는 사진들을 공유하는 공간
 *  저기 중에 하나 누르면 배민 링크나, 지도 링크, 위치 url로 넣어서 공유가능
 *
 */
const BestContentWrapper = styled.div`
  border-radius: 1px;
  width: 100%;
  height: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 35%) 32%,
    rgb(238 243 247 / 44%) 48.19%,
    rgba(150, 205, 255, 0.29) 100%
  );
  filter: blur(1px);
  position: relative;
`;
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: inherit;
  max-width: 45rem;
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1%;
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
/**
 *
 * Data는 Json이 담겨 있는 list로 받는다.
 * content API 만들기
 *
 * /photoContent
 * /phtoContent/{id}
 */

// mainpage body에 해당하는 부분
function photoShare(props) {
  const {} = props;
  const [data, setData] = useState([]);
  //tab button
  const [category, setCategory] = useState(["한식", "양식", "중식", "일식"]);

  const [selectedCat, setSelectedCat] = useState([]);
  const toggleCat = (cat) => {
    if (selectedCat.includes(cat)) {
      setSelectedCat(selectedCat.filter((c) => c !== cat));
    } else {
      setSelectedCat([cat]);
    }
    console.log(selectedCat);
  };

  useEffect(() => {
    let apiUrl = "http://172.28.24.85:8080/spring/contents";

    if (selectedCat.length > 0) {
      // 선택한 카테고리가 존재하는 경우
      apiUrl = `http://172.28.24.85:8080/spring/content/?id=${selectedCat}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCat]);
  console.log(data);
  const navigate = useNavigate(); // route를 사용하기 위해서 useNavigator를 보면
  // 그리고 버튼을 눌렀을 때 경로를 설정해 두고 만약 아이디마다 다른 값을 두고 싶다면 파라미터를 이용하자!
  return (
    <div className="ReceiptShare_div">
      <Header
        srcFront={Back}
        btnId={"header_icon_back"}
        onClick={() => navigate(-1)}
      />
      <Wrapper>
        <Container>
          <BestContentWrapper>
            <Container />
          </BestContentWrapper>
          <ButtonWrap>
            <Text>
              <span onClick={() => navigate("/receipt/writepost")}>
                {"🙋 글쓰기"}
              </span>
            </Text>
            <Buttons>
              {category.map((cat, index) => (
                <TabButton
                  className={
                    selectedCat.includes(cat) ? "tab_btn_clicked" : "tab_btn"
                  }
                  key={cat}
                  category={cat}
                  title={cat}
                  onClick={() => {
                    console.log(selectedCat);
                    toggleCat(cat);
                  }}
                />
              ))}
            </Buttons>
          </ButtonWrap>

          <ContentBox post={data} />
        </Container>
        <Container />
      </Wrapper>
      <div className="main_nav">
        <Navi />
      </div>
    </div>
  );
}
export default photoShare;
