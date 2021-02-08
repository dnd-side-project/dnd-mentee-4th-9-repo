import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  h2, h3, p, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
