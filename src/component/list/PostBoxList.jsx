import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabButton from "../ui/tabButton";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  height: 97%;
  box-sizing: border-box;
  flex-wrap: wrap;
  /* padding-left: 6%; */
`;

function PostBoxList(props) {
  const { list, id, onClick, className } = props;
  const [category, setCategory] = useState(list);
  const [selectedCat, setSelectedCat] = useState([]);

  return (
    <Wrapper id={id}>
      {category.map((cat, index) => (
        <TabButton
          className={className}
          key={cat}
          category={cat}
          title={cat}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  );
}

export default PostBoxList;
