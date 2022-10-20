import styled from "styled-components";
import { Link } from "react-router-dom";

interface SpinnerProps {
  readonly visible: boolean;
}

export const Header = styled.header`
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0vh;
  z-index: 1;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-family: var(--font-family-ptsans);
  font-size: 20px;
  color: var(--color-blue-primary);
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const Spinner = styled.div<SpinnerProps>`
  border: 2px solid var(--color-blue-secondary);
  border-top: 2px var(--color-blue-primary) solid;
  border-radius: 50%;
  display: ${({ visible }) => (visible ? "block" : "none")};
  height: 24px;
  width: 24px;
  animation: spin 1s linear infinite;
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
