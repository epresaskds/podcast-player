import styled from "styled-components";
import { Link } from "react-router-dom";

interface SpinnerProps {
  readonly visible: boolean;
}

export const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const Section = styled.section`
  padding: 10px;
  & ~ & {
    border-top: 2px solid;
  }
`;
export const Paragraph = styled.p`
  font-style: italic;
`;

export const Title = styled.h3`
  font-style: bold;
`;
export const Author = styled.p`
  font-style: italic;
`;
export const Description = styled.h4`
  font-style: bold;
`;
