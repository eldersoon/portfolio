import styled from 'styled-components';

/**
 * Header style
 */
export const Header = styled.header`
    position: relative;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .menu {
        margin: auto 0;
        margin-right: 90px;
        padding: 0;
        list-style: none;
        font-size: 25px;
        color: #fff;
    }

    .menu li {
        display: inline;
        padding: 0 20px;
    }

    .menu li a{
        color: #c1c1c1;
        text-decoration: none;
    }

    .menu li a:hover{
        color: #fff;
    }

    .place-logo {
        content: "";
        position: absolute;
        top: -160px;
        left: 2%;
        display: flex;
        align-items: flex-end;
        padding-bottom: 35px;
        background-color: #fff;
        width: 270px;
        height: 250px;
        border-radius: 0 0 105px 105px;
        z-index: 0;
    }

    nav .logo {
        color: #111;
        font-family: 'Advent Pro', sans-serif;
        font-size: 35pt;
        display: block;
        margin: 0 auto;
    }

    nav .logo:hover {
        text-decoration: none;
    }
`;