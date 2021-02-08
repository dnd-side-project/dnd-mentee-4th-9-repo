import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  h2, h3, p {
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
