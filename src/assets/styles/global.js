import { createGlobalStyle } from 'styled-components';
import bg from '../imgs/bg.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    background-image: url(${bg});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #dff0ea;
    color: #000;
    -webkit-font-smoothing: antialiased !important;
  }
`;
