import  { css } from "styled-components";

const transitionStyles = css`
    .fade-enter {
        opacity : 0;
        transform : translateX(20px);
        transition : transform 300ms ease-in,opacity 300ms ease-in;
    }
    
    .fade-enter-active {
        opacity : 1;
        transform : translateX(0px);
        transition : transform 300ms ease-in,opacity 300ms ease-in;
    }
`;

export default transitionStyles;