import React from "react";

import {
  Header as HeaderWrapper,
  HeaderTitle,
  Spinner,
  HeaderLink,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">
        <HeaderTitle>Podcaster</HeaderTitle>
      </HeaderLink>
      <Spinner visible />
    </HeaderWrapper>
  );
};

export default Header;
