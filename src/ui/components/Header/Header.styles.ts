import styled from "styled-components";
import { Link } from "react-router-dom";

interface SpinnerProps {
  readonly visible: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled.span`
  color: "blue";
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const Spinner = styled.div<SpinnerProps>`
  border: 2px solid pink;
  border-top: 2px deeppink solid;
  border-radius: 50%;
  display: ${({ visible }) => (visible ? "block" : "none")};
  height: 24px;
  width: 24px;
  animation: spin 2s linear infinite;
  margin-inline-start: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
