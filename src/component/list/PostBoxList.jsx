import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 98%;
  height: 17%;
  box-sizing: border-box;
  padding-left: 6%;
  flex-direction: column;
`;

function PostBoxList(props) {
  const { list, content } = props;
  const [category, setCategory] = useState(list);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Wrapper>
      {category.map((cat, index) => (
        <TabButton
          key={cat}
          category={cat}
          title={cat}
          onClick={() => {
            setSelectedCategory([cat]);
            console.log(selectedCategory);
          }}
        />
      ))}
    </Wrapper>
  );
}

export default PostBoxList;
