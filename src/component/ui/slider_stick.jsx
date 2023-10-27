import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// 버튼 껍데기 ㄴ만들기

function Slider_stick(props) {
  const { min, max, onChange, fact, values } = props;
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(values);
  }, [values]);
  return (
    <div style={{ marginBottom: "5%" }}>
      <span>
        {fact + " "}

        <small>
          {value + " "}
          {fact === "칼로리" ? "Kcal" : "%"}
        </small>
      </span>
      <Slider min={min} max={max} onChange={onChange} value={values} />
    </div>
  );
}
export default Slider_stick;
