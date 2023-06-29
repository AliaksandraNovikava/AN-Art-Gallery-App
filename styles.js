import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin-top:0;
    margin-bottom:60px;
    top:0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
