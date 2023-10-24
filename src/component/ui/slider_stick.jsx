import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// 버튼 껍데기 ㄴ만들기

function Slider_stick(props) {
  const { min, max, rate, fact } = props;
  const [value, setValue] = useState(0);
  var kcal = 0;
  var carb = 0;
  var fat = 0;
  var protein = 0;

  // 영양성분 Slider 값
  const onChangeValue = (newValue) => {
    setValue(newValue);
    console.log(`${fact}`, newValue);
  };

  if (fact === "칼로리") {
    kcal = value;
  }
  if (fact === "탄수화물") {
    carb = value;
  }
  if (fact === "지방") {
    fat = value;
  }
  if (fact === "단백질") {
    protein = value;
  }

  console.log(kcal, carb, fat, protein);
  return (
    <div style={{ marginBottom: "5%" }}>
      <span>
        {fact + " "}

        <small>
          {value + " "}
          {fact === "칼로리" ? "Kcal" : "%"}
        </small>
      </span>
      <Slider min={min} max={max} onChange={onChangeValue} value={value} />
    </div>
  );
}
export default Slider_stick;
