import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
