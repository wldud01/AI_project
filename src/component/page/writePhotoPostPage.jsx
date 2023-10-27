import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";
import PostBox from "../list/PostBoxItem";
import PostBoxList from "../list/PostBoxList";
import TabButton from "../ui/tabButton";
//ui
// DB or api 임시방편
import data from "../../data.json";
import Back from "./image/Back.svg";
import BarButton from "../ui/barButton";
import axios from "axios";
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
  padding-top: 10%;
  padding-bottom: 10%;
  width: 88%;
  height: auto;
  max-width: 45rem;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;
const Input = styled.input`
  background: #fff;
  /* margin-bottom: 5%; */
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
  color: black;
  font-size: 11pt;
  box-sizing: border-box;
  padding-left: 1%;
  border: 0px;
  border-bottom: 1px solid #8080803d;
  cursor: pointer;
  height: 46px;
`;
const FileWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 7%;
`;
const FileSelectBtn = styled.input`
  display: flex;
  width: 30%;
  position: relative;
  color: white;
`;
const FileImg = styled.img`
  width: 42px;
  height: 40px;
  border-radius: 10px;
`;
// 버튼을 감싸는 부분
const ButtonWrap = styled.div`
  display: flex;
  width: 98%;
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
const Space = styled.div`
  width: 100%;
  height: 85px;
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
function MainPageInput(props) {
  const {} = props;
  const [text, setText] = useState("");
  const [describe, setDescribe] = useState("");
  const [url, setURL] = useState("");
  const [category, setCategory] = useState(["한식", "양식", "중식", "일식"]);
  //image
  const [selectedImage, setSelectedImage] = useState("");
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = now.getDate();

  const [selectedCat, setSelectedCat] = useState([]);

  //categorhy
  const toggleCat = (cat) => {
    if (selectedCat.includes(cat)) {
      setSelectedCat(selectedCat.filter((c) => c !== cat));
    } else {
      setSelectedCat([...selectedCat, cat]);
    }
  };
  const navigate = useNavigate();

  async function handleSummitClick() {
    if (
      text === "" ||
      describe === "" ||
      selectedImage === "" ||
      selectedCat === ""
    ) {
      alert("모두 입력해주세요.");
    } else {
      // 전송할 데이터를 객체로 만들기
      const data = {
        authorId: "hello",
        location: "서울특별시",
        title: text,
        text: describe,
        fileUrl: "http://" + { selectedImage }, // 이미지 데이터 (base64 문자열 또는 이미지 URL로 변환된 데이터)
        shareUrl: url,
        category: selectedCat, // "한식", "양식", "중식", "일식" 중에서 선택된 값
        createdDate: `${year}-${month}-${day}`,
        voteCount: 0,
      };
      console.log(data);
      // Spring Boot 서버의 엔드포인트 URL 설정
      const Url = "http://172.28.24.85:8080/spring/content/new"; // 원하는 엔드포인트 URL로 변경하세요

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
    }
    navigate("/");
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // 선택한 이미지 파일 가져오기

    // 파일이 이미지인지 확인 (예: 확장자 검사)
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // 이미지 파일을 데이터 URL로 변환하여 selectedImage 상태에 저장
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

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
            <FileWrapper>
              <FileSelectBtn
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                placeholder="사진 선택"
              />
              {selectedImage && (
                <div>
                  <FileImg src={selectedImage} alt="Selected" />
                </div>
              )}
            </FileWrapper>
            <PostBox
              title="제목"
              content={
                <Input
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder={"제목을 입력해주세요"}
                ></Input>
              }
            />
            <PostBox
              title="종류"
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
              title="설명"
              content={
                <Input
                  value={describe}
                  onChange={(e) => {
                    setDescribe(e.target.value);
                  }}
                  placeholder={"간단한 설명을 입력해주세요"}
                ></Input>
              }
            />
            <PostBox title="지역 선택" content="서울특별시 중랑구" />
            <PostBox
              title="가게 URL로 모두에게 알려주세요"
              content={
                <Input
                  value={url}
                  onChange={(e) => {
                    setURL(e.target.value);
                  }}
                  placeholder={"지도, 배민 URL 등등"}
                ></Input>
              }
            />
          </Container>
          <BarButtonStyle>
            <BarButton
              id="chooseFoodCat_Btn"
              title={"공유하기"}
              onClick={handleSummitClick}
            />
          </BarButtonStyle>
        </Wrapper>
        <Space />
        <div className="main_nav">
          <Navi />
        </div>
        <Space />
      </div>
      )
    </div>
  );
}
export default MainPageInput;
