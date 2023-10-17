import React, { useState } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// 버튼 껍데기 ㄴ만들기

function Slider_stick(props) {
  const { min, max, onChange, rate } = props;
  const [value, setValue] = useState(0);
  const onChangeValue = (newValue) => {
    console.log(`${rate}`, newValue);
    setValue(newValue);
  };
  return (
    <div style={{ marginBottom: "5%" }}>
      <span>
        {rate + " "}

        <small>
          {value + " "}
          {rate === "칼로리" ? "Kcal" : "%"}
        </small>
      </span>
      <Slider min={min} max={max} onChange={onChangeValue} value={value} />
    </div>
  );
}
export default Slider_stick;
