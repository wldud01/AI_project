import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chart from "react-apexcharts";
//list
//ui
// DB or api 임시방편
import BarButton from "../ui/barButton";
// header 아래 body 부분을 감싸는 wapper
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36%;
`;
const FoodTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 15pt;
  font-weight: 600;
`;

const SpanWrap = styled.div`
  display: flex;
  letter-spacing: 1px;
  font-size: 16px;
  flex-direction: column;
  width: 69%;
  align-items: flex-start;
  justify-content: space-evenly;
  position: relative;
  height: 110px;
`;

// button contents에 감싸는 container
const Container = styled.div`
  padding-top: 9%;
  padding-bottom: 13%;
  width: 88%;
  height: auto;
  max-width: 45rem;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 35%) 32%,
    rgb(238 243 247 / 44%) 48.19%,
    rgba(150, 205, 255, 0.15) 100%
  );
  box-shadow: 0px 34px 86px 0px rgba(1, 0, 60, 0.25);
`;
const TextPoint = styled.span`
  background: #0066b4;
  border-radius: 10px;
  padding: 2px 8px;
  color: white;
  font-size: small;
  font-weight: 600;
`;
const Red = styled.span`
  color: #c70000;
  font-weight: 700;
`;
const Space = styled.div`
  width: 100%;
  height: 85px;
  max-width: 45rem;
  margin-top: 5%;
`;

// mainpage body에 button 눌렀을 때 해당하는 부분
function FoodInfo(props) {
  const { post, onClick } = props;
  console.log(post);
  const navigate = useNavigate();

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5, // Adjust the borderRadius to make it more curved
        dataLabels: {
          position: "end", // Position the data labels at the top of the bars
        },
      },
    },

    dataLabels: {
      enabled: true,
      style: {
        colors: ["#0300a4"], // Set the color to black (#000000)
      },
      formatter: function (val) {
        return val + " g"; // Add "g" unit to the data labels
      },
    },
    xaxis: {
      categories: ["탄수화물", "단백질", "지방"],
      labels: {
        show: false, // Remove the grid labels
      },
    },
    grid: {
      show: false, // Set this to false to remove the grid lines
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [post.NUTR_CONT2 * 1, post.NUTR_CONT3 * 1, post.NUTR_CONT4 * 1],
    },
  ];

  return (
    <Wrapper>
      <Container>
        <FoodTitle>
          <Title>{post.DESC_KOR}</Title>
          <span style={{ fontSize: "smaller", color: "#989898" }}>
            {post.SERVING_SIZE + "g (1회 제공량)"}
          </span>
          <span>{post.NUTR_CONT1} Kcal</span>
        </FoodTitle>
        <Chart
          options={options}
          series={series}
          type="bar"
          width={280}
          height={180}
        />
        <SpanWrap>
          <span>
            당류 하루권장량의{" "}
            <TextPoint>{Math.floor((post.NUTR_CONT5 / 50) * 100)}%</TextPoint>{" "}
          </span>
          <span>
            나트륨 하루권장량의{"  "}
            <TextPoint>
              {" "}
              {Math.floor((post.NUTR_CONT6 / 2000) * 100)}%{" "}
            </TextPoint>
          </span>
          <span>
            콜레스테롤 {post.NUTR_CONT7}mg{" "}
            {post.NUTR_CONT7 > 300 ? (
              <Red>주의</Red>
            ) : (
              <TextPoint>
                {Math.floor((post.NUTR_CONT7 / 300) * 100)}%
              </TextPoint>
            )}{" "}
          </span>
        </SpanWrap>
      </Container>
      <BarButton id="FoodInfo_Btn" title={"뒤로가기"} onClick={onClick} />
      <Space />
    </Wrapper>
  );
}
export default FoodInfo;
