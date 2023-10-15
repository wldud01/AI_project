import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
import Header from "../list/mainHead";
import PostBox from "../list/PostBoxItem";
//ui
import Loading from "./loadingPage";
import Button from "../ui/button";
import TabButton from "../ui/tabButton";
// DB or api 임시방편
import data from "../../data.json";
import Back from "./image/Back.png";
import BarButton from "../ui/barButton";
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28%;
`;

// button contents에 감싸는 container
const Container = styled.div`
  width: 88%;
  height: 81%;
  max-width: 45rem;
  margin-top: 8%;
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
  width: 91%;
  color: black;
  font-size: 11pt;
  box-sizing: border-box;
  padding-left: 1%;
  border: 0px;
  border-bottom: 1px solid #8080803d;
  cursor: pointer;
  height: 100%;
`;

const Text = styled.p`
  font-size: 15pt;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 93%;
  justify-content: space-between;
  height: 100%;
`;

// mainpage body에 button 눌렀을 때 해당하는 부분
function MainPageInput(props) {
  const {} = props;
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [describe, setDescribe] = useState("");
  const [category, setCategory] = useState(["한식", "양식", "중식", "일식"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //image
  const [selectedImage, setSelectedImage] = useState("");

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
          <Header src={Back} onClick={() => navigate(-1)} />
          <Wrapper>
            <Container>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder=""
                />
                {selectedImage && (
                  <div>
                    <Text>맞으면 확인 눌러주세요.</Text>
                    <img
                      src={selectedImage}
                      alt="Selected"
                      width="200"
                      height="100"
                    />
                  </div>
                )}
              </div>
              <PostBox
                title="제목"
                content={
                  <Input
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    placeholder={"닉네임을 입력해주세요"}
                  ></Input>
                }
              />
              <PostBox
                title="종류"
                content={
                  <ButtonWrap>
                    {category.map((cat, index) => (
                      <TabButton
                        key={cat}
                        category={cat}
                        title={cat}
                        onClick={() => {
                          setSelectedCategory([cat]);
                          console.log(selectedCategory);
                        }}
                      />
                    ))}
                  </ButtonWrap>
                }
              />
              <PostBox
                title="설명"
                content={
                  <Input
                    value={describe}
                    onChange={(e) => {
                      console.log(selectedCategory);
                      setDescribe(e.target.value);
                    }}
                    placeholder={"닉네임을 입력해주세요"}
                  ></Input>
                }
              />
              <PostBox title="지역 선택" content="서울특별시 중랑구" />
              <PostBox
                title="내가 인정한 찐맛집 모두에게 알려주세요"
                content="배민 가게 공유 URL을 넣어주세요 🙇‍♂️"
              />
            </Container>
            <BarButton id="chooseFoodCat_Btn" title={"맞춤 음식 추천받기"} />
          </Wrapper>

          <div className="main_nav">
            <Navi />
          </div>
        </div>
      )}
    </div>
  );
}
export default MainPageInput;
