import styled from "styled-components";
import { Link } from "react-router-dom";

export const Grid = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  row-gap: 60px;
  column-gap: 20px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  align-self: center;
  width: 100%;
`;
