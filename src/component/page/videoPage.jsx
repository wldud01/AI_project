import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//list
import ContentBox from "../list/postListItem";
import Navi from "../list/nav";
import Header from "../list/mainHead";
//ui
import Loading from "./loadingPage";
import Button from "../ui/button";
// DB or api 임시방편
import data from "../../data.json";
import Back from "./image/Back.png";
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-top: 46%;
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

// mainpage body에 button 눌렀을 때 해당하는 부분
function VideoPage(props) {
  const {} = props;
  const [loading, setLoading] = useState(true);

  //데이터 불러오면서 걸리는 시간
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  useEffect(() => {
    fetchData().then(() => {
      setLoading(false); // 초기화 작업이 완료되면 로딩 상태를 false로 변경
    });
  }, []);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

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
            <Carousel showArrows={true}>
              <div>
                <img src={Back} alt="Image 1" />
                <p className="legend">Image 1</p>
              </div>
              <div>
                {"링크"}
                <a href="https://yozm.wishket.com/magazine/list/search/?q=%EC%9D%8C%EC%8B%9D"></a>
              </div>
              <div>
                <img src={Back} alt="Image 3" />
                <p className="legend">Image 3</p>
              </div>
            </Carousel>
          </Wrapper>

          <div className="main_nav">
            <Navi />
          </div>
        </div>
      )}
    </div>
  );
}
export default VideoPage;
