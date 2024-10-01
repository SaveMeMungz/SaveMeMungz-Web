'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 100%;
        --min-width: 320px;
        font-size: 16px;
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
    min-width: var(--min-width);
    min-height: 100vh;
    background-color: white;
    overflow-x: hidden;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

    /* 모바일  */
    @media (max-width: 320px) {
        body, main {
            min-width: 320px;
        }
    }

    /* 웹 */
    @media (min-width: 431px) {
        :root {
            font-size: 18px;
        }
        main {
            width: 430px;
        }
    }

    @media (min-width: 768px) {
        :root {
            font-size: 20px;
        }
        main {
            width: 480px;
        }
    }


    .container {
        padding: 0 var(--horizontal-padding);
    }

`;

export default GlobalStyle;
