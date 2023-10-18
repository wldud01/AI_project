import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import Navi from "../list/nav";
import Header from "../list/mainHead";
import PostBox from "../list/PostBoxItem";
import PostBoxList from "../list/PostBoxList";
//ui
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
  //image
  const [selectedImage, setSelectedImage] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

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
                  <PostBoxList
                    onClick={handleButtonClick}
                    list={["한식", "양식", "중식", "일식"]}
                  />
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
              onClick={() => {
                if (
                  text === "" ||
                  describe === "" ||
                  selectedImage === "" ||
                  cat === ""
                ) {
                  alert("모두 입력해주세요.");
                }
              }}
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
