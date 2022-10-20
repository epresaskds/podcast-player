import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.aside`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 230px;
  max-width: 300px;
  min-width: 230px;
  border: 2px solid var(--color-gray-light);
`;

export const Avatar = styled.img`
  pointer-events: none;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const Section = styled.section`
  width: 100%;
  padding: 10px;
  &.image {
    text-align: center;
  }
  & ~ & {
    border-top: 2px solid var(--color-gray-light);
  }
`;
export const Paragraph = styled.p`
  font-style: italic;
  font-size: 14px;
  color: var(--color-gray-dark);
  font-weight: bold;
  line-height: 20px;
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 8px;
`;
export const Author = styled(Paragraph)`
  font-style: italic;
  font-size: 14px;
  margin-top: 0;
`;
export const DescriptionTitle = styled.h4`
  font-style: bold;
`;
export const Description = styled(Paragraph)`
  font-style: bold;
  font-size: 14px;
`;
