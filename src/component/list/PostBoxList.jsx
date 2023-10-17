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
  const { list, id } = props;
  const [category, setCategory] = useState(list);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCat, setSelectedCat] = useState([]);
  const toggleCat = (cat) => {
    if (selectedCat.includes(cat)) {
      setSelectedCat(selectedCat.filter((c) => c !== cat));
    } else {
      setSelectedCat([...selectedCat, cat]);
    }
  };

  return (
    <Wrapper id={id}>
      {category.map((cat, index) => (
        <TabButton
          className={selectedCat.includes(cat) ? "tab_btn_clicked" : "tab_btn"}
          key={cat}
          category={cat}
          title={cat}
          onClick={() => {
            console.log(selectedCat);
            toggleCat(cat);
          }}
        />
      ))}
    </Wrapper>
  );
}

export default PostBoxList;
