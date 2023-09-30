import React from "react";
import styled from "styled-components";
import PhotoPost from "./photoPostItem";

const Bottom = styled.div`
  width: 100%;
  height: 4.5rem;
`;
const Wrapper = styled.div``;
function PhotoList(props) {
  const { post, onClickItem } = props;
  // post값 자체도 props로 해서 매칭시킴
  return (
    <Wrapper id="PhotoContainer">
      {post.map((post, index) => {
        return <PhotoPost key={post.id} post={post}></PhotoPost>;
      })}
      <Bottom />
    </Wrapper>
  );
}

export default PhotoList;
