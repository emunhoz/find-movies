import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  html,
  #root {
    height: 100vh;
  }

  body {
    min-height: 100%;
    margin: 0;
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background: #0a1014;
  }
`;
 
export default GlobalStyle