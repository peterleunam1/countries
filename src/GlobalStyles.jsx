import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 0.9rem;
        font-weight: 350;
        background: ${({theme})=> theme.colors.background};
        color: ${({theme})=> theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`