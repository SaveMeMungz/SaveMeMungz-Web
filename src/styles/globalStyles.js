'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 100%;
    }

  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        min-height: 100vh;
        width: 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
    }

    main {
    width: 100%; 
    min-height: 100vh;
    background-color: white;
    overflow-x: hidden;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

    @media (max-width: 430px) {
        main {
            width: 100%;
        }
    }

    .container {
        padding: 0 var(--horizontal-padding);
    }

`;

export default GlobalStyle;
