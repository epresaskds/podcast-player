import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-family-montserrat: 'Montserrat', sans-serif;
    --font-family-ptsans: 'PT Sans Narrow', sans-serif;
  }

  body {
    font-family: var(--font-family-montserrat)
  }
`;
