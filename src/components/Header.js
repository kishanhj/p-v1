import React from "react";
import styled from "styled-components" 

const StyledHeader = styled.header`
    // background-color : yellow;
    display : flex;
`;

const Nav = styled.nav`
    display : flex;
    justify-content : center;
`;

const Link = styled.a`
    text-decoration : none;
    padding : 1em;

`;

const Image = styled.img`
    width : 60px;
    margin : 5px;
`;


const Header = (props) => {
    
    return (
        <StyledHeader>
                <Image src="./img.png" />
                <Nav>
                    <Link href="/"> 1.About </Link>
                    <Link href="/"> 2.Experience </Link>
                    <Link href="/"> 3.Projects </Link>
                    <Link href="/"> 4.Contact </Link>
                </Nav>
        </StyledHeader>
    );
}

export default Header;