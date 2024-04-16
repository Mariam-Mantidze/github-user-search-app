import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
margin:0;
padding: 0;
box-sizing: border-box;
}

body, button, span {
    font-family: "Space Mono", monospace;
}

body {
    padding: 31px 24px 79px;
    display:flex;
    flex-direction: column;

 
}
`;
