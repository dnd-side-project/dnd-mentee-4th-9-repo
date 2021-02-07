import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * {
      font-family: 'Noto Sans KR', sans-serif;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
