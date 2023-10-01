import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
//ui
import Loading from "./loadingPage";
import Button from "../ui/button";
// DB or api 임시방편
import data from "../../data.json";

// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #575757;
`;

// button contents에 감싸는 container
const Container = styled.div`
  width: 91%;
  height: 73%;
  max-width: 45rem;
  margin-top: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;

const Text = styled.p`
  font-size: 15pt;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 81%;
  justify-content: space-evenly;
  height: 9%;
`;

// mainpage body에 button 눌렀을 때 해당하는 부분
function MainPageInput(props) {
  const {} = props;
  const [loading, setLoading] = useState(true);
  //image
  const [selectedImage, setSelectedImage] = useState(null);

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
              <ButtonWrap>
                <Button
                  btnid="inputBtnBack"
                  title="뒤로가기"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <Button btnid="inputBtnNext" title="확인" />
              </ButtonWrap>
            </Container>
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
