import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  row-gap: 60px;
  column-gap: 20px;
`;
