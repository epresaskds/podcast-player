import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-family-montserrat: 'Montserrat', sans-serif;
    --font-family-ptsans: 'PT Sans Narrow', sans-serif;

    --color-white: #ffffff;
    --color-black-pure: #000000;
    --color-black: #212529;
    --color-blue-primary: #0077B6;
    --color-blue-secondary: #48CAE4;
    --color-gray-light: #DEE2E6;
    --color-gray-medium: #929598;
    --color-gray-dark: #6C757D;
  }

  body {
    box-sizing: border-box;
    font-family: var(--font-family-montserrat)
  }
`;
