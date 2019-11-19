import styled from 'styled-components';

/**
 * Square up animmation
 */
export const Squares = styled.ul`
    li {
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.2);
        display: block;
        position: absolute;
        bottom: -100px;
        animation: up 6s infinite;
        z-index: -1;
    }

    @keyframes up {
        from { 
            opacity: 0;
            transform: translateY(0);
        }
        50%{
            opacity: 1
        }
        to { 
            opacity: 0;     
            transform: translateY(-1000px) rotate(1080deg);
        }
    }
`;