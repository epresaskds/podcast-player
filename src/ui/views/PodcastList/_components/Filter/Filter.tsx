import React from "react";
import { FilterProps } from "../../../_types/Filter";
import { Wrapper, Input } from "./Filter.styles";

const Filter = ({ placeholder, value, onFilter }: FilterProps) => {
  return (
    <Wrapper>
      <Input placeholder={placeholder} value={value} onChange={onFilter} />
    </Wrapper>
  );
};

export default Filter;
