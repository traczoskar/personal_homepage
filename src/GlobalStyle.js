import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        word-break: break-word;
        transition: background 0.3s;
        font-size: 18px;
        background-color: ${({ theme }) => theme.colors.app.background};
        color: ${({ theme }) => theme.colors.app.text};
        letter-spacing: 0.05em;
        padding-bottom: 108px;      
    }
`;
