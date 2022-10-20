import React from "react";

import {
  Header as HeaderWrapper,
  HeaderTitle,
  Spinner,
  HeaderLink,
} from "./Header.styles";

const Header = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">
        <HeaderTitle>Podcaster</HeaderTitle>
      </HeaderLink>
      <Spinner visible={isLoading} />
    </HeaderWrapper>
  );
};

export default Header;
