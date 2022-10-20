import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 60px;
`;
export const Input = styled.input.attrs(({ value }) => ({
  type: "text",
  name: "filter",
  value: value,
}))`
  width: 260px;
  border-radius: 4px;
  height: 24px;
  padding: 5px;
  border: 2px solid var(--color-gray-light);
  outline: none;
  font-size: 14px;
  font-family: var(--font-family-montserrat);

  &:focus {
    border-color: var(--color-blue-primary);
  }
`;
