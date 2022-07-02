import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  :root {
    --maxWidth: 1280px;
    --black: #222222;
    --primary: #ff385c;
    --white: #fff;
    --lightGrey: #f7f7f7;
    --medGrey: #dddddd;
    --grey: #717171;
    --darkGrey: #1c1c1c;
    --gold: #ffd700;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`}`;
