import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 97%;
`;
const SelectOne = styled.select`
  width: 203px;
  display: flex;
  height: 36px;
  margin-top: 3%;
  border-radius: 10px;
`;

function DropdownMenu(props) {
  const { list, onChange, value } = props;

  return (
    <Wrapper>
      <SelectOne id="regions" onChange={onChange} value={value}>
        <option value="">-- 선택하세요 --</option>
        {list.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </SelectOne>
    </Wrapper>
  );
}

export default DropdownMenu;
