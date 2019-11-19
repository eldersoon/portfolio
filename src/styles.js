import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Advent+Pro&display=swap');

    html {
        height: 100% !important;
    }

    body {
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        background-color: #323235 !important; 
        font-family: 'Advent Pro', sans-serif !important;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 35px 0;
    color: #fff;
    display: block;
    margin: 0 auto;
    text-align: center;
`;