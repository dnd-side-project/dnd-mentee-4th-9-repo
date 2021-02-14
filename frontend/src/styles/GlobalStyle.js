import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    overflow-x: hidden;
  }
  
  * {
    box-sizing: border-box;
  }

  h2, h3, li, p, button, span {
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
