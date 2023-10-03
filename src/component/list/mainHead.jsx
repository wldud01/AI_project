import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import Header from "../ui/header";

/**
 * Mainpage에서 위에 header 부분
 */

// 추후에 DB에서 바꾸기
const foodlist = [
  "치킨",
  "국밥",
  "샐러드",
  "돈까스",
  "족발",
  "샌드위치",
  "닭발",
];
function MainHeader() {
  const [index, setIndex] = useState(0);

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
    }, 1500);
    if (index > 6) {
      setIndex(0);
    }
    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, [index]);

  // header에 음식이 계속 바뀜
  const Food = foodlist[index];

  return <Header span={Food + " 먹기 딱 좋은 날"} />;
}
export default MainHeader;
