import React, { useState } from "react";
import styled from "styled-components";
import FoodApiItem from "./foodApiItem";
import FoodInfo from "../page/foodInfo";

const Bottom = styled.div`
  width: 100%;
  height: 4.5rem;
`;
const Wrapper = styled.div``;
function FoodApiList(props) {
  const { post } = props;
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  // post값 자체도 props로 해서 매칭시킴
  return (
    <Wrapper id="PhotoContainer">
      {post.map((post, index) => {
        if (clicked) {
          <FoodInfo post={post} />;
        } else {
          return (
            <FoodApiItem
              key={post.FOOD_CD}
              post={post}
              onClick={() => setClicked(true)}
            ></FoodApiItem>
          );
        }
      })}
      <Bottom />
    </Wrapper>
  );
}

export default FoodApiList;
